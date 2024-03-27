import Header from "../components/Header";

const Weather = () => {
    return (
        <div className="Weather">
            <Header headText={"오늘의 날씨⛅"}/>
            <div className="today_weather">
                오늘의 날씨를 알려주는 정보
            </div>
            <div className="weather_clothes">
                계절별 옷차림 추천
            </div>
        </div>
    )
}

export default Weather;