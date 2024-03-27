import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './NewLook.css';

const NewLook = () => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }


    return (
        <div className="NewLook">
            <Header headText={"새로운 Look일기 작성하기"}
                leftChild={<MyButton text={"< 뒤로가기"} onClick={() => { navigate(-1) }} />} />
            <section className='look_date'>
                <h4>오늘의 날짜</h4>
                <input type='date' />
            </section>
            <section>
                <h4>오늘의 Look!</h4>
                <img
                    width={'100%'}
                    src={imageSrc}
                />
                <input type="file" accept="image/*" onChange={e => onUpload(e)} />
            </section>
            <section className='look_content'>
                <h4>오늘의 Look일기</h4>
                <textarea
                    name="content"
                    placeholder='오늘의 Look 한 줄 소개하기' />
            </section>
            <section className='look_btn'>
                <MyButton
                    onClick={() => navigate(-1)}
                    text={"취소하기"}
                    type={"negative"} />
                <MyButton
                    text={"작성완료"}
                    type={"positive"} />
            </section>
        </div>
    )
}

export default NewLook;