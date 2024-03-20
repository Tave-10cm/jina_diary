import { useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();

    return (
        <div className="Edit">
            <h2>Edit 페이지</h2>
            <button onClick={() => {
                navigate('/home');
            }}>
                HOME으로 가기
            </button>
        </div>
    )
}

export default Edit;