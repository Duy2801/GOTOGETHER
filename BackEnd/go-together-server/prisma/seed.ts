import "dotenv/config";
import { PrismaClient } from "./generated/client";
import * as bcrypt from "bcrypt";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});
// @ts-ignore
const prisma = new PrismaClient({ adapter });

async function main() {
  // console.log("🌱 Starting seed...");

  // Clear existing data (in reverse order of dependencies)
  // await prisma.$transaction([
  //   prisma.device.deleteMany({}),
  //   prisma.notification.deleteMany({}),
  //   prisma.itinerary.deleteMany({}),
  //   prisma.expenseSplit.deleteMany({}),
  //   prisma.expense.deleteMany({}),
  //   prisma.budget.deleteMany({}),
  //   prisma.tripMember.deleteMany({}),
  //   prisma.trip.deleteMany({}),
  //   prisma.category.deleteMany({}),
  //   prisma.userRole.deleteMany({}),
  //   prisma.rolePermission.deleteMany({}),
  //   prisma.user.deleteMany({}),
  //   prisma.permission.deleteMany({}),
  //   prisma.role.deleteMany({}),
  // ]);

  console.log("✅ Cleared existing data");

  // 1. Create Roles
  const adminRole = await prisma.role.create({
    data: {
      name: "ADMIN",
      description: "Administrator with full access",
    },
  });

  const userRole = await prisma.role.create({
    data: {
      name: "USER",
      description: "Regular user",
    },
  });

  console.log("✅ Created roles");

  // 2. Create Permissions
  const permissions = await Promise.all([
    prisma.permission.create({
      data: { name: "MANAGE_USERS", description: "Can manage users" },
    }),
    prisma.permission.create({
      data: { name: "MANAGE_TRIPS", description: "Can manage all trips" },
    }),
    prisma.permission.create({
      data: { name: "VIEW_ANALYTICS", description: "Can view analytics" },
    }),
  ]);

  console.log("✅ Created permissions");

  // 3. Create Role-Permission relationships
  await Promise.all(
    permissions.map((permission: any) =>
      prisma.rolePermission.create({
        data: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
      }),
    ),
  );

  console.log("✅ Created role-permission relationships");

  // 4. Create Users
  const hashedPassword = await bcrypt.hash("password123", 10);

  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: "admin@gotogether.com",
        fullName: "Admin User",
        password: hashedPassword,
        dateOfBirth: new Date("1990-01-01"),
        gender: 0,
        status: "ACTIVE",
        isVerified: true,
        avatar:
          "https://res.cloudinary.com/dwawpy4lo/image/upload/v1768049609/avatars/Vector_12_eje0u9.png",
      },
    }),
    prisma.user.create({
      data: {
        email: "user1@gotogether.com",
        fullName: "Nguyễn Văn A",
        password: hashedPassword,
        dateOfBirth: new Date("1995-05-15"),
        gender: 0,
        status: "ACTIVE",
        isVerified: true,
        avatar:
          "https://res.cloudinary.com/dwawpy4lo/image/upload/v1768049609/avatars/Vector_12_eje0u9.png",
      },
    }),
    prisma.user.create({
      data: {
        email: "user2@gotogether.com",
        fullName: "Trần Thị B",
        password: hashedPassword,
        dateOfBirth: new Date("1992-08-20"),
        gender: 1,
        status: "ACTIVE",
        isVerified: true,
        avatar:
          "https://res.cloudinary.com/dwawpy4lo/image/upload/v1768049609/avatars/Vector_12_eje0u9.png",
      },
    }),
    prisma.user.create({
      data: {
        email: "user3@gotogether.com",
        fullName: "Lê Văn C",
        password: hashedPassword,
        dateOfBirth: new Date("1998-03-10"),
        gender: 0,
        status: "ACTIVE",
        isVerified: true,
        avatar:
          "https://res.cloudinary.com/dwawpy4lo/image/upload/v1768049609/avatars/Vector_12_eje0u9.png",
      },
    }),
  ]);

  console.log("✅ Created users");

  // 5. Create User-Role relationships
  await prisma.userRole.create({
    data: {
      userId: users[0].id,
      roleId: adminRole.id,
    },
  });

  await Promise.all(
    users.slice(1).map((user: any) =>
      prisma.userRole.create({
        data: {
          userId: user.id,
          roleId: userRole.id,
        },
      }),
    ),
  );

  console.log("✅ Created user-role relationships");

  // 6. Create Categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Accommodation",
        icon: "🏨",
        color: "#FF6B6B",
        isDefault: true,
      },
    }),
    prisma.category.create({
      data: {
        name: "Transportation",
        icon: "🚗",
        color: "#4ECDC4",
        isDefault: true,
      },
    }),
    prisma.category.create({
      data: {
        name: "Food & Drink",
        icon: "🍔",
        color: "#FFE66D",
        isDefault: true,
      },
    }),
    prisma.category.create({
      data: {
        name: "Entertainment",
        icon: "🎭",
        color: "#A8E6CF",
        isDefault: true,
      },
    }),
    prisma.category.create({
      data: {
        name: "Shopping",
        icon: "🛍️",
        color: "#FFB6C1",
        isDefault: true,
      },
    }),
    prisma.category.create({
      data: {
        name: "Other",
        icon: "📝",
        color: "#C7CEEA",
        isDefault: true,
      },
    }),
  ]);

  console.log("✅ Created categories");

  // 7. Create Trips
  const trip1 = await prisma.trip.create({
    data: {
      name: "Đà Lạt Trip 2026",
      destination: "Đà Lạt, Việt Nam",
      startDate: new Date("2026-03-15"),
      endDate: new Date("2026-03-20"),
      totalBudget: 15000000,
      defaultCurrency: "VND",
      status: "UPCOMING",
    },
  });

  const trip2 = await prisma.trip.create({
    data: {
      name: "Phú Quốc Beach Holiday",
      destination: "Phú Quốc, Việt Nam",
      startDate: new Date("2026-04-10"),
      endDate: new Date("2026-04-15"),
      totalBudget: 20000000,
      defaultCurrency: "VND",
      status: "UPCOMING",
    },
  });

  console.log("✅ Created trips");

  // 8. Create Trip Members
  await Promise.all([
    // Trip 1 members
    prisma.tripMember.create({
      data: {
        tripId: trip1.id,
        userId: users[1].id,
        role: "OWNER",
        inviteStatus: "ACCEPTED",
        joinedAt: new Date(),
      },
    }),
    prisma.tripMember.create({
      data: {
        tripId: trip1.id,
        userId: users[2].id,
        role: "MEMBER",
        inviteStatus: "ACCEPTED",
        joinedAt: new Date(),
      },
    }),
    prisma.tripMember.create({
      data: {
        tripId: trip1.id,
        userId: users[3].id,
        role: "MEMBER",
        inviteStatus: "PENDING",
      },
    }),
    // Trip 2 members
    prisma.tripMember.create({
      data: {
        tripId: trip2.id,
        userId: users[1].id,
        role: "OWNER",
        inviteStatus: "ACCEPTED",
        joinedAt: new Date(),
      },
    }),
    prisma.tripMember.create({
      data: {
        tripId: trip2.id,
        userId: users[2].id,
        role: "MEMBER",
        inviteStatus: "ACCEPTED",
        joinedAt: new Date(),
      },
    }),
  ]);

  console.log("✅ Created trip members");

  // 9. Create Budgets
  await Promise.all([
    prisma.budget.create({
      data: {
        tripId: trip1.id,
        categoryId: categories[0].id, // Accommodation
        amount: 5000000,
        spent: 0,
        warningAt: 80,
      },
    }),
    prisma.budget.create({
      data: {
        tripId: trip1.id,
        categoryId: categories[1].id, // Transportation
        amount: 3000000,
        spent: 0,
        warningAt: 80,
      },
    }),
    prisma.budget.create({
      data: {
        tripId: trip1.id,
        categoryId: categories[2].id, // Food & Drink
        amount: 4000000,
        spent: 0,
        warningAt: 80,
      },
    }),
  ]);

  console.log("✅ Created budgets");

  // 10. Create Expenses
  const expense1 = await prisma.expense.create({
    data: {
      tripId: trip1.id,
      amount: 3000000,
      currency: "VND",
      categoryId: categories[0].id,
      description: "Khách sạn Đà Lạt - 2 đêm",
      paidById: users[1].id,
      type: "SHARED",
      date: new Date("2026-03-15"),
      isConfirmed: true,
    },
  });

  const expense2 = await prisma.expense.create({
    data: {
      tripId: trip1.id,
      amount: 500000,
      currency: "VND",
      categoryId: categories[1].id,
      description: "Vé xe khách Sài Gòn - Đà Lạt",
      paidById: users[2].id,
      type: "SHARED",
      date: new Date("2026-03-15"),
      isConfirmed: true,
    },
  });

  const expense3 = await prisma.expense.create({
    data: {
      tripId: trip1.id,
      amount: 300000,
      currency: "VND",
      categoryId: categories[2].id,
      description: "Bữa trưa tại chợ Đà Lạt",
      paidById: users[1].id,
      type: "SHARED",
      date: new Date("2026-03-16"),
      isConfirmed: false,
    },
  });

  console.log("✅ Created expenses");

  // 11. Create Expense Splits
  await Promise.all([
    // Expense 1 splits (3 triệu chia 2 người)
    prisma.expenseSplit.create({
      data: {
        expenseId: expense1.id,
        userId: users[1].id,
        amount: 1500000,
        splitType: "EQUAL",
        isPaid: true,
      },
    }),
    prisma.expenseSplit.create({
      data: {
        expenseId: expense1.id,
        userId: users[2].id,
        amount: 1500000,
        splitType: "EQUAL",
        isPaid: false,
      },
    }),
    // Expense 2 splits (500k chia 2 người)
    prisma.expenseSplit.create({
      data: {
        expenseId: expense2.id,
        userId: users[1].id,
        amount: 250000,
        splitType: "EQUAL",
        isPaid: false,
      },
    }),
    prisma.expenseSplit.create({
      data: {
        expenseId: expense2.id,
        userId: users[2].id,
        amount: 250000,
        splitType: "EQUAL",
        isPaid: true,
      },
    }),
    // Expense 3 splits (300k chia 2 người)
    prisma.expenseSplit.create({
      data: {
        expenseId: expense3.id,
        userId: users[1].id,
        amount: 150000,
        splitType: "EQUAL",
        isPaid: true,
      },
    }),
    prisma.expenseSplit.create({
      data: {
        expenseId: expense3.id,
        userId: users[2].id,
        amount: 150000,
        splitType: "EQUAL",
        isPaid: false,
      },
    }),
  ]);

  console.log("✅ Created expense splits");

  // 12. Create Itineraries
  await Promise.all([
    prisma.itinerary.create({
      data: {
        tripId: trip1.id,
        date: new Date("2026-03-15"),
        title: "Ngày 1: Khám phá trung tâm Đà Lạt",
        description: "Tham quan chợ Đà Lạt, Hồ Xuân Hương, Vườn hoa",
        activities: JSON.stringify([
          { time: "09:00", activity: "Đến Đà Lạt, check-in khách sạn" },
          { time: "10:30", activity: "Tham quan chợ Đà Lạt" },
          { time: "12:00", activity: "Ăn trưa" },
          { time: "14:00", activity: "Đi dạo quanh Hồ Xuân Hương" },
          { time: "16:00", activity: "Tham quan Vườn hoa thành phố" },
          { time: "18:00", activity: "Ăn tối và nghỉ ngơi" },
        ]),
        photos: JSON.stringify([]),
      },
    }),
    prisma.itinerary.create({
      data: {
        tripId: trip1.id,
        date: new Date("2026-03-16"),
        title: "Ngày 2: Thác Datanla và Làng Cù Lần",
        description:
          "Chơi trò mạo hiểm tại thác Datanla, tham quan làng Cù Lần",
        activities: JSON.stringify([
          { time: "08:00", activity: "Ăn sáng" },
          { time: "09:00", activity: "Đến thác Datanla, chơi roller coaster" },
          { time: "12:00", activity: "Ăn trưa tại nhà hàng địa phương" },
          { time: "14:00", activity: "Tham quan làng Cù Lần" },
          { time: "17:00", activity: "Về khách sạn nghỉ ngơi" },
          { time: "19:00", activity: "Ăn tối và khám phá chợ đêm" },
        ]),
        photos: JSON.stringify([]),
      },
    }),
  ]);

  console.log("✅ Created itineraries");

  // 13. Create Notifications
  await Promise.all([
    prisma.notification.create({
      data: {
        userId: users[2].id,
        type: "EXPENSE_CREATED",
        title: "Chi phí mới được tạo",
        message: 'Nguyễn Văn A đã thêm chi phí "Khách sạn Đà Lạt - 2 đêm"',
        data: JSON.stringify({ expenseId: expense1.id, tripId: trip1.id }),
        isRead: false,
      },
    }),
    prisma.notification.create({
      data: {
        userId: users[3].id,
        type: "TRIP_INVITE",
        title: "Lời mời tham gia chuyến đi",
        message: 'Bạn được mời tham gia chuyến đi "Đà Lạt Trip 2026"',
        data: JSON.stringify({ tripId: trip1.id }),
        isRead: false,
      },
    }),
    prisma.notification.create({
      data: {
        userId: users[1].id,
        type: "MEMBER_JOINED",
        title: "Thành viên mới",
        message: 'Trần Thị B đã tham gia chuyến đi "Đà Lạt Trip 2026"',
        data: JSON.stringify({ tripId: trip1.id, userId: users[2].id }),
        isRead: true,
        readAt: new Date(),
      },
    }),
  ]);

  console.log("✅ Created notifications");

  // 14. Create Devices
  await Promise.all([
    prisma.device.create({
      data: {
        userId: users[1].id,
        fcmToken: "fcm_token_user1_ios",
        deviceName: "iPhone 13 Pro",
        deviceType: "ios",
        isActive: true,
        lastActiveAt: new Date(),
      },
    }),
    prisma.device.create({
      data: {
        userId: users[2].id,
        fcmToken: "fcm_token_user2_android",
        deviceName: "Samsung Galaxy S21",
        deviceType: "android",
        isActive: true,
        lastActiveAt: new Date(),
      },
    }),
  ]);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
