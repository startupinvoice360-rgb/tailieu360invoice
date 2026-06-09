---
sidebar_position: 4
---

# Quản lý Nhập hàng

**Tổng quan tính năng:** Phân hệ **Nhập hàng** là công cụ cốt lõi giúp nhà hàng/quán ăn kiểm soát chặt chẽ quy trình mua sắm nguyên vật liệu, hàng hóa từ các nhà cung cấp. Chức năng này hỗ trợ người quản lý theo dõi biến động giá vốn, cập nhật chính xác số lượng tồn kho thực tế, in mã vạch quản lý sản phẩm, đồng thời linh hoạt xử lý các nghiệp vụ phát sinh sau nhập kho như: điều chỉnh thông tin đơn nhập, trả hàng do lỗi hoặc hủy hóa đơn sai sót.

---

## 1. Quy trình Tạo đơn nhập hàng

Tính năng này được sử dụng khi nhà hàng phát sinh hoạt động mua hàng hóa, nguyên liệu (ví dụ: cà phê, sữa, thịt, rau củ hoặc chai nước đóng sẵn) để nạp vào kho tổng.

### 1.1. Khởi tạo đơn nhập hàng tiêu chuẩn
Quy trình nhập kho cơ bản đối với các mặt hàng và nhà cung cấp đã có sẵn thông tin trên hệ thống.

* **Bước 1: Truy cập tính năng Tạo đơn nhập hàng**
  Từ màn hình làm việc chính của hệ thống, bạn di chuyển chuột sang thanh menu điều hướng ở cạnh bên trái. Tìm mục **Nhập hàng**, nhấp chuột để mở rộng menu phụ và chọn tiếp vào dòng **Tạo đơn nhập hàng**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image12.png" alt="Truy cập giao diện Lập đơn nhập hàng"/>
  </figure>

* **Bước 2: Lựa chọn Sản phẩm, Nhà cung cấp và Thiết lập Thời gian nhập**
  Tại giao diện khởi tạo phiếu nhập kho, bạn tiến hành thiết lập các thông tin cơ bản của đơn hàng:
  * *Chọn sản phẩm:* Nhập tên hoặc mã sản phẩm/nguyên liệu vào thanh tìm kiếm để đưa vào danh sách nhập.
  * *Chọn nhà cung cấp:* Tìm kiếm và chọn tên đơn vị phân phối mặt hàng này cho quán.
  * *Chọn ngày:* Thiết lập chính xác ngày giờ thực tế nhập hàng vào kho (mặc định hệ thống sẽ lấy thời gian hiện tại) để phục vụ cho việc tính toán báo cáo tài chính chính xác theo kỳ.
  
  <div style={{ textAlign: 'center' }}>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image13-1.png" alt="Lựa chọn danh sách hàng hóa cần nhập"/>
    </figure>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image13-2.png" alt="Chọn thông tin đối tác và ngày nhập kho"/>
    </figure>
  </div>

* **Bước 3: Nhập thông tin chi tiết, Kiểm tra đơn giá và Xác nhận nhập kho**
  Tại bảng danh sách sản phẩm đã chọn, bạn tiến hành điền chính xác *Số lượng nhập thực tế* và *Đơn giá nhập* (giá vốn mua vào trong đợt này). Kiểm tra kỹ lại tổng giá trị đơn hàng, số tiền đã trả cho nhà cung cấp, sau đó nhấn nút **Tạo đơn**. Hệ thống sẽ ngay lập tức cộng số lượng vào kho và lưu lại lịch sử công nợ (nếu có).
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image14.png" alt="Hoàn tất thông tin đơn nhập và bấm Tạo đơn"/>
  </figure>

---

### 1.2. Khởi tạo và Thêm nhanh Sản phẩm mới khi đang nhập hàng
Trong quá trình lên đơn nhập kho, nếu phát sinh một mặt hàng mới hoàn toàn chưa từng được khai báo trên hệ thống, bạn có thể dùng tính năng này để thêm nhanh mà không cần quay lại menu quản lý sản phẩm.

* **Bước 1: Vào giao diện Tạo đơn nhập hàng**
  Tại thanh điều hướng bên trái màn hình trang chủ, chọn **Nhập hàng** -> nhấp chọn tiếp vào mục **Tạo đơn nhập hàng**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image12.png" alt="Mở màn hình Lập phiếu nhập"/>
  </figure>

* **Bước 2: Kích hoạt tính năng Thêm sản phẩm nhanh**
  Tại khu vực tìm kiếm hàng hóa, bạn quan sát thấy nút chức năng **Thêm sản phẩm** (thường nằm cạnh thanh tìm kiếm). Hãy nhấn vào nút này để mở ra cửa sổ thiết lập nhanh.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image15-1.png" alt="Kích hoạt khung Thêm sản phẩm mới"/>
  </figure>

* **Bước 3: Điền hồ sơ mặt hàng và Lưu trữ**
  Một bảng biểu mẫu thông tin sản phẩm xuất hiện. Bạn cần điền đầy đủ các thông tin cốt lõi như: *Tên sản phẩm*, *Mã sản phẩm (SKU)*, *Chọn loại sản phẩm / danh mục*, *Đơn vị tính* (Cái, Kg, Thùng...), giá bán dự kiến và tải lên *Hình ảnh* minh họa nếu có. Sau khi điền xong, nhấn nút **Lưu** để hệ thống vừa lưu mặt hàng này vào danh mục chung, vừa tự động điền sản phẩm đó vào đơn nhập hàng đang viết dở.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image15-2.png" alt="Nhập thông tin sản phẩm mới và nhấn Lưu"/>
  </figure>

---

### 1.3. Khởi tạo và Thêm nhanh Nhà cung cấp mới
Tương tự như sản phẩm, khi bạn nhập hàng từ một đối tác mới tinh, hệ thống hỗ trợ mở nhanh form tạo hồ sơ đối tác ngay tại màn hình nhập kho.

* **Bước 1: Mở màn hình Tạo đơn nhập hàng**
  Tại thanh điều hướng bên trái màn hình chính, chọn mục **Nhập hàng** và nhấn vào **Tạo đơn nhập hàng**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image12.png" alt="Mở màn hình lập đơn nhập"/>
  </figure>

* **Bước 2: Chọn tính năng Thêm mới nhà cung cấp**
  Tại trường thông tin dành cho Đối tác/Nhà cung cấp, bạn nhấn vào liên kết hoặc nút **Thêm mới nhà cung cấp** nằm ở góc bên phải của ô chọn.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image16-1.png" alt="Kích hoạt bảng Thêm nhà cung cấp nhanh"/>
  </figure>

* **Bước 3: Ghi nhận thông tin đối tác và Hoàn tất**
  Cửa sổ thông tin đối tác hiển thị, bạn tiến hành điền các thông tin liên lạc để phục vụ cho việc đối soát công nợ sau này: *Tên nhà cung cấp*, *Số điện thoại liên hệ*, *Mã số thuế* (nếu cần xuất hóa đơn tài chính), *Địa chỉ văn phòng/kho hàng*... Kiểm tra lại độ chính xác của số điện thoại và tên doanh nghiệp, sau đó bấm nút **Lưu** để lưu thông tin vào danh bạ đối tác.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image16-1.png" alt="Điền hồ sơ đối tác và nhấn Lưu"/>
  </figure>

---

## 2. In Hóa đơn và Mã vạch sản phẩm từ Đơn nhập

Hệ thống hỗ trợ in ấn chứng từ giấy để lưu trữ vật lý hoặc in tem nhãn/mã vạch dán lên bao bì sản phẩm phục vụ quét mã bán hàng bằng máy quét barcode.

### 2.1. Quy trình In hóa đơn nhập hàng (Chứng từ kho)

* **Bước 1: Truy cập Danh sách Hóa đơn nhập hàng**
  Tại menu bên trái màn hình, chọn **Nhập hàng**, sau đó nhấp vào mục **Hóa đơn nhập hàng** để truy cập vào bảng nhật ký lưu trữ toàn bộ các đơn nhập kho trong lịch sử.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image17.png" alt="Vào danh sách Hóa đơn nhập hàng"/>
  </figure>

* **Bước 2: Lựa chọn Đơn nhập và Kích hoạt lệnh In**
  Tìm kiếm hóa đơn nhập hàng mà bạn cần in (có thể lọc theo mã đơn hoặc ngày tháng). Tại cột thao tác cuối cùng của dòng hóa đơn đó, nhấn vào biểu tượng **Dấu ba chấm (...)**, một menu lệnh hiện ra, bạn chọn mục **In hóa đơn**.
  
  <div style={{ textAlign: 'center' }}>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-1.png" alt="Nhấn biểu tượng ba chấm cuối dòng"/>
    </figure>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-2.png" alt="Chọn lệnh In hóa đơn trong menu phụ"/>
    </figure>
  </div>

* **Bước 3: Xác nhận tùy chỉnh và Tiến hành In**
  Hệ thống sẽ hiển thị một bản xem trước (Preview) phôi hóa đơn với đầy đủ thông tin hàng hóa, số lượng và chữ ký kho. Bạn kiểm tra lại định dạng và nhấn nút **In đơn** để lệnh được chuyển trực tiếp đến máy in hóa đơn của quán.

---

### 2.2. Quy trình In mã vạch (Barcode) dán lên sản phẩm

* **Bước 1: Mở bảng quản lý Hóa đơn nhập hàng**
  Từ menu quản trị bên trái, truy cập theo đường dẫn: Chọn **Nhập hàng** -> Chọn tiếp vào mục **Hóa đơn nhập hàng**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image17.png" alt="Truy cập danh sách lịch sử đơn nhập"/>
  </figure>

* **Bước 2: Chọn lệnh in tem mã vạch trong đơn**
  Tại bảng danh sách hóa đơn, xác định đúng đơn nhập chứa các sản phẩm cần làm tem nhãn. Nhấn vào biểu tượng **Dấu ba chấm (...)** ở cuối dòng hóa đơn đó và nhấp chọn lệnh **In mã vạch sản phẩm trong đơn**.
  
  <div style={{ textAlign: 'center' }}>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-1.png" alt="Bấm ba chấm tại hóa đơn cần in nhãn"/>
    </figure>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-3.png" alt="Chọn In mã vạch sản phẩm trong đơn"/>
    </figure>
  </div>

* **Bước 3: Thiết lập cấu hình số lượng tem và Khổ giấy in**
  Giao diện tùy chỉnh in tem nhãn sẽ xuất hiện. Tại đây, bạn tiến hành nhập *Số lượng tem cần in* cho từng mã hàng (hệ thống sẽ gợi ý sẵn theo số lượng nhập trong đơn). Tiếp theo, chọn *Kiểu muốn in / Khổ tem in* (ví dụ: khổ tem 35x22mm, khổ A4, hoặc các dạng tem 2 hàng, 3 hàng) sao cho tương thích với máy in tem nhãn của bạn. Sau khi cấu hình xong, bấm nút lệnh để tiến hành in ra tem dán.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image19.png" alt="Cấu hình số lượng tem, chọn khổ in và xuất lệnh in"/>
  </figure>

---

## 3. Quy trình Cập nhật và Sửa đổi Hóa đơn nhập hàng
Sử dụng khi phát sinh sai sót trong quá trình nhập liệu ban đầu (nhập nhầm số lượng, gõ sai đơn giá vốn, chọn sai ngày nhập...).

* **Bước 1: Tìm kiếm đơn nhập cần chỉnh sửa**
  Trên thanh điều hướng bên trái màn hình, nhấn vào mục **Nhập hàng** và chọn dòng **Hóa đơn nhập hàng** để hiển thị bảng dữ liệu.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image17.png" alt="Truy cập nhật ký đơn nhập để tìm hóa đơn sai"/>
  </figure>

* **Bước 2: Chọn tính năng Cập nhật thông tin**
  Tìm đến đúng dòng hóa đơn cần sửa đổi số liệu, nhấp chuột vào biểu tượng **Dấu ba chấm (...)** nằm ở phía cuối cùng bên phải của hàng và chọn dòng lệnh **Cập nhật**.
  
  <div style={{ textAlign: 'center' }}>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-1.png" alt="Bấm nút ba chấm tại hóa đơn cần chỉnh sửa"/>
    </figure>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-4.png" alt="Chọn lệnh Cập nhật trong danh sách"/>
    </figure>
  </div>

* **Bước 3: Tiến hành sửa đổi dữ liệu và Ghi nhận thay đổi**
  Hệ thống sẽ mở lại giao diện đơn nhập chứa toàn bộ thông tin cũ. Bạn tiến hành chỉnh sửa lại các trường thông tin bị sai lệch (ví dụ: sửa lại số lượng từ 10 thành 15, hoặc điều chỉnh lại đơn giá). Sau khi rà soát kỹ lưỡng, bạn nhấn vào nút **Sửa đơn**. Hệ thống sẽ tự động tính toán lại giá trị đơn, cập nhật lại số lượng tồn kho chênh lệch và điều chỉnh lại báo cáo dòng tiền chi phí.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image18-4.png" alt="Nhập dữ liệu mới và nhấn nút Sửa đơn để hoàn tất"/>
  </figure>

---

## 4. Nghiệp vụ Trả hàng cho Nhà cung cấp
Áp dụng trong trường hợp sau khi nhập kho, bạn phát hiện hàng hóa/nguyên vật liệu bị lỗi, hết hạn sử dụng, hoặc không đạt tiêu chuẩn chất lượng của nhà hàng và cần hoàn trả lại một phần hoặc toàn bộ cho đơn vị phân phối.

* **Bước 1: Chọn hóa đơn nhập gốc**
  Tại menu bên trái, chọn **Nhập hàng** -> chọn mục **Hóa đơn nhập hàng** để tìm kiếm phiếu nhập kho ban đầu của lô hàng lỗi.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image17.png" alt="Tìm hóa đơn mua hàng ban đầu"/>
  </figure>

* **Bước 2: Kích hoạt lệnh Trả hàng**
  Nhấp chuột vào biểu tượng **Dấu ba chấm (...)** nằm ở cột cuối cùng của hóa đơn mua hàng tương ứng, từ danh sách tùy chọn, bạn nhấn chọn mục **Trả hàng**.
  
  <div style={{ textAlign: 'center' }}>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-1.png" alt="Nhấn chọn ba chấm tại đơn hàng phát sinh lỗi"/>
    </figure>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-5.png" alt="Chọn tính năng Trả hàng"/>
    </figure>
  </div>

* **Bước 3: Nhập số lượng hoàn trả và Xác nhận xuất kho trả hàng**
  Một bảng danh sách các mặt hàng trong đơn sẽ hiện ra. Bạn tiến hành nhập chính xác *Số lượng sản phẩm thực tế cần trả lại* cho nhà cung cấp tại cột tương ứng (số lượng trả phải nhỏ hơn hoặc bằng số lượng đã nhập). Kiểm tra lại tổng số tiền nhà cung cấp phải hoàn lại cho quán, sau đó nhấn nút **Xác nhận**. Hệ thống sẽ tự động trừ bớt số lượng tồn kho của những mặt hàng này và cấn trừ tiền/công nợ với nhà cung cấp.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image18-5.png" alt="Điền số lượng hàng lỗi hoàn trả và bấm Xác nhận"/>
  </figure>

---

## 5. Quy trình Hủy hóa đơn nhập hàng
Tính năng này được sử dụng khi đơn nhập kho bị lập sai hoàn toàn, hoặc giao dịch mua hàng bị hủy bỏ giữa chừng sau khi đã lỡ bấm tạo đơn trên hệ thống. 

> ⚠️ **Lưu ý nghiệp vụ nghiêm trọng:** Hành động hủy hóa đơn sẽ đảo ngược hoàn toàn quy trình. Hệ thống sẽ **trừ toàn bộ số lượng hàng hóa** đã cộng vào kho từ đơn này. Bạn chỉ có thể thực hiện hủy khi số lượng tồn kho hiện tại của mặt hàng đó lớn hơn hoặc bằng số lượng ghi trên đơn nhập (để đảm bảo kho không bị âm).

* **Bước 1: Tìm hóa đơn nhập cần hủy bỏ**
  Từ menu quản trị bên trái, truy cập vào phần **Nhập hàng** và nhấp chọn mục **Hóa đơn nhập hàng**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image17.png" alt="Tìm kiếm phiếu nhập kho cần xóa bỏ khỏi hệ thống"/>
  </figure>

* **Bước 2: Chọn lệnh Hủy đơn**
  Tìm đúng hóa đơn sai sót cần xóa, nhấn chọn biểu tượng **Dấu ba chấm (...)** ở góc cuối dòng của hóa đơn đó, sau đó nhấp chuột vào dòng chữ **Hủy**.
  
  <div style={{ textAlign: 'center' }}>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-1.png" alt="Nhấn chọn dấu ba chấm tại hóa đơn cần hủy"/>
    </figure>
    <figure>
      <img src="/imgWeb/NhaHangQuanAn/image18-6.png" alt="Chọn lệnh Hủy từ danh sách menu phụ"/>
    </figure>
  </div>

* **Bước 3: Xác nhận hủy bỏ vĩnh viễn chứng từ**
  Một hộp thoại cảnh báo của hệ thống sẽ hiển thị để yêu cầu bạn xác nhận lại quyết định (nhằm tránh việc bấm nhầm làm mất dữ liệu kho). Bạn kiểm tra kỹ lại mã hóa đơn hiển thị trên cảnh báo, nếu đã chắc chắn, nhấn nút **Đồng ý** để hoàn tất lệnh hủy. Trạng thái của hóa đơn trên hệ thống sẽ chuyển sang "Đã hủy" và số liệu tồn kho của sản phẩm lập tức được khấu trừ trả lại trạng thái trước khi nhập.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/NhaHangQuanAn/image18-6.png" alt="Đọc kỹ thông báo cảnh báo và bấm Đồng ý để kết thúc"/>
  </figure>