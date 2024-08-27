import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import RegistrationForm from "./RegistrationForm";

function UserProfile() {
  const { userData, logautUser } = useContext(UserContext);
  return (
    <>
      {userData.isRegistered ? (
        <div>
          <h1>User Profile</h1>
          <p>Login: {userData.login}</p>
          <p>Email:{userData.email}</p>
          <button onClick={logautUser}>Logout</button>
        </div>
      ) : (
        <RegistrationForm />
      )}
    </>
  );
}

export default UserProfile;
