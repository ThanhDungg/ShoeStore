import Sidebar from "../Sidebar";
import { faPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import classNames from "classnames/bind";
import style from './Body.module.scss';
import { NavLink } from "react-router-dom";

const cx = classNames.bind(style)

const QL = [
    {
        to: '/quanlidanhmuc',
        tocreate: '/quanlidanhmuc/create',
        title: 'Quản lí danh mục'
    },
    {
        to: '/quanlinhanhieu',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí nhãn hiệu'
    },
    {
        to: '/quanlisanpham',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí sản phẩm'
    },
    {
        to: '/quanlidonhang',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí đơn hàng'
    },
    {
        to: '/quanlithongbao',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí thông báo'
    },
    {
        to: '/quanlichat',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí chat'
    },
    {
        to: '/quanlibanner',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí banner'
    },
    {
        to: '/quanlinguoidung',
        tocreate: '/quanlinhanhieu/create',
        title: 'Quản lí người dùng'
    },
]




function Body({ title = 'Quan li danh muc', toCreate = '/', isCreate = true, isDelete = true, isCurrentDelete = true, isCbb = false, children }) {

    return ( 
        <div className={cx('container')}>
            <Sidebar items={QL}/>
                    <div className={cx('content-body')}>
                        <div className={cx('content')}>
                            <div className={cx('content-title')}>
                                <div className={cx('title')}>
                                    <h1>{title}</h1>
                                </div>
                                {isCreate && <NavLink className={cx('create-btn')} to={toCreate}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                    <div className={cx('create')}>Create</div>
                                </NavLink>}
                            </div>
                        </div>
                        { isDelete && <div className={cx('header-content')}>
                            <div className={cx('search-delete')}>
                                {isCurrentDelete && <button className={cx('btn-delete')}>Delete</button>}
                                <div className={cx('ip-search')}>
                                        <p className={cx('ip-title')}>Search:</p>
                                        <input className={cx('input')}></input>
                                    </div>
                                {isCbb && <div className={cx('cbb-nhanhieu')}>
                                    <div className={cx('cbb-title')}> NIKE</div>
                                    <FontAwesomeIcon className={cx('cbb-icon')} icon={faCaretDown} />
                                </div>}     
                            </div>
                        </div>}
                        {children}
                    </div>
        </div>
     );
}

export default Body;