import Header from "../components/Header";
import MyButton from "../components/MyButton";


const New = () => {
    return (
        <div className="New">
            <Header 
            headText={"일기 작성하기"}
            leftChild={<MyButton text={"< 뒤로가기"} />}
            rightChild={<MyButton text={"저장하기"} type={"positive"}/>}/>
            <h2>TODAY DATE</h2>
            <input type="date"/>
            <h2>TODAY MOMENT</h2>
            <h2>CONTENT</h2>
            <textarea />
        </div>
    )
}

export default New;