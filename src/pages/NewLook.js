import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import './NewLook.css';

const NewLook = () => {
    const navigate = useNavigate();

    return (
        <div className="NewLook">
            <Header headText={"새로운 Look일기 작성하기"}
            leftChild={<MyButton text={"< 뒤로가기"} onClick={()=>{navigate(-1)}}/>}/>
            <section className='look_date'>
                <h4>오늘의 날짜</h4>
                <input type='date' />
            </section>
            <section>
                <h4>오늘의 Look!</h4>
                <input type="file" accept="image/*" />
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