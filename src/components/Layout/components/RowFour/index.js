import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLock, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import style from './RowFour.module.scss';

const cx = classNames.bind(style)


function RowFour({QLDN = [], ten = ''}) {

    
        const renderTable = () => {
            return QLDN.map((item, index) => {
                return (
                        <tr className={cx('table-container')}>
                            <td className={cx('row', 'row-container')}>{index + 1}</td>
                            <td className={cx('row', 'row-container')}>{item.ten}</td>
                            <td className={cx('row', 'row-container')}>{item.mota}</td>
                            <td className={cx('row', 'row-container')}>{item.trangthai}</td>
                            <FontAwesomeIcon className={cx('icon')} icon={faPen} />
                            <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
                            <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                        </tr>
                );
            })
        }

    return ( 
        <div className={cx('table')}>
                            <div className={cx('tbl-content')}>
                                <tr >
                                    <tr className={cx('table-title')}>
                                        <td className={cx('row')}>STT</td>
                                        <td className={cx('row')}>{ten}</td>
                                        <td className={cx('row')}>MÔ TẢ</td>
                                        <td className={cx('row')}>TRẠNG THÁI</td>
                                    </tr>
                                    {renderTable()}
                                </tr>
                            </div>
                        </div>
);
}

export default RowFour;