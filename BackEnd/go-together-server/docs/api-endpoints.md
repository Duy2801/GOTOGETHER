# API Endpoints - Travel Expense Management

Tài liệu chi tiết các REST API endpoints của hệ thống

---

## 1. Authentication (`/api/auth`)

### POST `/api/auth/register`

- **Mô tả**: Đăng ký tài khoản mới
- **Body**: `{ email, password, name, phone }`
- **Response**: `{ user, accessToken, refreshToken }`

### POST `/api/auth/login`

- **Mô tả**: Đăng nhập
- **Body**: `{ email, password }`
- **Response**: `{ user, accessToken, refreshToken }`

### POST `/api/auth/refresh`

- **Mô tả**: Làm mới access token
- **Body**: `{ refreshToken }`
- **Response**: `{ accessToken }`

### POST `/api/auth/logout`

- **Mô tả**: Đăng xuất
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Logged out successfully" }`

### POST `/api/auth/forgot-password`

- **Mô tả**: Yêu cầu reset password
- **Body**: `{ email }`
- **Response**: `{ message: "Reset link sent" }`

### POST `/api/auth/reset-password`

- **Mô tả**: Reset password với token
- **Body**: `{ token, newPassword }`
- **Response**: `{ message: "Password reset successfully" }`

---

## 2. User (`/api/users`)

### GET `/api/users/me`

- **Mô tả**: Lấy thông tin user hiện tại
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ id, email, name, avatar, ... }`

### PUT `/api/users/me`

- **Mô tả**: Cập nhật thông tin cá nhân
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ name, phone, avatar, ... }`
- **Response**: `{ user }`

### GET `/api/users/me/trips`

- **Mô tả**: Lấy danh sách chuyến đi của user
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?status=ONGOING&page=1&limit=10`
- **Response**: `{ trips[], total, page, limit }`

### GET `/api/users/me/statistics`

- **Mô tả**: Thống kê tổng quan chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ totalTrips, totalExpense, ... }`

### GET `/api/users/search`

- **Mô tả**: Tìm kiếm user (để mời vào chuyến đi)
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?q=email@example.com`
- **Response**: `{ users[] }`

---

## 3. Trip (`/api/trips`)

### POST `/api/trips`

- **Mô tả**: Tạo chuyến đi mới
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ name, destination, startDate, endDate, budget, currency }`
- **Response**: `{ trip }`

### GET `/api/trips`

- **Mô tả**: Lấy danh sách chuyến đi
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?status=ONGOING&page=1&limit=10`
- **Response**: `{ trips[], total, page, limit }`

### GET `/api/trips/:id`

- **Mô tả**: Chi tiết chuyến đi
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ trip, members[], statistics }`

### PUT `/api/trips/:id`

- **Mô tả**: Cập nhật chuyến đi (chỉ owner)
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ name, destination, ... }`
- **Response**: `{ trip }`

### DELETE `/api/trips/:id`

- **Mô tả**: Xoá chuyến đi (chỉ owner)
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Deleted" }`

### POST `/api/trips/:id/complete`

- **Mô tả**: Đánh dấu hoàn thành chuyến đi
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ trip }`

---

## 4. Trip Members (`/api/trips/:tripId/members`)

### POST `/api/trips/:tripId/members/invite`

- **Mô tả**: Mời thành viên (qua email)
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ email, role: "MEMBER" }`
- **Response**: `{ invitation }`

### GET `/api/trips/:tripId/members/qr`

- **Mô tả**: Generate QR code mời
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ qrCode, inviteCode }`

### POST `/api/trips/join/:inviteCode`

- **Mô tả**: Tham gia chuyến đi qua QR/invite code
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ trip, member }`

### GET `/api/trips/:tripId/members`

- **Mô tả**: Danh sách thành viên
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ members[] }`

### DELETE `/api/trips/:tripId/members/:userId`

- **Mô tả**: Xoá thành viên (chỉ owner)
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Removed" }`

### POST `/api/trips/:tripId/leave`

- **Mô tả**: Rời khỏi chuyến đi
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Left trip" }`

---

## 5. Expenses (`/api/trips/:tripId/expenses`)

### POST `/api/trips/:tripId/expenses`

- **Mô tả**: Thêm chi tiêu mới
- **Headers**: `Authorization: Bearer {token}`
- **Body**:

```json
{
  "amount": 100000,
  "currency": "VND",
  "categoryId": 1,
  "description": "Ăn tối",
  "paidBy": "userId",
  "splitType": "EQUAL",
  "participants": ["userId1", "userId2"],
  "date": "2026-02-05",
  "receipt": "imageUrl"
}
```

- **Response**: `{ expense }`

### GET `/api/trips/:tripId/expenses`

- **Mô tả**: Danh sách chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?categoryId=1&fromDate=2026-02-01&page=1&limit=20`
- **Response**: `{ expenses[], total }`

### GET `/api/trips/:tripId/expenses/:id`

- **Mô tả**: Chi tiết chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ expense, splits[] }`

### PUT `/api/trips/:tripId/expenses/:id`

- **Mô tả**: Cập nhật chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ amount, description, ... }`
- **Response**: `{ expense }`

### DELETE `/api/trips/:tripId/expenses/:id`

- **Mô tả**: Xoá chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Deleted" }`

---

## 6. Expense Splits (`/api/trips/:tripId/expenses/:expenseId/splits`)

### GET `/api/trips/:tripId/expenses/:expenseId/splits`

- **Mô tả**: Chi tiết phân chia chi phí
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ splits[], summary }`

### PUT `/api/trips/:tripId/expenses/:expenseId/splits`

- **Mô tả**: Cập nhật cách chia (tỷ lệ custom)
- **Headers**: `Authorization: Bearer {token}`
- **Body**:

```json
{
  "splits": [
    { "userId": "id1", "amount": 60000 },
    { "userId": "id2", "amount": 40000 }
  ]
}
```

- **Response**: `{ splits[] }`

---

## 7. Settlements (Thanh toán công nợ) (`/api/trips/:tripId/settlements`)

### GET `/api/trips/:tripId/settlements`

- **Mô tả**: Danh sách ai nợ ai
- **Headers**: `Authorization: Bearer {token}`
- **Response**:

```json
{
  "settlements": [
    { "from": "user1", "to": "user2", "amount": 50000, "currency": "VND" }
  ]
}
```

### POST `/api/trips/:tripId/settlements/:id/settle`

- **Mô tả**: Đánh dấu đã thanh toán
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ settlement }`

---

## 8. Categories (`/api/categories`)

### GET `/api/categories`

- **Mô tả**: Danh sách danh mục chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ categories[] }`

### POST `/api/categories`

- **Mô tả**: Tạo danh mục tuỳ chỉnh
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ name, icon, color }`
- **Response**: `{ category }`

### PUT `/api/categories/:id`

- **Mô tả**: Cập nhật danh mục
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ name, icon, color }`
- **Response**: `{ category }`

### DELETE `/api/categories/:id`

- **Mô tả**: Xoá danh mục
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Deleted" }`

---

## 9. Budget (`/api/trips/:tripId/budget`)

### GET `/api/trips/:tripId/budget`

- **Mô tả**: Thông tin ngân sách
- **Headers**: `Authorization: Bearer {token}`
- **Response**:

```json
{
  "totalBudget": 10000000,
  "spent": 6500000,
  "remaining": 3500000,
  "percentage": 65,
  "categoryBudgets": [...]
}
```

### PUT `/api/trips/:tripId/budget`

- **Mô tả**: Cập nhật ngân sách
- **Headers**: `Authorization: Bearer {token}`
- **Body**:

```json
{
  "totalBudget": 10000000,
  "categoryBudgets": [{ "categoryId": 1, "amount": 3000000 }]
}
```

- **Response**: `{ budget }`

---

## 10. Statistics (`/api/trips/:tripId/statistics`)

### GET `/api/trips/:tripId/statistics`

- **Mô tả**: Thống kê tổng quan
- **Headers**: `Authorization: Bearer {token}`
- **Response**:

```json
{
  "totalExpense": 6500000,
  "byCategory": [...],
  "byMember": [...],
  "byDate": [...],
  "charts": {
    "pieChart": [...],
    "barChart": [...],
    "lineChart": [...]
  }
}
```

### GET `/api/trips/:tripId/statistics/member/:userId`

- **Mô tả**: Thống kê chi tiêu cá nhân
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ totalPaid, totalOwed, balance, expenses[] }`

---

## 11. Itinerary (`/api/trips/:tripId/itinerary`)

### POST `/api/trips/:tripId/itinerary`

- **Mô tả**: Thêm lịch trình
- **Headers**: `Authorization: Bearer {token}`
- **Body**:

```json
{
  "date": "2026-02-05",
  "title": "Tham quan Đà Lạt",
  "description": "...",
  "activities": [...],
  "photos": [...]
}
```

- **Response**: `{ itinerary }`

### GET `/api/trips/:tripId/itinerary`

- **Mô tả**: Danh sách lịch trình
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ itineraries[] }`

### PUT `/api/trips/:tripId/itinerary/:id`

- **Mô tả**: Cập nhật lịch trình
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ title, description, ... }`
- **Response**: `{ itinerary }`

### DELETE `/api/trips/:tripId/itinerary/:id`

- **Mô tả**: Xoá lịch trình
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Deleted" }`

---

## 12. Export (`/api/trips/:tripId/export`)

### GET `/api/trips/:tripId/export/pdf`

- **Mô tả**: Xuất báo cáo PDF
- **Headers**: `Authorization: Bearer {token}`
- **Response**: PDF file download

### GET `/api/trips/:tripId/export/excel`

- **Mô tả**: Xuất dữ liệu Excel
- **Headers**: `Authorization: Bearer {token}`
- **Response**: Excel file download

### POST `/api/trips/:tripId/share`

- **Mô tả**: Tạo link chia sẻ công khai
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ shareLink: "https://..." }`

### POST `/api/trips/:tripId/export/email`

- **Mô tả**: Gửi báo cáo qua email
- **Headers**: `Authorization: Bearer {token}`
- **Body**: `{ email: "user@example.com" }`
- **Response**: `{ message: "Sent" }`

---

## 13. Notifications (`/api/notifications`)

### GET `/api/notifications`

- **Mô tả**: Danh sách thông báo
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?page=1&limit=20&read=false`
- **Response**: `{ notifications[], total, unreadCount }`

### PUT `/api/notifications/:id/read`

- **Mô tả**: Đánh dấu đã đọc
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ notification }`

### PUT `/api/notifications/read-all`

- **Mô tả**: Đánh dấu tất cả đã đọc
- **Headers**: `Authorization: Bearer {token}`
- **Response**: `{ message: "Marked all as read" }`

### PUT `/api/notifications/settings`

- **Mô tả**: Cài đặt thông báo
- **Headers**: `Authorization: Bearer {token}`
- **Body**:

```json
{
  "expenseReminder": true,
  "budgetWarning": true,
  "settlementReminder": true,
  "emailNotification": true
}
```

- **Response**: `{ settings }`

---

## 14. AI Analytics (`/api/ai/analytics`)

### GET `/api/ai/analytics/insights/:tripId`

- **Mô tả**: Phân tích thông minh chi tiêu
- **Headers**: `Authorization: Bearer {token}`
- **Response**:

```json
{
  "insights": [
    "Chi tiêu ăn uống chiếm 40% tổng chi phí",
    "Có thể tiết kiệm 15% nếu giảm chi tiêu mua sắm"
  ],
  "predictions": {
    "estimatedTotal": 8000000,
    "recommendations": [...]
  }
}
```

### GET `/api/ai/analytics/compare`

- **Mô tả**: So sánh với chuyến đi trước
- **Headers**: `Authorization: Bearer {token}`
- **Query**: `?tripId1=1&tripId2=2`
- **Response**: `{ comparison: {...} }`

---

## 15. Upload (`/api/upload`)

### POST `/api/upload/receipt`

- **Mô tả**: Upload ảnh hoá đơn
- **Headers**: `Authorization: Bearer {token}`, `Content-Type: multipart/form-data`
- **Body**: `FormData { file }`
- **Response**: `{ url, fileName }`

### POST `/api/upload/photo`

- **Mô tả**: Upload ảnh kỷ niệm
- **Headers**: `Authorization: Bearer {token}`, `Content-Type: multipart/form-data`
- **Body**: `FormData { file }`
- **Response**: `{ url, fileName }`

---

## WebSocket Events

### Connection

- **URL**: `ws://localhost:3000/trip`
- **Auth**: Send JWT token khi connect

### Events Subscribe

#### `trip:invite`

- **Mô tả**: Nhận lời mời tham gia chuyến đi
- **Payload**: `{ tripId, invitedBy, tripName }`

#### `trip:member-joined`

- **Mô tả**: Thành viên mới tham gia
- **Payload**: `{ tripId, member }`

#### `expense:created`

- **Mô tả**: Chi tiêu mới được tạo
- **Payload**: `{ tripId, expense }`

#### `expense:updated`

- **Mô tả**: Chi tiêu được cập nhật
- **Payload**: `{ tripId, expense }`

#### `budget:warning`

- **Mô tả**: Cảnh báo vượt ngân sách
- **Payload**: `{ tripId, percentage, remaining }`

---

## Error Responses

Tất cả API đều trả về cấu trúc error chuẩn:

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request",
  "details": [...]
}
```

### Common HTTP Status Codes:

- `200 OK`: Thành công
- `201 Created`: Tạo thành công
- `400 Bad Request`: Dữ liệu không hợp lệ
- `401 Unauthorized`: Chưa đăng nhập
- `403 Forbidden`: Không có quyền
- `404 Not Found`: Không tìm thấy
- `500 Internal Server Error`: Lỗi server

---

_Ghi chú: Tài liệu này mô tả các API endpoint cho Travel Expense Management App_
