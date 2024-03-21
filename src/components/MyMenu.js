import { useNavigate } from "react-router-dom";

const MyMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="MyMenu">
            <button onClick={()=>{navigate('/calendar')}}>
                Calendar
            </button>
            <button onClick={()=>{navigate('/')}}>
                Home
            </button>
            <button onClick={()=>{navigate('/new')}}>
                +New Diary
            </button>
            <button onClick={()=>{navigate('/store')}}>
                store
            </button>
        </div>
    )
}

export default MyMenu;