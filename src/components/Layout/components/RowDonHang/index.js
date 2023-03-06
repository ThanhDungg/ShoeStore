import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import style from './RowDonHang.module.scss';

const cx = classNames.bind(style)


function RowDonHang({QLDN = []}) {

    
        const renderTable = () => {
            return QLDN.map((item, index) => {
                return (
                    <tr className={cx('table-container')}>
                        <td className={cx('row', 'row-container')}>{item.madh}</td>
                        <td className={cx('row', 'row-container')}>{item.thoigiandat}</td>
                        <td className={cx('row', 'row-container')}>{item.sanpham}</td>
                        <td className={cx('row', 'row-container')}>{item.tongtien}</td>
                        <td className={cx('row', 'row-container')}>{item.tenkhachhang}</td>
                        <td className={cx('row', 'row-container')}>{item.trangthaigiaohang}</td>
                        <NavLink to='/quanlidonhang/chitietdonhang'>
                            <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                        </NavLink>
                    </tr>
                );
            })
        }

    return ( 
        <div className={cx('table')}>
                            <div className={cx('tbl-content')}>
                                <tr >
                                    <tr className={cx('table-title')}>
                                        <td className={cx('row')}>MÃ ĐƠN HÀNG</td>
                                        <td className={cx('row')}>THỜI GIAN ĐẶT</td>
                                        <td className={cx('row')}>SẢN PHẨM</td>
                                        <td className={cx('row')}>TỔNG TIỀN</td>
                                        <td className={cx('row')}>TÊN KHÁCH HÀNG</td>
                                        <td className={cx('row')}>TRẠNG THÁI GIAO HÀNG</td>
                                    </tr>
                                    {renderTable()}
                                </tr>
                            </div>
                        </div>
);
}

export default RowDonHang;