# Nâng cấp hệ thống Thông Báo & Pop-up

## Mục tiêu
- Phân tầng rõ ba loại hiển thị: thông báo nhanh, biến cố quan trọng và đột phá cảnh giới.
- Giữ nguyên luật chơi hiện tại; các chỉ số thưởng trong màn đột phá chỉ mang tính trình bày.
- Đồng bộ hiệu ứng, âm thanh và trạng thái đóng/mở với luồng game hiện có.

## Thực hiện
1. Tách thông báo nhanh thành component riêng, hiển thị ở góc trên, có viền sáng nhẹ, trượt xuống khi xuất hiện và tự ẩn sau khoảng 4,5 giây.
2. Nâng cấp modal Kỳ Ngộ thành phong cách tu tiên u tối, huyền bí; giữ nguyên hai lựa chọn và không tự đóng khi người chơi chưa quyết định.
3. Sau khi giải quyết Kỳ Ngộ, hiển thị modal kết quả biến cố có thể đóng ngay hoặc tự đóng sau khoảng 5 giây.
4. Tạo modal Đột Phá riêng, kích hoạt cho mọi lần đột phá thành công, gồm:
   - Hào quang vàng kim, tiêu đề, câu thơ theo cảnh giới.
   - Đạo hiệu, linh căn và cảnh giới mới.
   - Hai ô thưởng trình bày cho tốc độ hấp thụ và thọ nguyên, không thay đổi chỉ số game.
   - Phù văn Long Phượng SVG hai bên cùng hai câu đối Hán Cổ đã cung cấp.
   - Nút “THU NHẬN ĐẠO QUẢ” có hiệu ứng lấp lánh và đóng modal.
5. Điều chỉnh tín hiệu trong vòng chơi để thông báo thường không tranh chấp với modal đột phá hoặc modal kết quả; giữ âm thanh tương ứng.
6. Bổ sung animation và token màu cần thiết, tôn trọng chế độ giảm chuyển động và bảo đảm không che hoặc tràn nội dung trên điện thoại.
7. Kiểm tra trực tiếp các luồng thông báo, Kỳ Ngộ và đột phá trên màn hình máy tính lẫn điện thoại.

## Chi tiết kỹ thuật
- Các phần mới được tách thành React component nhỏ, dùng Tailwind CSS, Lucide icons và SVG nội tuyến cho phù văn.
- Dữ liệu modal đột phá được chụp tại đúng thời điểm thành công để luôn hiển thị cảnh giới mới.
- Kỳ Ngộ không tự đóng; chỉ modal kết quả sau lựa chọn mới có bộ đếm tự đóng 5 giây.
- Không bổ sung cơ chế thọ nguyên hoặc thay đổi công thức tốc độ tu luyện.
