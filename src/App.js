import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import MyMenu from './components/MyMenu';
import { useReducer, useRef, createContext } from 'react';
import LookBook from './pages/LookBook';
import Weather from './pages/Weather';
import NewLook from './pages/NewLook';

const lookData = [
  {
    id: 1,
    createdDate: new Date("2024-03-24").getTime(),
    img:"",
    content: "등교룩",
  },
  {
    id: 2,
    createdDate: new Date("2024-03-23").getTime(),
    img: "",
    content: "편의점 마실 나가는 룩",
  },
  {
    id: 3,
    createdDate: new Date("2024-02-22").getTime(),
    img: "",
    content: "꾸꾸꾸룩",
  },
]

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-03-24").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-03-23").getTime(),
    emotionId: 3,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-02-22").getTime(),
    emotionId: 5,
    content: "3번 일기 내용",
  },
]

// 상태관리를 위한 reducer함수 구현하기
// 인수로는 가장 최근의 state값과 action객체를 받게 된다.
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; //기존의 데이처를 return하게된다.
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "REMOVE": { //삭제하고자하는 일기를 제외한 새로운 배열을 생성한다.
      return state.filter((item) => String(item.id) !== String(action.id));
    }
    case "EDIT": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item);
    }
    default:
      return state;
  }
}
//일기데이터,룩데이터를 공급할 context
export const DiaryStateContext = createContext();
//일기 추가,삭제,수정 함수를 공급할 context
export const DiaryDispatchContext = createContext();

function App() {
  //일기를 관리할 새로운 state
  const [data, dispatch] = useReducer(reducer, mockData);
  //일기 id생성
  const idRef = useRef(3);

  //새로운 일기 추가, 새로운 일기에 관한 날짜, id, content에 관한 전달내용을 바탕으로 새로운 일기 객체를 생성하고 일기배열에 추가해준다 
  const onCreate = (createdDate, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        content,
      },
    })
    //새로운 일기를 추가하는 기능

  }

  //기존 일기 수정
  const onUpdate = (id, createdDate, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id,
        createdDate,
        content,
      }
    })
  }
  //기존 일기 삭제
  const onRemove = (id) => {
    dispatch({
      type: "REMOVE",
      id,
    }
    )
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onUpdate }}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/new' element={<New />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path='/diary/:id' element={<Diary />} />
                <Route path='/lookbook' element={<LookBook />} />
                <Route path='/weather' element={<Weather />} />
                <Route path='/newlook' element={<NewLook/>} />
              </Routes>
            </div>
            <MyMenu />
          </BrowserRouter>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>

  );
}

export default App;
