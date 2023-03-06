import style from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style)

function Header() {
    return ( 
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('title')}>
                    <NavLink className={cx('content-title')} to='/'>
                        <h2 className={cx('content-title')}> BANANA SHOP</h2>
                    </NavLink>
                </div>

                <div className={cx('person')}>
                    <div className={cx('name')}>Thông</div>
                    <FontAwesomeIcon icon={faCaretDown} className={cx('icon')}/>
                </div>
            </header>
        </div>
     );
}

export default Header;