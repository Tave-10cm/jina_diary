import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import Calendar from './pages/Calendar';
import MyButton from './components/MyButton';
import MyMenu from './components/MyMenu';
import MyStore from './pages/MyStore';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/store' element={<MyStore />} />
          </Routes>
        </div>
        <MyMenu />
      </BrowserRouter>
    </>

  );
}

export default App;
