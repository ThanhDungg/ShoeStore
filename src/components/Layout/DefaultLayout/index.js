import classNames from "classnames/bind";
import LoginPage from "../Login";
import style from './DefaultLayout.module.scss'


const cx = classNames.bind(style)



function DefaultLayout() {
    return ( 
            <div className={cx('wrapper')}>
                <LoginPage />
            </div>
     );
}

export default DefaultLayout;