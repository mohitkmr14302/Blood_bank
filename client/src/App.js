import Header from './component/Header';
import Dashboard from './component/Home/Dashboard';
import Login from './component/Home/Login';
import Profile from './component/Home/Profile';
import Bank from './component/Home/Bank';
import Banner from './component/Home/Banner.jsx';
import Register from './component/Home/Register';
import Updateview from './component/Home/Updateview'
import { BrowserRouter,HashRouter, Routes, Route } from 'react-router-dom'
import { createContext, useReducer } from 'react';
import { initialstate, reducer } from '../src/reducer/usereducer';
export const usercontext = createContext();



function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <HashRouter>
      <usercontext.Provider value={{ state, dispatch }}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Banner />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/bank' element={<Bank />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/update/:id' element={<Updateview />} />
        </Routes>


      </usercontext.Provider>
    </HashRouter>
  );
}

export default App;
