---
sidebar_position: 5
---

# Kiểm kho

**Tổng quan tính năng:** Phân hệ **Kiểm kho** trên giao diện Web là công cụ cốt lõi giúp các nhà quản trị doanh nghiệp, chủ cửa hàng và thủ kho thực hiện nghiệp vụ đối soát định kỳ. Trong quá trình vận hành kinh doanh (bán lẻ, phân phối, xả hàng công trình), việc xảy ra sai lệch giữa số lượng hàng hóa tồn kho lý thuyết (số liệu tính toán trên phần mềm) và số lượng tồn kho thực tế (hàng hóa nằm trên kệ, trong thùng bãi) là điều khó tránh khỏi do các nguyên nhân như: đếm nhầm khi bán hàng, hao hụt tự nhiên, rơi vỡ hoặc thất thoát vật lý.

Quy trình lập phiếu kiểm kho và chạy lệnh cân bằng thông minh giúp doanh nghiệp nhanh chóng:
* Phát hiện chính xác các lỗ hổng thất thoát vật tư, hàng hóa theo từng mã SKU cụ thể.
* Tự động tính toán giá trị chênh lệch (thừa/thiếu) dựa trên biểu giá vốn gốc.
* Điều chỉnh số lượng tồn kho trên hệ thống về đúng với thực trạng thực tế chỉ bằng một cú nhấp chuột, đảm bảo dữ liệu chạy báo cáo tài chính luôn trung thực và chính xác tuyệt đối.

---

## Quy trình Khởi tạo Phiếu kiểm kho và Cân bằng dữ liệu tự động

Để tiến hành đối soát, bạn cần chuẩn bị số liệu đếm thủ công tại kho bãi trước, sau đó đăng nhập vào tài khoản quản trị trên trình duyệt web và thực hiện tuần tự theo các bước chi tiết sau:

* **Bước 1: Truy cập Phân hệ Quản lý Danh sách Kiểm kho**
  Từ thanh menu điều hướng bất biến ở phía bên trái màn hình giao diện chính (Sidebar), bạn tìm và click chuột chọn vào mục **Kho**. Trong danh sách menu con mở rộng, bạn tiếp tục nhấp chọn vào mục **Danh sách kiểm kho** để truy cập vào trung tâm giám sát lịch sử đối soát của cửa hàng.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/kiemKho/image.png" alt="Điều hướng truy cập mục Danh sách kiểm kho trên Sidebar" />
  </figure>

* **Bước 2: Khởi động Biểu mẫu Tạo phiếu kiểm kho mới**
  Tại giao diện trung tâm điều hành vừa hiển thị, bạn di chuột lên góc trên bên phải màn hình và nhấn vào nút chức năng màu xanh mang dòng lệnh `Tạo phiếu kiểm kho`. Hệ thống sẽ lập tức mở ra một phôi phiếu kiểm kho hoàn toàn mới kèm mã số phiếu được định danh tự động.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/kiemKho/image copy.png" alt="Nhấp chọn lệnh Tạo phiếu kiểm kho mới trên thanh công cụ" />
  </figure>

* **Bước 3: Lựa chọn Danh sách Sản phẩm/Vật tư cần đối soát**
  Giao diện bảng dữ liệu tổng hợp kho hàng hiện ra. Tại đây, thủ kho tiến hành tích chọn vào các ô vuông đầu dòng của từng sản phẩm, thiết bị hoặc vật tư thực tế vừa được kiểm đếm tại kho bãi. Bạn có thể sử dụng thanh tìm kiếm nâng cao theo tên hoặc theo nhóm hàng để lọc nhanh các mã hàng cần đưa vào danh sách kiểm định.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/kiemKho/image copy 2.png" alt="Tích chọn các mã sản phẩm hàng hóa đưa vào danh sách phiếu đối soát" />
  </figure>

* **Bước 4: Nhập Khối lượng thực tế và Theo dõi Biên độ Chênh lệch**
  Sau khi danh sách sản phẩm được nạp vào phiếu, bạn di chuyển chuột đến cột **Số lượng thực tế** của từng dòng mặt hàng và tiến hành nhập con số định lượng chính xác mà bạn đếm được tại kho thực tế. 
  
  *>  **Cơ chế hạch toán tự động:** Ngay khi bạn nhập số lượng thực tế, hệ thống máy chủ sẽ lập tức kích hoạt thuật toán tự động so sánh với cột Tồn hệ thống để hiển thị biên độ **Chênh lệch**. Nếu số lượng thực đếm lớn hơn tồn phần mềm, hệ thống ghi nhận giá trị dương (+ Thừa hàng); nếu số lượng thực đếm nhỏ hơn, hệ thống ghi nhận giá trị âm (- Thiếu hụt/Thất thoát), kèm theo giá trị dòng tiền hao hụt quy đổi dựa trên giá vốn.*
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/kiemKho/image copy 3.png" alt="Cập nhật số lượng thực đếm và kiểm tra biên độ chênh lệch thừa thiếu" />
  </figure>

* **Bước 5: Kích hoạt Lệnh Cân bằng kho và Khóa sổ dữ liệu**
  Sau khi đã rà soát lại toàn bộ số liệu nhập vào không còn sai sót, bạn nhấn chọn vào nút **Cân bằng kho** ở góc dưới của biểu mẫu. 
  
  *> **Kết quả vận hành hệ thống:** Ngay khi lệnh được phát đi, phần mềm sẽ chính xác thực hiện hai tác vụ: Khóa sổ và lưu trữ vĩnh viễn phiếu kiểm kho này vào nhật ký hệ thống để phục vụ công tác hậu kiểm, đồng thời **tự động ghi đè, điều chỉnh số lượng tồn kho lý thuyết** trên toàn hệ thống về đúng bằng con số thực tế bạn vừa khai báo ở Bước 4. Kho hàng lập tức được làm sạch và sẵn sàng cho các phiên giao dịch mua bán tiếp theo.*
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/kiemKho/image copy 4.png" alt="Bấm nút Cân bằng kho để hoàn tất quy trình khóa sổ điều chỉnh số liệu" />
  </figure>

---

## Các nguyên tắc lưu ý cốt lõi khi thực hiện Nghiệp vụ Kiểm kho

Để đảm bảo quy trình kiểm kho diễn ra an toàn, hạn chế tối đa xung đột dữ liệu và phản ánh chính xác tình trạng tài sản của doanh nghiệp, ban quản trị và thủ kho cần tuân thủ nghiêm ngặt 3 nguyên tắc vàng sau:

1. **Đóng băng hoạt động xuất - nhập kho trong thời gian kiểm đếm:** Đây là nguyên tắc tối quan trọng. Trước khi tiến hành đếm hàng thực tế tại kho bãi, bạn phải thông báo dừng toàn bộ các tác vụ lập phiếu nhập hàng, xuất bán lẻ hoặc chuyển kho nội bộ. Nếu vừa đếm hàng vừa lên đơn bán trên app, số liệu tồn kho hệ thống sẽ liên tục biến động, dẫn đến việc tính toán chênh lệch tại Bước 4 bị sai lệch hoàn toàn.
2. **Rà soát kỹ nguyên nhân chênh lệch trước khi bấm nút Cân bằng kho:** Nút lệnh *Cân bằng kho* có hiệu lực thay đổi trực tiếp và vĩnh viễn số lượng tồn kho của doanh nghiệp trên phần mềm. Do đó, khi thấy biên độ chênh lệch âm hoặc dương quá lớn, thủ kho không được vội vã bấm cân bằng ngay, mà cần đối soát lại nhật ký bán hàng, hóa đơn nhập gần nhất hoặc tiến hành đếm lại lần hai để loại trừ khả năng nhân viên nhập liệu sai số hoặc đếm sót hàng trong góc khuất.
3. **Duy trì tần suất kiểm kho định kỳ theo đặc thù ngành hàng:** Tùy thuộc vào giá trị và tốc độ luân chuyển của hàng hóa để thiết lập lịch trình phù hợp. Đối với các mặt hàng có giá trị cao, kích thước nhỏ (như linh kiện điện tử, điện thoại) hoặc hàng xé lẻ (như viên thuốc), nên duy trì kiểm kho cuốn chiếu hàng tuần. Đối với các mặt hàng cồng kềnh, có thể kiểm kho tổng thể theo tháng hoặc theo quý để kịp thời xử lý hao hụt, đảm bảo dòng vốn lưu động không bị tắc nghẽn do dữ liệu ảo.