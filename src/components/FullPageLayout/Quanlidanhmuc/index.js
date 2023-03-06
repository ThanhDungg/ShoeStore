import classNames from "classnames/bind";
import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";
import RowFour from "~/components/Layout/components/RowFour";
import style from './Quanlidanhmuc.module.scss';

const cx = classNames.bind(style)

const danhmuc = [
    {
        ten: 'abcbasc',
        mota: 'MO TA',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbádasdasdasdasdadasdsadasasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
    {
        ten: 'abcbasc',
        mota: 'asdasdasd',
        trangthai: 'Hoạt động'
    },
]

function QuanLiDanhMuc() {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <Body title="Quản lí danh mục" isCurrentDelete = {false} toCreate='/quanlidanhmuc/create'> 
                <RowFour QLDN={danhmuc} ten='TÊN DANH MỤC'/>
            </Body>
        </div>
     );
}

export default QuanLiDanhMuc;