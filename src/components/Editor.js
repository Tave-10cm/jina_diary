import { useSearchParams, useNavigate } from 'react-router-dom';
import './Editor.css';
import MyButton from './MyButton';
import { useState, useEffect } from 'react';


const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        createdDate: new Date(),
        content: "",
    });

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

    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            });
        }
    },[initData])

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => {
            reader.onload = () => {
                resolve();
            };
        });
    }

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)}
                    type='date' />
            </section>
            <section className='img_section'>
                <h4>오늘의 기록</h4>
            </section>
            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder='오늘은 어땠나요?' />
            </section>
            <section className='button_section'>
                <MyButton
                    onClick={() => navigate(-1)}
                    text={"취소하기"}
                    type={"negative"} />
                <MyButton
                    onClick={onClickSubmitButton}
                    text={"작성완료"}
                    type={"positive"} />
            </section>
        </div>
    )
}

export default Editor;