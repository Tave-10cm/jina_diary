import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { onRemove, onUpdate } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiayrItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id));

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            navigate('/', { replace: true });
        }

        setCurDiayrItem(currentDiaryItem);
    }, [params.id, data])

    const onClickDelete = () => {
        if (
            window.confirm("일기를 정말 삭제하시겠습니까?")
        ) {
            onRemove(params.id);
            navigate('/', { replace: true })
        }
    };
    const onSubmit = (input) => {
        if (
            window.confirm("일기를 정말 수정하시겠습니까?")
        ) {
            onUpdate(params.id, input.createdDate.getTime(), input.content);
        }
        navigate('/',{replace:true});
    }

    return (
        <div className="Edit">
            <Header headText={"일기 수정하기"}
                leftChild={<MyButton text={"< 뒤로가기"}
                    onClick={() => navigate(-1)} />}
                rightChild={<MyButton text={"삭제하기"}
                    type={"negative"}
                    onClick={onClickDelete} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    )
}

export default Edit;