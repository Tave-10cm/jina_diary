import MyButton from "./MyButton";

const DiaryItem = () => {
    return (
        <div className="DiaryItem">
            <div className="diary_img">
                <img src={"https://img.freepik.com/free-photo/close-up-portrait-on-beautiful-cat_23-2149214373.jpg"} />
            </div>
            <div className="diary_wrapper">
                <div className="diary_date">
                    오늘날짜
                </div>
                <div className="diary_content">
                    오늘의 일기
                </div>
            </div>
            <div className="diary_btn">
                <MyButton text={"삭제하기"} type={"negative"}/>
            </div>
        </div>
    )
}

export default DiaryItem;