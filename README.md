# AlgoCore — Unit 6 Learning

Website HTML/CSS/JavaScript phục vụ giảng dạy và tự học Cambridge IGCSE Computer Science 0478, phạm vi thi 2026–2028.

## Sử dụng

Mở `dist/index.html` trong trình duyệt hoặc dùng bản website đã triển khai. Bản offline cần giữ toàn bộ thư mục `dist` cùng các ảnh. Các trang bài học dùng địa chỉ dạng `#49/mechanism`, vì vậy không cần máy chủ để chuyển bài.

- 4 buổi chính: 49 Automated systems, 50 Robotics, 51 AI & expert systems, 52 Machine learning.
- 40 mục học tập/sổ tay/ôn tập; 111 câu hỏi biên soạn riêng.
- 16 visual chính và 10 phiên bản bỏ nhãn; 4 mô phỏng/hoạt động.
- Mỗi buổi có 6 câu đầu buổi, câu kiểm tra ngắn sau lý thuyết, 6 bài luyện độc lập, 3 câu cuối buổi và 2 lượt ôn giữa tuần.
- Có bộ ôn tích lũy 53, 54, 56 và bài vận dụng theo phong cách câu hỏi thi, kèm tiêu chí luyện tập nội bộ.
- Lý thuyết và hướng dẫn tiếng Việt; thuật ngữ, câu hỏi và mẫu trả lời tiếng Anh. Học viên có thể ghi ý bằng tiếng Việt trước khi viết câu trả lời.

## Giảng trực tiếp

Chọn buổi và phần bài trong mục lục. Nút Trình chiếu tăng cỡ chữ, ẩn mục lục và cho mở dần các khối nội dung. Dùng nút Phần trước/tiếp hoặc phím mũi tên khi không nhập câu trả lời; Space hiện ý tiếp. Phím không bị chiếm khi đang nhập văn bản hoặc chọn điều khiển.

Nhấp visual để phóng to; bật bản bỏ nhãn để kiểm tra nhớ lại. Khi trình chiếu, giáo viên có thể mở mẫu trả lời tự luận mà không cần nhập đáp án mẫu trước. Đây là chức năng phục vụ giảng dạy, không phải cơ chế phân quyền hay bảo mật đáp án.

Tự luận có mẫu và checklist ý cần có, không chấm tự động bằng từ khóa. Trắc nghiệm, ghép cặp và sắp xếp có phản hồi, lưu điểm lần đầu và gần nhất. Sắp xếp tính điểm luyện tập theo số bước đúng vị trí. Các tiêu chí không phải mark scheme Cambridge chính thức.

Nút In bài in mục đang mở, giữ ẩn lời giải chưa mở. Câu trả lời và lịch sử thử lưu cục bộ nếu trình duyệt cho phép, không đồng bộ thiết bị hay gửi điểm cho giáo viên. Không có cơ chế chấm điểm toàn lớp hoặc tự gửi lịch nhắc.

## Mô phỏng

1. **Nhà kính:** điều chỉnh nhiệt độ/ẩm đất/ánh sáng; chạy từng bước hoặc một chu trình; có biên ngưỡng, mất dữ liệu, reset. Mô hình tính lệnh điều khiển, không giả lập động lực học của môi trường. Cách giữ OFF khi mất số đo được chọn cho bài minh họa, không phải quy tắc an toàn chung.
2. **Robot:** chọn nhóm bộ phận xem chức năng, ghép sensor/controller/actuator theo bối cảnh kho, gia đình hoặc nông nghiệp.
3. **Expert system:** ba phương tiện, hai thuộc tính; thể hiện dữ kiện, knowledge base, rule base, đường suy luận và kết quả. Có trạng thái thiếu dữ kiện và không khớp luật.
4. **ML:** sáu mẫu huấn luyện và bốn mẫu kiểm tra riêng. Cách chọn mẫu gần nhất là minh họa đơn giản; nhãn được sửa phải huấn luyện lại mới dùng để dự đoán. Sửa mẫu #4 từ A sang B với X=(6,5) đổi dự đoán A→B; bộ kiểm tra cố định thay đổi 3/4→4/4. Không suy rộng kết quả này ra các hệ ML thực tế.

## Biên tập tiếp

- `dist/content.js`: lý thuyết, mục tiêu, câu hỏi, đáp án, mốc ôn và tham chiếu.
- `dist/app.js`: điều hướng, trình chiếu, bài tập và lưu trình duyệt.
- `dist/labs.js`: 4 hoạt động.
- `dist/styles.css`: giao diện máy tính, điện thoại và in.
- `dist/visuals.js`, `dist/assets/`: thông tin và bộ hình.
- `dist/webmcp.js`: tích hợp tùy chọn khi trình duyệt hỗ trợ; website bình thường không phụ thuộc vào tính năng này.

Đối chiếu nguồn và bản đồ mục tiêu trong Sổ tay → Nguồn & cách sử dụng / Mục tiêu cần đạt. Syllabus: https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf. Coursebook Unit 6 trang in 217–256; Workbook 1 Unit 6 trang in 84–95.

## Kiểm tra thực hiện

Đã kiểm tra 40 địa chỉ bài, ảnh, câu hỏi có phản hồi, lưu và tải lại, bốn mô phỏng, biên ngưỡng, thiếu dữ kiện, thay nhãn, trình chiếu, bàn phím và bố cục di động. Bộ kiểm tra tự động đặt ngoài thư mục xuất bản. API WebMCP là tùy chọn; kiểm thử bằng bộ giả lập API không thay thế xác nhận trong trình duyệt hỗ trợ thật.
