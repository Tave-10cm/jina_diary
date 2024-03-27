import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import './LookBook.css';
import LookList from "../components/LookList";

const LookBook = ({ lookdata }) => {
    const navigate = useNavigate();
    return (
        <div className="LookBook">
            <Header headText={"나의 Look Book🧷"} />

            <div className="look_title">
                <div className="search_bar">
                    <input placeholder="검색어를 입력하세요" />
                    <MyButton text={"검색"} type={"negative"} />
                </div>
                <MyButton text={"새로운 Look추가하기"} onClick={() => { navigate('/newlook') }} />
            </div>
            <div className="scroll_section">
                <div className="look_list">
                    {/* it은 diaryList의 하나하나의 요소가 들어오게 된다(하나의 객체이다.) */}
                    {lookdata.map((it) => (
                        <div>
                            <LookList {...it} key={it.id} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default LookBook;