import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

const MyStore = () => {
    const navigate = useNavigate();
    return (
        <div className="MyStore">
            <Header 
            headText={"일기 저장하기"}
            leftChild={<MyButton text={"< 뒤로가기"} onClick={()=>navigate(-1)}/>}/>
            저장하기 페이지            
        </div>
    )
}

export default MyStore;