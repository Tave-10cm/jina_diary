import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './NewLook.css';

const NewLook = ({ onCreateLook }) => {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);
    const [lookdate, setLookDate] = useState("");
    const [lookcontent, setLookContent] = useState("");

    const onChangedate = (e) => {
        setLookDate(e.target.value);
    }

    const onChangeContent = (e) => {
        setLookContent(e.target.value);
    }

    const onsubmit = () => {
        onCreateLook(imageSrc, lookcontent);
        navigate('/lookbook');
    }

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

    const getStringedDate = (targetDate) => {
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let date = targetDate.getDate();

        if (month < 10) {
            month = `0${month}`;
        }
        if (date < 10) {
            date = `0${date}`;
        }
        return `${year}-${month}-${date}`;
    }


    return (
        <div className="NewLook">
            <Header headText={"새로운 Look일기 작성하기"}
                leftChild={<MyButton text={"< 뒤로가기"} onClick={() => { navigate(-1) }} />} />
            <section className='look_date'>
                <h4>오늘의 날짜</h4>
                <input
                    name="lookdate"
                    type='date'
                    value={lookdate}
                    onChange={onChangedate} />
            </section>
            <section>
                <h4>오늘의 Look!</h4>
                <img
                    width={'100%'}
                    value={imageSrc}
                    src={imageSrc}
                />
                <input type="file" accept="image/*" onChange={e => onUpload(e)} />
            </section>
            <section className='look_content'>
                <h4>오늘의 Look일기</h4>
                <textarea
                    value={lookcontent}
                    onChange={onChangeContent}
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
                    type={"positive"}
                    onClick={onsubmit} />
            </section>
        </div>
    )
}

export default NewLook;