# Database Schema - Travel Expense Management

Schema database cho Travel Expense Management App sử dụng Prisma ORM

---

## Core Models

### User

enum UserStatus {
  ACTIVE
  INACTIVE
  BANNED
}
```prisma
model User {
 id          Int        @id @default(autoincrement())
  email       String     @unique
  fullName    String
  password    String?
  dateOfBirth DateTime?
  gender      Int? // 0: Nam, 1: Nữ
  status      UserStatus @default(ACTIVE)
  isVerified  Boolean    @default(false)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  googleId    String?    @unique
  avatar      String     @default("https://res.cloudinary.com/dwawpy4lo/image/upload/v1768049609/avatars/Vector_12_eje0u9.png")

  // Relations
  tripMembers   TripMember[]
  expenses      Expense[]    @relation("PaidBy")
  expenseSplits ExpenseSplit[]
  devices       Device[]
  notifications Notification[]

  @@map("users")
}
```
model Role {
  id          Int              @id @default(autoincrement())
  name        String           @unique
  description String
  permissions RolePermission[]
  users       UserRole[]

  @@map("roles")
}

model Permission {
  id          Int              @id @default(autoincrement())
  name        String           @unique
  description String
  roles       RolePermission[]

  @@map("permissions")
}
model UserRole {
  userId Int
  roleId Int
  user   User @relation(fields: [userId], references: [id], onDelete: Cascade)
  role   Role @relation(fields: [roleId], references: [id], onDelete: Cascade)

  @@id([userId, roleId])
  @@map("user_roles")
}
model RolePermission {
  roleId       Int
  permissionId Int
  role         Role       @relation(fields: [roleId], references: [id], onDelete: Cascade)
  permission   Permission @relation(fields: [permissionId], references: [id], onDelete: Cascade)

  @@id([roleId, permissionId])
  @@map("role_permissions")
}

### Trip

```prisma
enum TripStatus {
  UPCOMING
  ONGOING
  COMPLETED
  ARCHIVED
}

model Trip {
  id              String       @id @default(uuid())
  name            String
  destination     String
  startDate       DateTime
  endDate         DateTime
  totalBudget     Decimal?     @db.Decimal(15, 2)
  defaultCurrency String       @default("VND")
  status          TripStatus   @default(UPCOMING)
  createdAt       DateTime     @default(now())
  updatedAt       DateTime     @updatedAt

  // Relations
  members         TripMember[]
  expenses        Expense[]
  budgets         Budget[]
  itineraries     Itinerary[]

  @@map("trips")
}
```

### TripMember

```prisma
enum MemberRole {
  OWNER
  MEMBER
}

enum InviteStatus {
  PENDING
  ACCEPTED
  REJECTED
}

model TripMember {
  id          String        @id @default(uuid())
  tripId      String
  userId      String
  role        MemberRole    @default(MEMBER)
  inviteStatus InviteStatus @default(PENDING)
  joinedAt    DateTime?
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt

  // Relations
  trip        Trip          @relation(fields: [tripId], references: [id], onDelete: Cascade)
  user        User          @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([tripId, userId])
  @@map("trip_members")
}
```

### Category

```prisma
model Category {
  id          String    @id @default(uuid())
  name        String
  icon        String?
  color       String?
  isDefault   Boolean   @default(false)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  expenses    Expense[]
  budgets     Budget[]

  @@map("categories")
}
```

### Expense

```prisma
enum ExpenseType {
  SHARED    // Chi tiêu chung
  PERSONAL  // Chi tiêu cá nhân
}

model Expense {
  id            String        @id @default(uuid())
  tripId        String
  amount        Decimal       @db.Decimal(15, 2)
  currency      String        @default("VND")
  categoryId    String
  description   String?
  paidById      String
  type          ExpenseType   @default(SHARED)
  date          DateTime      @default(now())
  receipt       String?       // URL ảnh hóa đơn
  isConfirmed   Boolean       @default(false)
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  // Relations
  trip          Trip          @relation(fields: [tripId], references: [id], onDelete: Cascade)
  category      Category      @relation(fields: [categoryId], references: [id])
  paidBy        User          @relation("PaidBy", fields: [paidById], references: [id])
  splits        ExpenseSplit[]

  @@map("expenses")
}
```

### ExpenseSplit

```prisma
enum SplitType {
  EQUAL       // Chia đều
  PERCENTAGE  // Theo phần trăm
  AMOUNT      // Số tiền cụ thể
}

model ExpenseSplit {
  id            String      @id @default(uuid())
  expenseId     String
  userId        String
  amount        Decimal     @db.Decimal(15, 2)
  percentage    Decimal?    @db.Decimal(5, 2)
  splitType     SplitType   @default(EQUAL)
  isPaid        Boolean     @default(false)
  paidAt        DateTime?
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  // Relations
  expense       Expense     @relation(fields: [expenseId], references: [id], onDelete: Cascade)
  user          User        @relation(fields: [userId], references: [id])

  @@unique([expenseId, userId])
  @@map("expense_splits")
}
```

### Budget

```prisma
model Budget {
  id          String    @id @default(uuid())
  tripId      String
  categoryId  String?   // null = total budget
  amount      Decimal   @db.Decimal(15, 2)
  spent       Decimal   @default(0) @db.Decimal(15, 2)
  warningAt   Int       @default(80) // % cảnh báo
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  trip        Trip      @relation(fields: [tripId], references: [id], onDelete: Cascade)
  category    Category? @relation(fields: [categoryId], references: [id])

  @@unique([tripId, categoryId])
  @@map("budgets")
}
```

### Itinerary

```prisma
model Itinerary {
  id          String    @id @default(uuid())
  tripId      String
  date        DateTime
  title       String
  description String?   @db.Text
  activities  Json?     // Array of activities
  photos      Json?     // Array of photo URLs
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  trip        Trip      @relation(fields: [tripId], references: [id], onDelete: Cascade)

  @@map("itineraries")
}
```

### Notification

```prisma
enum NotificationType {
  TRIP_INVITE
  MEMBER_JOINED
  EXPENSE_CREATED
  BUDGET_WARNING
  SETTLEMENT_REMINDER
  EXPENSE_REMINDER
}

model Notification {
  id          String            @id @default(uuid())
  userId      String
  type        NotificationType
  title       String
  message     String
  data        Json?
  isRead      Boolean           @default(false)
  readAt      DateTime?
  createdAt   DateTime          @default(now())

  // Relations
  user        User              @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("notifications")
}
```

### Device

```prisma
model Device {
  id          String    @id @default(uuid())
  userId      String
  fcmToken    String    @unique
  deviceName  String?
  deviceType  String?   // ios, android, web
  isActive    Boolean   @default(true)
  lastActiveAt DateTime @default(now())
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("devices")
}
```

---

## Indexes for Performance

```prisma
// Add indexes for frequently queried fields
@@index([tripId])
@@index([userId])
@@index([categoryId])
@@index([date])
@@index([status])
```

---

## Seed Data

### Default Categories

- 🍔 Ăn uống (Food & Drink)
- 🚗 Di chuyển (Transportation)
- 🏨 Khách sạn (Accommodation)
- 🎫 Vé tham quan (Tickets)
- 🛍️ Mua sắm (Shopping)
- 🎉 Giải trí (Entertainment)
- 💊 Y tế (Healthcare)
- 📱 Liên lạc (Communication)
- 🎯 Khác (Others)

---

## Migration Commands

```bash
# Generate migration
npx prisma migrate dev --name init

# Apply migration
npx prisma migrate deploy

# Seed database
npx prisma db seed

# Reset database
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate
```

---

_Ghi chú: File này mô tả database schema cho Travel Expense Management App_
