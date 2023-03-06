import classNames from "classnames/bind";
import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";
import RowFive from "~/components/Layout/components/RowFive";
import style from './Quanlisanpham.module.scss';

const cx = classNames.bind(style)

const sanpham = [
    {
        ten: 'abcbasc',
        gia: 120,
        daban: 10,
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbádasdasdasdasdadasdsadasasc',
        gia: 120,
        daban: 10,
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        gia: 120,
        daban: 10,
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        gia: 120,
        daban: 10,
        trangthai: 'Hoạt động'
    },
]

function Quanlysanpham() {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <Body title="Quản lí sản phẩm" isCbb isCurrentDelete = {false} toCreate='/quanlisanpham/create'>
                <RowFive QLDN={sanpham} />
            </Body>
        </div>
     );
}

export default Quanlysanpham;