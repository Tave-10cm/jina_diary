import Diary from "../pages/Diary";
import DiaryItem from "./DiaryItem";
import './DiaryList.css';
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
    const navigate = useNavigate();

    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedDate = () => {
        //정렬된 새로운 배열을 반환한다.
        return data.toSorted((a, b) => {
            if (sortType === 'oldest') {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        })
    }

    const sortedData = getSortedDate();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오랜된 순</option>
                </select>
                <MyButton text={"새 일기 쓰기"} onClick={() => navigate("/new")} type={"else"} />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList;