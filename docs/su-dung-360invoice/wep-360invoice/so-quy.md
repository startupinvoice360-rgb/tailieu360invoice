---
sidebar_position: 6
---

# Hướng dẫn sổ quỹ

**Tổng quan tính năng:** Phân hệ **Sổ quỹ** trên giao diện Web là trung tâm kiểm soát và quản trị toàn bộ dòng tiền mặt (Tiền quỹ tại quầy) và tiền gửi ngân hàng (Tài khoản thanh toán) của doanh nghiệp. Trong vận hành kinh doanh, nếu chỉ quản lý doanh thu dựa trên hóa đơn bán hàng hay phiếu nhập kho là chưa đủ. Doanh nghiệp luôn phát sinh các khoản biến động dòng tiền nằm ngoài luồng mua bán trực tiếp, gọi là **Chi phí vận hành** (Tiền thuê mặt bằng, tiền điện nước, lương nhân viên, chi phí tiếp khách...) và **Khoản thu ngoài doanh thu** (Thu thanh lý tài sản, thu lãi tiền gửi, chủ cửa hàng nạp thêm vốn lưu động...).

Hệ thống Sổ quỹ thông minh giúp nhà quản lý:
* Phân tách dòng tiền rõ ràng thông qua việc phân loại các nhóm lý do Thu/Chi.
* Ghi nhận tức thời mọi biến động quỹ, ngăn chặn tuyệt đối tình trạng thất thoát dòng tiền không rõ nguyên nhân.
* Tự động tổng hợp chỉ số tồn quỹ thực tế, làm cơ sở phân tích dòng tiền thuần và lập báo cáo Kết quả hoạt động kinh doanh (P&L) chính xác.

---

## 1. Quản lý loại phiếu thu chi (Thiết lập danh mục Lý do dòng tiền)

Trước khi tiến hành nạp tiền vào quỹ hoặc xuất tiền chi trả, bạn cần xây dựng hệ thống danh mục "Lý do thu chi" (Loại phiếu). Việc phân loại này giúp các bộ phận kế toán và chủ doanh nghiệp có thể chạy bộ lọc báo cáo xem một tháng cửa hàng đã chi bao nhiêu tiền cho mục "Tiền điện" hay "Tiền lương thợ", tránh việc dồn chung tất cả vào một cục dữ liệu không thể bóc tách.

* **Bước 1: Truy cập Phân hệ Loại phiếu thu chi**
  Từ thanh menu điều hướng dọc nằm ở phía bên trái màn hình giao diện Web (Sidebar), bạn tìm và bấm chuột chọn vào mục **Sổ quỹ**. Trong danh sách menu con vừa mở rộng, bạn nhấp chuột chọn dòng tính năng **Loại phiếu thu chi**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image.png" alt="Điều hướng chọn Loại phiếu thu chi trên thanh menu dọc" />
  </figure>

* **Bước 2: Khởi động Biểu mẫu Khai báo mới**
  Tại giao diện quản lý danh mục, bạn di chuyển chuột lên góc trên bên phải màn hình và nhấn vào nút lệnh `Tạo mới`.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 2.png" alt="Nhấp chọn nút Tạo mới cấu trúc lý do thu chi" />
  </figure>

* **Bước 3: Định danh Tên phiếu và Gắn bộ lọc bản chất dòng tiền**
  Hệ thống hiển thị một cửa sổ Pop-up, bạn thực hiện khai báo các thông số:
  * *Tên loại phiếu:* Nhập tên nhóm lý do rõ ràng, dễ hiểu (Ví dụ nhập: `Chi tiền điện nước quầy`, `Chi trả lương nhân viên`, `Thu tiền thanh lý phế liệu`...).
  * *Loại phiếu:* Bấm chọn vào ô Dropdown để phân định chính xác bản chất: Tích chọn **Thu** (nếu đây là khoản tiền chảy vào túi cửa hàng) hoặc tích chọn **Chi** (nếu đây là khoản tiền xả ra khỏi quỹ).
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 3.png" alt="Nhập tên gọi định danh và phân loại bản chất Thu hoặc Chi cho phiếu" />
  </figure>

* **Bước 4: Lưu trữ cấu hình**
  Kiểm tra lại câu từ định danh xem đã chuẩn hóa chưa, sau đó nhấn chọn nút **Lưu** để hoàn tất việc ghi nhận loại phiếu vào hệ thống dùng chung.

---

## 2. Tổng quan sổ quỹ (Quy trình hạch toán Biến động dòng tiền)

Mục **Tổng quan sổ quỹ** là nơi kế toán thực hiện nghiệp vụ ghi nhận dòng tiền phát sinh hàng ngày và theo dõi dòng chảy tài chính thực tế của cửa hàng.

### Quy trình Lập phiếu thu (Ghi nhận dòng tiền nạp vào quỹ)
Áp dụng cho các khoản thu ngoài hóa đơn bán hàng (Ví dụ: Thu tiền khách phạt hợp đồng, thu tiền lãi, chủ tiệm bổ sung dòng vốn).

* **Bước 1:** Từ thanh menu Sidebar bên trái, bạn bấm chọn vào mục **Sổ quỹ**, sau đó nhấp chuột chọn dòng tính năng **Tổng quan sổ quỹ** để mở bảng nhật ký dòng tiền tổng.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy.png" alt="Truy cập vào giao diện quản trị Tổng quan sổ quỹ" />
  </figure>

* **Bước 2:** Di chuyển chuột lên góc trên bên phải của bảng danh sách phiếu, bạn nhấp chuột vào biểu tượng **Dấu ba chấm (...)** để mở menu lệnh ẩn và chọn tác vụ **Tạo phiếu thu**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 4.png" alt="Mở menu tùy chọn ba chấm và kích hoạt lệnh Tạo phiếu thu" />
  </figure>

* **Bước 3:** Tiến hành điền đầy đủ và chi tiết hồ sơ chứng từ thu tiền:
  * Nhập số tiền thu thực tế, thông tin người nộp tiền và nội dung diễn giải chứng từ.
  * Tại ô **Loại phiếu thu**, bạn click chọn đúng nhóm lý do tương ứng (Đây chính là các danh mục mục lý do bạn đã thiết lập sẵn ở phần *1. Quản lý loại phiếu thu chi* phía trên).
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 6.png" alt="Khai báo số tiền, người nộp và liên kết đúng danh mục Loại phiếu thu" />
  </figure>

* **Bước 4:** Nhấn chọn nút **Lưu** để chốt phiếu. Hệ thống sẽ ngay lập tức cộng số tiền này vào tổng quỹ tiền mặt/tiền gửi của cửa hàng.

---

### Quy trình Lập phiếu chi (Ghi nhận dòng tiền xả ra khỏi quỹ)
Áp dụng khi cửa hàng xuất tiền mặt hoặc chuyển khoản ngân hàng để thanh toán các khoản chi phí phát sinh trong quá trình vận hành kinh doanh.

* **Bước 1:** Tại thanh menu Sidebar bên trái, bạn nhấp chuột chọn mục **Sổ quỹ** $\rightarrow$ Chọn lệnh **Tổng quan sổ quỹ**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy.png" alt="Truy cập giao diện Tổng quan sổ quỹ để chuẩn bị chi tiền" />
  </figure>

* **Bước 2:** Di chuyển chuột đến biểu tượng **Dấu ba chấm (...)** ở góc trên bên phải bảng dữ liệu và click lựa chọn lệnh **Tạo phiếu chi**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 5.png" alt="Mở tùy chỉnh menu và lựa chọn tác vụ Tạo phiếu chi" />
  </figure>

* **Bước 3:** Hoàn thiện phôi phiếu chi: Nhập chính xác số tiền xuất quỹ, họ tên đối tượng nhận tiền, lý do chi. Đồng thời tại mục **Loại phiếu chi**, bạn bắt buộc phải tích chọn đúng nhóm chi phí vận hành tương ứng để phục vụ việc phân tích biểu đồ cấu trúc chi phí cuối tháng.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 7.png" alt="Nhập liệu chi tiết thông tin xuất quỹ và gắn mã Loại phiếu chi phù hợp" />
  </figure>

* **Bước 4:** Click chọn nút **Lưu** để hoàn tất việc xuất quỹ. Phần mềm sẽ tự động khấu trừ tiền và cập nhật số dư tồn quỹ mới.

---

### Quy trình Sửa/Hiệu chỉnh thông tin phiếu Thu hoặc Chi
Sử dụng khi kế toán hoặc nhân viên thu ngân phát hiện phiếu dòng tiền vừa lập bị nhập sai tên đối tượng giao dịch, sai số tiền hoặc ghi nhận nhầm lý do phân loại.

* **Bước 1:** Bạn truy cập vào giao diện **Sổ quỹ** $\rightarrow$ Chọn phân hệ **Tổng quan sổ quỹ**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy.png" alt="Mở trung tâm nhật ký chứng từ Tổng quan sổ quỹ" />
  </figure>

* **Bước 2:** Tìm đến dòng phiếu thu hoặc phiếu chi bị sai sót dữ liệu. Bạn di chuyển chuột sang phía cuối bên phải của dòng phiếu đó và nhấp chọn vào biểu tượng **Hình cây bút (Sửa)**.
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 8.png" alt="Bấm chuột chọn biểu tượng hình cây bút tại cuối dòng để sửa phiếu" />
  </figure>

* **Bước 3:** Hệ thống mở lại biểu mẫu chứng từ gốc của phiếu đó. Kế toán thực hiện việc xóa đi các thông tin cũ bị nhầm lẫn và tiến hành nhập lại các giá trị đúng (Ví dụ: điều chỉnh lại số tiền thực tế, chọn lại nhóm loại phiếu chính xác...).
  
  <figure style={{ textAlign: 'center' }}>
    <img src="/imgWeb/soQuy/image copy 9.png" alt="Thực hiện chỉnh sửa trực tiếp các trường thông tin sai lệch dữ liệu" />
  </figure>

* **Bước 4:** Bấm chọn nút **Lưu** để cập nhật thay đổi. Hệ thống sẽ tự động tính toán lại số dư tồn quỹ lũy kế dựa trên giá trị mới được hiệu chỉnh.

---

## Các nguyên tắc lưu ý quan trọng khi quản trị Sổ quỹ doanh nghiệp

Để đảm bảo dòng tiền tài chính luôn minh bạch, khớp dữ liệu tuyệt đối và tránh các rủi ro thất thoát, bạn cần nằm lòng 3 nguyên tắc cốt lõi sau:

1. **Phân tách rõ ràng luồng tiền mặt tại quầy và tiền gửi ngân hàng:** Khi lập bất kỳ phiếu Thu hay phiếu Chi nào, kế toán cần ghi nhận chính xác giao thức dòng tiền được luân chuyển. Tiền mặt tại két phải khớp với sổ quỹ tiền mặt; tiền khách chuyển khoản qua mã QR hoặc quẹt thẻ phải khớp với biến động số dư tài khoản ngân hàng. Tuyệt đối không dồn chung hai nguồn tiền này lại làm một để tránh việc không thể đối soát sổ phụ ngân hàng cuối tháng.
2. **Khai báo Loại phiếu thu/chi nghiêm túc cho mọi giao dịch ngoài luồng mua bán:** Sai lầm lớn nhất của các cửa hàng là khi chi tiền điện, tiền trà nước cho thợ... thường tạo phiếu chi chung chung mà không gắn loại phiếu cụ thể. Việc bỏ qua liên kết mã loại phiếu ở Bước 3 sẽ trực tiếp làm mất đi tính chính xác của báo cáo tài chính tổng, khiến chủ doanh nghiệp không thể biết được tiền của mình đang bị "lạm chi" vào phân mục vận hành nào để lên phương án cắt giảm.
3. **Thực hiện nghiệp vụ kiểm két và chốt sổ quỹ hàng ngày:** Trước khi kết thúc ca làm việc hoặc đóng cửa hàng, thủ quỹ bắt buộc phải đếm toàn bộ số tiền mặt có trong két thực tế, sau đó thực hiện đối soát trực tiếp với chỉ số "Tồn quỹ" hiển thị trên phần mềm Web App. Nếu xuất hiện chênh lệch (thừa hoặc thiếu tiền mặt), nhân viên phải mở ngay nhật ký sửa phiếu thu chi để rà soát xem có ca đơn nào bị lên nhầm số liệu hay không, giải quyết dứt điểm sai sót ngay trong ngày, không để tồn đọng sang tháng sau.