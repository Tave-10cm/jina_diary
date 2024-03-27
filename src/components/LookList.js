import './LookList.css';

const LookList = ({id, createdDate, img, content}) => {
    return (
        <div className="LookList">
            <div className="look_date">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="look_imgupload">
                <img src= {img} />
            </div>
            <div className="look_intro">
                #{content}
            </div>
        </div>
    )
}

export default LookList;