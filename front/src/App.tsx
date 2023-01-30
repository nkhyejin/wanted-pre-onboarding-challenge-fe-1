import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/header';
import Login from './pages/Login';
import Register from './pages/Register';
import TodoList from './pages/TodoList';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/todo" element={<TodoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
