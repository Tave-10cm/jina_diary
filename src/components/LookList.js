import './LookList.css';

const LookList = () => {
    return (
        <div className="LookList">
            <div className="look_date">
                {new Date().toLocaleDateString()}
            </div>
            <div className="look_imgupload">
                사진
            </div>
            <div className="look_intro">
                오늘의 look한 줄 소개
            </div>
        </div>
    )
}

export default LookList;