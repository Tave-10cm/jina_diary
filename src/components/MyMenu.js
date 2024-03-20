import { useNavigate } from "react-router-dom";

const MyMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="MyMenu">
            <button onClick={()=>{}}>
                Calendar
            </button>
            <button onClick={()=>{navigate('/')}}>
                Home
            </button>
            <button onClick={()=>{navigate('/new')}}>
                +New Diary
            </button>
        </div>
    )
}

export default MyMenu;