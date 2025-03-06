import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import './App.css'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './page/Home/home.jsx';
import CheckSkillEx1 from './page/Ex_1/ex1.jsx';
import CheckSkillEx2 from './page/Ex_2/ex2.jsx';
import CheckSkillEx3 from './page/Ex_3/ex3.jsx';
import CheckSkillEx4 from './page/Ex_4/ex4.jsx';
import CheckSkillEx5 from './page/Ex_5/ex5.jsx';
import Todo from './page/Ex_5/todo.jsx';

function App() {
  

  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<CheckSkillEx1 />} />
          <Route path="/ex2" element={<CheckSkillEx2 />} />
          <Route path="/ex3" element={<CheckSkillEx3 />} />
          <Route path="/ex4" element={<CheckSkillEx4 />} />
          <Route path="/ex5" element={<CheckSkillEx5 />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
