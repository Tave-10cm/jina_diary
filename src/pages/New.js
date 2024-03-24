import Header from "../components/Header";
import MyButton from "../components/MyButton";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const {onCreate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(),input.content);
        navigate('/',{replace: true});
    };

    return (
        <div className="New">
            <Header
                headText={"새 일기 쓰기"}
                leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;