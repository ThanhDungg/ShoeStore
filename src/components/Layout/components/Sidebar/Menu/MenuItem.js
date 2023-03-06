import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style)

function MenuItem({title, to}) {
    return ( 
        <NavLink className={(nav) => nav.isActive ? cx('activeStyle') : cx('menu-item')} to={to}>
            <span className={cx('content')}>{title}</span>
        </NavLink>
     );
}

MenuItem.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default MenuItem;