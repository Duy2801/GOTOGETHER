-- Kiểm tra trips và members
SELECT 
  t.id, 
  t.name, 
  t.status,
  tm.userId,
  tm.role,
  tm.inviteStatus
FROM trips t
LEFT JOIN trip_members tm ON t.id = tm.tripId
ORDER BY t.createdAt DESC;

-- Đếm số trip mỗi user
SELECT 
  userId,
  COUNT(*) as tripCount
FROM trip_members
GROUP BY userId;
