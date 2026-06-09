---
sidebar_position: 3
---

# Tạo đơn bán hàng

**Tổng quan tính năng:** Phân hệ này hướng dẫn chi tiết quy trình vận hành kinh doanh hàng ngày tại Nhà hàng/Quán ăn. Tài liệu bao gồm hai phương thức lên đơn cốt lõi: **Tạo đơn theo sơ đồ bàn/phòng** (áp dụng cho mô hình phục vụ tại chỗ, khách ăn xong mới thanh toán) và **Tạo đơn bán hàng trực tiếp** (áp dụng cho mô hình bán mang đi - Take away, hoặc khách thanh toán ngay tại quầy). Qua đó, người vận hành có thể tối ưu tốc độ gọi món, quản lý chặt chẽ trạng thái của từng bàn và tăng tốc độ xử lý hóa đơn.

---

## 1. Tạo đơn theo sơ đồ Bàn / Khu vực
Phương thức này giúp bạn quản lý trực quan trạng thái của từng bàn (Bàn trống, bàn đang có khách, bàn chưa thanh toán) để phục vụ chính xác, tránh nhầm lẫn món giữa các bàn.

### 1.1. Hướng dẫn thiết lập Sơ đồ bàn và Khu vực
Trước khi bắt đầu bán hàng, bạn cần khởi tạo sơ đồ không gian của quán (ví dụ: Tầng 1, Tầng 2, Sân vườn, phòng VIP) để dễ dàng theo dõi.

* **Bước 1: Truy cập phân hệ Quản lý Bàn**
  Tại giao diện làm việc chính của hệ thống, quan sát thanh điều hướng (menu) nằm ở cạnh trái màn hình. Tìm và nhấn chọn vào mục **Bàn**. Hệ thống sẽ chuyển hướng bạn đến giao diện quản lý toàn bộ sơ đồ bàn và phòng hiện có.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/home.png" alt="Màn hình chính - Chọn mục Bàn"/>
  </figure>

* **Bước 2: Khởi tạo Khu vực mới**
  Tại giao diện quản lý bàn vừa mở ra, để gom nhóm các bàn theo từng không gian riêng biệt, bạn nhấn vào nút **Thêm khu vực** (thường nằm ở góc phía trên màn hình).
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image1.png" alt="Nhấn chọn Thêm khu vực"/>
  </figure>

* **Bước 3: Cấu hình thông tin Khu vực**
  Một biểu mẫu (form) hoặc cửa sổ pop-up sẽ hiển thị. Bạn tiến hành nhập đầy đủ các thông tin bắt buộc bao gồm: *Tên khu vực* (Ví dụ: Tầng trệt, Ban công, Phòng máy lạnh...) và các ghi chú đi kèm nếu có. Sau khi kiểm tra thông tin chính xác, nhấn nút **Lưu** để hệ thống ghi nhận khu vực mới vào cơ sở dữ liệu.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image2.png" alt="Nhập thông tin khu vực và Lưu"/>
  </figure>

* **Bước 4: Tiến hành thêm Bàn vào khu vực**
  Sau khi đã có khu vực trực thuộc, bạn cần định danh từng vị trí ngồi bằng cách nhấn nút **+ Thêm bàn**. Nút này giúp bạn bắt đầu quy trình thêm mới một hoặc nhiều bàn vào không gian quán.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image3.png" alt="Nhấn chọn Thêm bàn mới"/>
  </figure>

* **Bước 5: Hoàn tất cấu hình chi tiết cho Bàn**
  Tại cửa sổ nhập liệu hiện ra, bạn cần cấu hình các thông tin sau:
  * *Chọn Khu vực:* Nhấp vào danh sách thả xuống để chọn khu vực chứa bàn này (được khởi tạo ở Bước 3).
  * *Tên bàn/Số bàn:* Nhập ký tự định danh (Ví dụ: Bàn 01, Bàn 02, VIP 1...).
  Sau khi hoàn tất, nhấn nút **Lưu**. Lúc này, trên sơ đồ hiển thị sẽ xuất hiện biểu tượng bàn mới với trạng thái mặc định là "Bàn trống".
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image4.png" alt="Hoàn tất thông tin chi tiết và Lưu bàn"/>
  </figure>

---

### 1.2. Quy trình Gọi món và Thanh toán theo Bàn
Khi có khách vào quán và ngồi vào vị trí, thu ngân hoặc nhân viên phục vụ sẽ thực hiện các bước sau để ghi nhận đơn hàng.

* **Bước 1: Lựa chọn bàn và Khởi tạo đơn gọi món (Order)**
  Tại màn hình hiển thị trực quan sơ đồ quản lý bàn, bạn tìm đến vị trí bàn mà khách đang ngồi. Nhấp chuột (hoặc chạm trên màn hình cảm ứng) trực tiếp vào biểu tượng của bàn đó. Một bảng tùy chọn nhanh sẽ hiển thị, bạn nhấn vào nút **Tạo đơn**. Ngay lập tức, hệ thống sẽ mở ra giao diện chọn món dành riêng cho bàn này.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image6.png" alt="Chọn bàn và nhấn Tạo đơn"/>
  </figure>

* **Bước 2: Chọn danh sách món ăn, Topping và Số lượng**
  Giao diện thực đơn xuất hiện với đầy đủ các danh mục món ăn đã được thiết lập trước đó. 
  * Bạn tiến hành tìm kiếm hoặc nhấn trực tiếp vào hình ảnh/tên của sản phẩm (món ăn, đồ uống) để thêm vào đơn hàng.
  * Đối với các món có kích thước khác nhau (Size S, M, L) hoặc có kèm Topping (thêm trân châu, thêm thạch, thêm phô mai...), hệ thống sẽ hiển thị bảng tùy chọn để bạn tích chọn cho đúng yêu cầu của khách.
  * Điều chỉnh số lượng món bằng cách nhấn nút dấu cộng `+` hoặc dấu trừ `-`. Sau khi kiểm tra danh sách món gọi đã hoàn toàn chính xác với yêu cầu của khách, bạn bấm vào nút **Thanh toán**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image7.png" alt="Chọn sản phẩm, định lượng số lượng và nhấn Thanh toán"/>
  </figure>

* **Bước 3: Xác nhận phương thức thanh toán và Đóng đơn**
  Hệ thống hiển thị màn hình tổng hợp hóa đơn với tổng số tiền khách cần trả (đã bao gồm các chương trình giảm giá hoặc phí dịch vụ nếu có thiết lập).
  * Bạn tiến hành hỏi và lựa chọn **Phương thức thanh toán** tương ứng mà khách hàng yêu cầu (ví dụ: Tiền mặt, Chuyển khoản ngân hàng qua mã QR, Quẹt thẻ ATM/Tín dụng).
  * Sau khi đã nhận đủ tiền từ khách hoặc xác nhận giao dịch chuyển khoản thành công, nhấn vào nút **Xác nhận thanh toán**. Hệ thống sẽ tự động in hóa đơn (nếu có kết nối máy in), trừ nguyên liệu trong kho theo định lượng, và chuyển trạng thái của bàn đó về lại "Bàn trống" để sẵn sàng phục vụ lượt khách tiếp theo.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image8.png" alt="Chọn phương thức thanh toán và Xác nhận thanh toán"/>
  </figure>

---

## 2. Tạo đơn bán hàng trực tiếp (Không theo bàn)
Chức năng này được tối ưu riêng cho các giao dịch nhanh, khách mua mang về, hoặc mô hình kinh doanh gọi món - trả tiền ngay tại quầy thu ngân mà không cần quản lý vị trí ngồi hay sơ đồ phòng trống.

### Quy trình các bước thực hiện:

* **Bước 1: Truy cập chức năng Tạo đơn bán hàng nhanh**
  Từ màn hình giao diện làm việc chính (Trang chủ hệ thống), bạn nhìn sang danh mục menu ở phía bên trái. Di chuyển con trỏ chuột đến mục **Bán hàng**, một menu phụ sẽ mở rộng ra, tại đây bạn nhấn chọn vào dòng **Tạo đơn bán hàng**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image9.png" alt="Vào menu Bán hàng chọn Tạo đơn bán hàng"/>
  </figure>

* **Bước 2: Tìm kiếm và Lựa chọn sản phẩm vào giỏ hàng**
  Lúc này, giao diện bán hàng tổng quát sẽ xuất hiện. Bạn có thể sử dụng thanh tìm kiếm (nhập tên món, mã món) hoặc lướt qua danh sách các nhóm hàng hóa được phân loại sẵn. Khi tìm thấy món ăn/đồ uống khách yêu cầu, bạn nhấp vào sản phẩm đó rồi nhấn nút **Thêm** để đưa sản phẩm vào danh sách đơn hàng hiện tại. Tiếp tục lặp lại thao tác này cho đến khi chọn đủ tất cả các món mà khách muốn mua.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image10.png" alt="Tìm kiếm, chọn sản phẩm và bấm Thêm"/>
  </figure>

* **Bước 3: Kiểm tra thông tin đơn hàng và Hoàn tất tạo đơn**
  Tại cột hiển thị thông tin chi tiết đơn hàng (thường ở phía bên phải màn hình), bạn thực hiện rà soát kỹ lưỡng lại một lần cuối:
  * Kiểm tra lại số lượng của từng món ăn xem đã đúng chưa.
  * Điền thông tin khách hàng (nếu quán có chương trình tích điểm hoặc cần quản lý thông tin khách thân thiết).
  * Nhập số tiền khách đưa để hệ thống tự động tính toán số tiền thừa cần trả lại (nếu thanh toán bằng tiền mặt).
  * Sau khi mọi thông tin đã chuẩn xác và không cần chỉnh sửa gì thêm, bạn nhấn vào nút **Tạo đơn** để hệ thống chốt hóa đơn, ghi nhận doanh thu vào báo cáo tài chính và hoàn tất chu trình bán hàng trực tiếp.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image11.png" alt="Kiểm tra lại toàn bộ thông tin đơn hàng và bấm Tạo đơn"/>
  </figure>