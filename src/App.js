import { useState } from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { UserContext } from "./context/UserContext";

// Напишите провайдер контекста, который будет управлять данными пользователя (примеры полей: логин,
//   email) и статусом регистрации (зарегистрирован пользователь или нет).

function App() {
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [isRegistered, setIsRegistered] = useState(false);

  const [userData, setUserData] = useState({
    login: "",
    email: "",
    isRegistered: false,
  });
  //   ● loginUser(data): Эта функция принимает данные пользователя и обновляет
  //   состояния для хранения данных
  // пользователя и статуса его регистрации.
  // ● logoutUser(): Функция обнуляет информацию о пользователе и изменяет статус на "не зарегистрирован".
  function loginUser(data) {
    // setLogin(data);
    // setEmail(data);
    // setIsRegistered(true);
    setUserData({
      login: data.login,
      email: data.email,
      isRegistered: true,
    });
  }

  function logautUser() {
    setUserData({
      ...userData,
      isRegistered: false,
    });
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        logautUser,
        // login,
        // email,
        // isRegistered,
        // setLogin,
        // setEmail,
        // setIsRegistered,
        userData,
        setUserData,
      }}
    >
      <div className="App">
        {!userData.isRegistered && <h1>Welcomen to webseite</h1>}
        <MainComponent />
      </div>
    </UserContext.Provider>
  );
}

export default App;
