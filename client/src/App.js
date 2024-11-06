import { Routes, Route } from "react-router-dom";
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import Login from './components/auth/Login'
import Register from './components/auth/Register';


function App() {
  return (
    <>
      <Header />
      <main>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

    </>

  );
}

export default App;
