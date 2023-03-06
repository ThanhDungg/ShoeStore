import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style)

function Menu({children}) {
    return ( 
        <nav className={cx('list-menu')}>
            {children}
        </nav>
     );
}

Menu.prototype = {
    children: PropTypes.node.isRequired
}

export default Menu;