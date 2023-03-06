import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLock, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from './RowFive.module.scss';

const cx = classNames.bind(style)


function RowFive({QLDN = [], r1 = 'STT', r2='Tên sản phẩm', r3='Giá', r4='Đã bán', r5='Trạng thái', isSanPham = true}) {

    
        const renderTable = () => {
            return QLDN.map((item, index) => {
                return (
                    <tr className={cx('table-container')}>
                        <td className={cx('row', 'row-container')}>{item.tennguoidung || index + 1}</td>
                        <td className={cx('row', 'row-container')}>{item.ten || item.email}</td>
                        <td className={cx('row', 'row-container')}>{item.gia || item.sdt}</td>
                        <td className={cx('row', 'row-container')}>{item.daban || item.ngaydangki}</td>
                        <td className={cx('row', 'row-container')}>{item.trangthai}</td>
                        {isSanPham ?<div>
                            <FontAwesomeIcon className={cx('icon')} icon={faPen} />
                            <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
                            <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                        </div> : <div>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </div>}
                    </tr>
                );
            })
        }

    return ( 
        <div className={cx('table')}>
                            <div className={cx('tbl-content')}>
                                <tr >
                                    <tr className={cx('table-title')}>
                                        <td className={cx('row', 'row-title')}>{r1}</td>
                                        <td className={cx('row', 'row-title')}>{r2}</td>
                                        <td className={cx('row', 'row-title')}>{r3}</td>
                                        <td className={cx('row', 'row-title')}>{r4}</td>
                                        <td className={cx('row', 'row-title')}>{r5}</td>
                                    </tr>
                                    {renderTable()}
                                </tr>
                            </div>
                        </div>
);
}

export default RowFive;