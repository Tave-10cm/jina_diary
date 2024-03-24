import { useNavigate } from "react-router-dom";

const MyMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="MyMenu">
            <button onClick={()=>{navigate('/lookbook')}}>
                LOOK BOOK
            </button>
            <button onClick={()=>{navigate('/')}}>
                Home
            </button>
            <button onClick={()=>{navigate('/weather')}}>
                WEATHER
            </button>
        </div>
    )
}

export default MyMenu;