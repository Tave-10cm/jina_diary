import Header from "../components/Header";
import MyButton from "../components/MyButton";
import Controlmenu from "../components/Contromenu";
import DiaryList from "../components/DiaryList";

const Home = () => {
    return (
        <div className="Home">
            <Header 
            headText={"오늘의 날짜"}
            leftChild={<MyButton text={"<"}/>}
            rightChild={<MyButton text={">"} />}/>
            <Controlmenu />
            <DiaryList />
        </div>
    )
}

export default Home;