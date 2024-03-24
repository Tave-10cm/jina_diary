import { useState, useContext } from "react";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";


const getMonthlyData = (pivotDate, data) => {
    //이번달의 시작되는 시간
    const beginTime = new Date(pivotDate.getFullYear(),pivotDate.getMonth(),1,0,0,0).getTime();
    const endTime = new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1,0,23,59,59).getTime();
    return data.filter((item)=> beginTime <= item.createdDate && item.createdDate <= endTime)
} 

const Home = () => {
    const data = useContext(DiaryStateContext);

    //날짜 state 자바스크립트는 월을 0부터 한다.
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate,data);

    //날짜를 1달 뒤로 보낸다.
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    //날짜를 1달 앞으로 보낸다.
    const onDecreaseMonth = ({data}) => { 
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return (
        <div className="Home">
            <Header
                headText={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<MyButton text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<MyButton text={">"} onClick={onIncreaseMonth} />} />
            <DiaryList data={monthlyData}/>
        </div>
    )
}

export default Home;