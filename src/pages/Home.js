import Header from "../components/Header";
import MyButton from "../components/MyButton";

const Home = () => {
    return (
        <div className="Home">
            <Header 
            headText={"오늘의 날짜"}
            leftChild={<MyButton text={"<"}/>}
            rightChild={<MyButton text={">"} />}/>
            <h2>Home 페이지</h2>
        </div>
    )
}

export default Home;