import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";
import RowDonHang from "~/components/Layout/components/RowDonHang";
import classNames from "classnames/bind";
import style from './RowDonHang.module.scss'

const cx = classNames.bind(style)

const donhang = [
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },{
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },{
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },{
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
    {
        madh: 123,
        thoigiandat:'15-11-2023',
        sanpham: 'NIKE',
        tongtien: 1200,
        tenkhachhang: 'Doãn Thông',
        trangthaigiaohang: 'Đang vận chuyển'
    },
]


function QLDonHang() {
    return ( 
    <div className={cx('wrapper')}>
        <Header />
        <Body title="Quản lí đơn hàng" isDelete = {false} isCreate = {false}>
            <RowDonHang QLDN={donhang} ></RowDonHang>
        </Body>
    </div> );
}

export default QLDonHang;