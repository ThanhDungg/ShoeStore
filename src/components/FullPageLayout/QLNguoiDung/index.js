import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";
import RowFive from "~/components/Layout/components/RowFive";


const QLND = [
    {
        tennguoidung:'Nguyễn Thanh Dũng',
        email:'N19DCCN030',
        sdt:'123456',
        ngaydangki:'12/2/2004',
        trangthai:'Hoạt động'
    },
    {
        tennguoidung:'Nguyễn Thanh Dũng',
        email:'N19DCCN030',
        sdt:'123456',
        ngaydangki:'12/2/2004',
        trangthai:'Hoạt động'
    },
    {
        tennguoidung:'Nguyễn Thanh Dũng',
        email:'N19DCCN030',
        sdt:'123456',
        ngaydangki:'12/2/2004',
        trangthai:'Hoạt động'
    },
    {
        tennguoidung:'Nguyễn Thanh Dũng',
        email:'N19DCCN030',
        sdt:'123456',
        ngaydangki:'12/2/2004',
        trangthai:'Hoạt động'
    },
    {
        tennguoidung:'Nguyễn Thanh Dũng',
        email:'N19DCCN030',
        sdt:'123456',
        ngaydangki:'12/2/2004',
        trangthai:'Hoạt động'
    },
]

function QLNguoiDung() {
    return ( 
        <div>
            <Header />
            <Body title="Quản lí người dùng" isCurrentDelete = {false} isCreate={false}>
                <RowFive QLDN={QLND} r1='Tên người dùng' r2="Email" r3="SĐT" r4="Ngày đăng ký" r5="Trạng thái" isSanPham={false} />
            </Body>
        </div>
     );
}

export default QLNguoiDung;