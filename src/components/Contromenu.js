const Controlmenu = () => {
    return (
        <div className="Controlmenu">
            <select className="select_control">
                <option>최신순</option>
                <option>오랜된 순</option>
            </select>
            <select className="store_control">
                <option>전체 일기</option>
                <option>저장한 일기</option>
            </select>
        </div>
    )
}

export default Controlmenu;