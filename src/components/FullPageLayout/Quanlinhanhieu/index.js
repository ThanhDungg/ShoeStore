import classNames from "classnames/bind";
import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";
import RowFour from "~/components/Layout/components/RowFour";
import style from './Quanlinhanhieu.module.scss';

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
]

function QuanLiNhanHieu() {
    return ( 
        <div className={cx('wrapper')} >
            <Header />
            <Body title="Quản lí nhãn hiệu" isCurrentDelete = {false} toCreate='/quanlinhanhieu/create'> 
                <RowFour QLDN={danhmuc} ten='TÊN NHÃN HIỆU'/>
            </Body>
        </div>
     );
}

export default QuanLiNhanHieu;