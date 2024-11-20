import { Routes, Route } from "react-router-dom";
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import { useState } from "react";
import AuthContext from "./contexts/authContext";


function App() {
  const [auth, setAuth] = useState({});

  const registerSubmitHeandler = (values) => {
    console.log(values);

  }
  return (
    <AuthContext.Provider value={{registerSubmitHeandler}}>
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
    </AuthContext.Provider>
  );
}

export default App;