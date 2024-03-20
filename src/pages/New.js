import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

const New = () => {
    const navigate = useNavigate();

    return (
        <div className="New">
            <Header
                headText={"일기 작성하기"}
                leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
                rightChild={<MyButton text={"저장하기"} type={"positive"} />} />
            <div>
                <section>
                    <h2>TODAY DATE</h2>
                    <div className="new_date">
                        <input type="date" />
                    </div>
                </section>
            </div>
            <div>
                <section>
                    <h2>TODAY MOMENT</h2>
                </section>
            </div>
            <div>
                <section>
                    <h2>CONTENT</h2>
                    <div className="new_text">
                        <textarea />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default New;