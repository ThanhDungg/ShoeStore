import classNames from "classnames/bind";
import style from './ChiTietDonHang.module.scss'

const cx = classNames.bind(style)


function ChiTietDonHang({madh = '1234', tenKH = 'Doãn Thông', diachi = 'Man thiện quận 9', thoigian = '12/2/2004', tenSP = 'Nike', mau = 'đỏ', size='39', tongtien=120000}) {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Thông tin đơn hàng</h2>
            <div className={cx('content')}>
                <div>Mã đơn hàng: {madh}</div>
                <div>Tên khách hàng: {tenKH}</div>
                <div>Địa chỉ nhận hàng: {diachi}</div>
                <div>Thời gian đặt: {thoigian}</div>
                <div>Sản phẩm: {tenSP}, {mau}, {size}</div>
                <div>Tổng tiền: {tongtien}</div>
                <div className={cx('trangthai')}>
                    <div className={cx('title-trangthai')}>Trạng thái giao hàng:</div>
                    <div className={cx('btn-trangthai')}>Đang lấy hàng</div>
                    <div className={cx('btn-trangthai')}>Đang vận chuyển</div>
                    <div className={cx('btn-trangthai')}>Đã giao</div>
                </div>
            </div>
        </div>
     );
}

export default ChiTietDonHang;