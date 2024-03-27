import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import './LookBook.css';
import LookList from "../components/LookList";

const LookBook = () => {
    const navigate = useNavigate();
    return (
        <div className="LookBook">
            <Header headText={"나의 Look Book🧷"} />
            <div className="look_title">
                <MyButton text={"새로운 Look추가하기"} onClick={() => { navigate('/newlook') }} />
            </div>
            <div className="look_list">
                <LookList />
                <LookList />
                <LookList />
                <LookList />
            </div>
        </div>
    )
}

export default LookBook;