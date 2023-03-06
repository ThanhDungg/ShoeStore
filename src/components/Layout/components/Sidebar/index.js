import { faPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";



import classNames from 'classnames/bind';
import style from './Sidebar.module.scss'
import Menu, {MenuItem} from './Menu'


const cx = classNames.bind(style)

function Sidebar({items = [], isCreate = true}) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                // <div className={cx('content')} onClick={handleClick(item.id)} key={index}>{item.title}</div>
                <div className={cx('container')}>
                    <div className={cx('sidebar')}>
                        <MenuItem title={item.title} to={item.to} />
                    </div>
                    {/* <div className={cx('title')}>
                        <div className={cx('content')}>
                                <div className={cx('content-title')}>
                                    <div className={cx('title')}>
                                        <h1>{item.title}</h1>
                                    </div>
                                    {isCreate && <NavLink className={cx('create-btn')} to={item.tocreate}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                        <div className={cx('create')}>Create</div>
                                    </NavLink>}
                                </div>
                        </div>
                    </div> */}
                </div>
            )
        })
    }

    return ( 
        <div className={cx('wrapper')}>
                <Menu>
                    {renderItem()}
                </Menu>
        </div>
     );
}

export default Sidebar;