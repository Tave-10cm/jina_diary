import { useParams } from "react-router-dom";

const Diary = () => {
    const { id } = useParams();
    console.log(id);
    
    return (
        <div className="Diary">
            <h2>Diary 페이지</h2>
        </div>
    )
}

export default Diary;