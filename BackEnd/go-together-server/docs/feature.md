# Danh sách chức năng Travel Expense Management App

**Ứng dụng quản lý chi tiêu du lịch cho cặp đôi hoặc cá nhân**

---

## 1. Quản lý người dùng (CRUD User)

- Đăng ký, đăng nhập, cập nhật, xoá tài khoản
- Quản lý thông tin cá nhân (tên, email, ảnh đại diện, số điện thoại)
- Lịch sử các chuyến đi đã tham gia
- Thống kê tổng quan chi tiêu của user

---

## 2. Xác thực & Bảo mật (Auth)

- Đăng nhập bằng email/password
- JWT access token & refresh token
- Bảo vệ route theo quyền người dùng (Owner/Member)
- Đăng xuất trên nhiều thiết bị
- Reset password qua email

---

## 3. Quản lý chuyến đi (CRUD Trip)

- Tạo chuyến đi mới (tên, địa điểm, thời gian bắt đầu/kết thúc)
- Cập nhật thông tin chuyến đi
- Thiết lập ngân sách tổng cho chuyến đi
- Chọn đơn vị tiền tệ mặc định
- Kết thúc / lưu trữ chuyến đi
- Xem danh sách các chuyến đi (đang diễn ra, sắp tới, đã kết thúc)
- Tìm kiếm và lọc chuyến đi

---

## 4. Quản lý thành viên chuyến đi

- Mời thành viên tham gia chuyến đi (quét QR code)
- Gửi lời mời qua email/link chia sẻ
- Chấp nhận / từ chối lời mời
- Phân quyền:
  - **Trip Owner**: Toàn quyền quản lý
  - **Member**: Xem và thêm chi tiêu
- Xem danh sách thành viên trong chuyến đi
- Xoá thành viên khỏi chuyến đi (chỉ owner)
- Rời khỏi chuyến đi

---

## 5. Quản lý chi tiêu chuyến đi (Trip Expense)

- Thêm, sửa, xoá khoản chi tiêu
- Gán chi tiêu cho:
  - Người chi (ai đã trả tiền)
  - Loại chi tiêu (ăn uống, đi lại, khách sạn, vé tham quan, mua sắm...)
  - Ngày tháng, thời gian chi tiêu
- Upload hình ảnh hoá đơn
- Ghi chú chi tiết cho từng khoản chi
- Đánh dấu chi tiêu đã xác nhận

---

## 6. Quản lý chi tiêu cá nhân trong chuyến đi

- Theo dõi chi tiêu riêng của từng thành viên
- Phân biệt:
  - **Chi tiêu chung**: Chia sẻ cho nhiều người
  - **Chi tiêu cá nhân**: Chỉ tính cho một người
- Tổng hợp chi tiêu theo từng người
- Xem lịch sử chi tiêu cá nhân trong chuyến đi

---

## 7. Phân chia chi phí (Split Expense) 📌

- Chia đều chi phí cho các thành viên
- Chia theo tỷ lệ tuỳ chỉnh (%, số tiền cụ thể)
- Chọn thành viên cụ thể tham gia chi tiêu
- Tự động tính toán:
  - Ai đã trả nhiều hơn
  - Ai cần hoàn lại cho ai bao nhiêu
- Tạo danh sách thanh toán (Settlement)
- Đánh dấu đã thanh toán

---

## 8. Quản lý danh mục chi tiêu (Category)

- CRUD danh mục chi tiêu
- Danh mục mặc định:
  - 🍔 Ăn uống
  - 🚗 Di chuyển
  - 🏨 Khách sạn
  - 🎫 Vé tham quan
  - 🛍️ Mua sắm
  - 🎉 Giải trí
  - 💊 Y tế
  - 📱 Liên lạc
  - 🎯 Khác
- Tuỳ chỉnh danh mục riêng cho từng chuyến đi
- Gán màu sắc và icon cho danh mục

---

## 9. Thống kê & báo cáo chi tiêu 📊

- Tổng chi phí toàn chuyến đi
- Thống kê chi tiết:
  - Theo ngày
  - Theo danh mục
  - Theo thành viên
- Biểu đồ trực quan:
  - **Pie Chart**: Tỷ lệ chi tiêu theo danh mục
  - **Bar Chart**: So sánh chi tiêu giữa các thành viên
  - **Line Chart**: Xu hướng chi tiêu theo thời gian
- Xem báo cáo tổng quan chi tiêu cá nhân

---

## 10. Quản lý ngân sách chuyến đi (Budget)

- Thiết lập ngân sách tổng cho chuyến đi
- Thiết lập ngân sách cho từng danh mục
- Cảnh báo khi sắp vượt ngân sách (80%, 90%, 100%)
- Hiển thị % ngân sách đã sử dụng
- Thông báo realtime khi vượt ngân sách
- So sánh ngân sách dự kiến vs thực tế

---

## 11. Nhắc nhở ghi nhận chi tiêu (Notification)

- Nhắc nhở định kỳ nếu chưa nhập chi tiêu
- Nhắc cuối ngày trong thời gian chuyến đi
- Tuỳ chỉnh bật/tắt nhắc nhở
- Gửi thông báo qua:
  - Push notification (FCM)
  - Email
- Nhắc nhở thanh toán công nợ

---

## 12. Lịch trình & ghi chú chuyến đi (Itinerary - Bonus)

- Tạo lịch trình chi tiết cho từng ngày
- Ghi chú kế hoạch từng ngày
- Đính kèm chi tiêu vào lịch trình cụ thể
- Ghi lại kỷ niệm, trải nghiệm chuyến đi
- Upload ảnh kỷ niệm theo ngày
- Tạo timeline chuyến đi

---

## 13. Xuất báo cáo & chia sẻ (Export & Share)

- Xuất báo cáo chi tiêu:
  - **PDF**: Báo cáo đầy đủ với biểu đồ
  - **Excel**: Dữ liệu chi tiết để phân tích
- Chia sẻ link tổng kết chuyến đi cho các thành viên
- Tạo link công khai (view-only) để chia sẻ
- Gửi báo cáo qua email
- In báo cáo

---

## 14. Phân tích & gợi ý thông minh (AI Analytics - Advanced) 🤖

- Phân tích thói quen chi tiêu trong các chuyến đi
- Gợi ý:
  - Danh mục chi tiêu lớn nhất
  - Khoản có thể tiết kiệm
  - So sánh với chuyến đi trước
- Dự đoán chi phí cho chuyến đi tiếp theo
- Gửi thông báo tổng kết sau chuyến đi
- Phân tích xu hướng chi tiêu theo thời gian
- Gợi ý ngân sách hợp lý dựa trên lịch sử

---

## Chức năng bổ sung (Optional)

- **Socket realtime**: Cập nhật chi tiêu, thông báo realtime
- **Dark mode**: Giao diện tối
- **Offline mode**: Lưu chi tiêu khi không có mạng, đồng bộ khi có mạng
- **Multi-language**: Hỗ trợ đa ngôn ngữ (Vi, En)
- **Social sharing**: Chia sẻ khoảnh khắc lên mạng xã hội
