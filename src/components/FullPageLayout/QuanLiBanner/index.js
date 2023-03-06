import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";

import classNames from "classnames/bind";
import style from './QuanLiBanner.module.scss'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style)

function Banner() {
    const [Alt1, setAlt1] = useState()
    const [Alt2, setAlt2] = useState()

    const chooseFile1 = (inputFile) => {
        const file = inputFile.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAlt1(file)
    }
    const chooseFile2 = (inputFile) => {
        const file = inputFile.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAlt2(file)
    }
    return ( 
        <div>
            <Header />
            <Body title='QUẢN LÍ BANNER' isCreate={false} isDelete={false}>
                <div className={cx('banner')}>
                    <label className={cx('upload-file1')} for='upload1'>
                        <div className={cx('title-banner')}>Banner1</div>
                        {!Alt1 ? <FontAwesomeIcon className={cx('icon-img')} icon={faImage}/> : <img className={cx('img')} src={Alt1.preview} />}
                        <input id="upload1" className={cx('input-img')} type='file' onChange={chooseFile1}/>
                        <div className={cx('footer-banner')}>Cho phép định dạng *.PNG, *.JPG và *.JPEG(Tối đa 2MB)</div>
                    </label>
                    <label className={cx('upload-file2')} for='upload2'>
                        <div className={cx('title-banner')}>Banner2</div>
                        {!Alt2 ? <FontAwesomeIcon className={cx('icon-img')} icon={faImage}/> : <img className={cx('img')} src={Alt2.preview} />}
                        <input id="upload2" className={cx('input-img')} type='file' onChange={chooseFile2}/>
                        <div className={cx('footer-banner')}>Cho phép định dạng *.PNG, *.JPG và *.JPEG(Tối đa 2MB)</div>
                    </label>
                </div>
                <button className={cx('btn')}>Lưu thông tin</button>
            </Body>
        </div>
     );
}

export default Banner;