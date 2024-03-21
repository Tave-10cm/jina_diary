import Header from "../components/Header";
import MyButton from "../components/MyButton";
import React from "react";


const Calendar = () => {
    return (
        <div className="Calendar">
            <Header
                headText={"3월 달력"}
                leftChild={<MyButton text={"<"} />}
                rightChild={<MyButton text={">"} />} />
            캘린더 페이지
        </div>
    )
}

export default Calendar;
