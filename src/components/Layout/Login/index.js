import { BrowserRouter as useNavigate, Route, Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from './Login.module.scss'


import { useState, useHistory } from "react";


const cx = classNames.bind(style)


function LoginPage() {

    // const navigate = useNavigate();

    const [taiKhoan, setTaiKhoan] = useState('')
    const [matKhau, setMatKhau] = useState('')
    const [login, setLogin] = useState(localStorage.getItem('login') || false)
    let navigate = useNavigate();

    const handleChangeTK = (e) => {
        setTaiKhoan(e.target.value)
    };

    const handleChangeMK = (e) => {
        setMatKhau(e.target.value)
    };

    const users = [{ username: 'thong', password: '123456'}]


    const handleSumit = () => {
        const account = users.find((user) => user.username === taiKhoan);
        if(account && account.password === matKhau) {
            console.log('success');
            setLogin(true)
            navigate('/')

        }
        else {
            alert('sai tài khoản hoặc mật khẩu')
        }
    }

    return <div className={cx('wrapper')}>
            <div className={cx('input')}>
                <div className={cx('title')}>Đăng nhập</div>
                <label className={cx('btn')}>
                    <p className={cx('title-btn')}>Tài khoản:</p>
                    <input className={cx('btn-input')} type='text' placeholder="Tên tài khoản" onChange={handleChangeTK}/>
                </label>
                <label className={cx('btn')}>
                    <p className={cx('title-btn','title-password')}>Mật khẩu:</p>
                    <input className={cx('btn-input')} type='password' placeholder="Mật khẩu" onChange={handleChangeMK}/>
                </label>
                <button className={cx('btn-sumit')} onClick={handleSumit}>Đăng nhập</button>
            </div>
            <div className={cx('img')}>
            </div>
        </div>
}

export default LoginPage;