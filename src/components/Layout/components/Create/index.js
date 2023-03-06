import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import style from './Create.module.scss'

const cx = classNames.bind(style)

function Create({isPicture = true}) {

    const [Alt, setAlt] = useState()

    const chooseFile = (inputFile) => {
        const file = inputFile.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAlt(file)
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('tensanpham')}>Tên sản phẩm</div>
            <input className={cx('nhaptensanpham')} placeholder='Tên sản phẩm'/>

            <div className={cx('mota')}>Mô tả</div>
            <input className={cx('nhapmota')} placeholder='Mô tả'/>

            {isPicture && <div className={cx('picture')}>
                <div className={cx('hinhanh')}>Hình ảnh</div>
                <label className={cx('upload-file')} for='upload'>
                    {!Alt ? <FontAwesomeIcon className={cx('icon-img')} icon={faImage}/> : <img className={cx('img')} src={Alt.preview} />}
                    <input id="upload" className={cx('input-img')} type='file' onChange={chooseFile}/>
                </label>
            </div>}
            <div className={cx('btns')}>
                <button className={cx('btn' ,'btn-huy')}>Hủy</button>
                <button className={cx('btn' ,'btn-luu')}>Lưu</button>
            </div>
        </div>
     );
}

export default Create;