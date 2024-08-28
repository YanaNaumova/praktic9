import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UIInput from "./Input";
import formInfo from "../utils/validations";
import UserProfile from "../components/UserProfile";
import styles from "../styles/RegistrationForm.module.css";

function RegistrationForm() {
  const { loginUser, userData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  function isEmpty(errors) {
    return Object.keys(errors).length === 0;
  }

  function onSubmit(data) {
    loginUser(data);
    reset();
  }

  return (
    <div className={styles.container}>
      {isEmpty(errors) && userData.isRegistered ? (
        <UserProfile />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formStyle}>
          {formInfo.map((field, ind) => {
            return (
              <UIInput
                register={register}
                {...field}
                errors={errors}
                key={ind}
              />
            );
          })}
          <button className={styles.btn}>Registration</button>
        </form>
      )}
    </div>
  );
  //
  //   /* <label htmlFor="login">Login</label>
  //     <input
  //       id="login"
  //       type="text"
  //       {...register("login", {
  //         required: "Поле логин не должно быть пустым",
  //       })}
  //     />
  //     {errors.login && <p>{errors.login.message}</p>}
  //     <label htmlFor="email">Email</label>
  //     <input
  //       id="email"
  //       type="email"
  //       {...register("email", {
  //         required: "Поле email не должно быть пустым",
  //         pattern: {
  //           value: /^\S+@\S+\.\S+$/,
  //           message: "Укажите корректный email",
  //         },
  //       })}
  //     />
  //     {errors.email && <p>{errors.email.message}</p>}
  //     <label htmlFor="password">Password</label>
  //     <input
  //       type="password"
  //       id="password"
  //       {...register("password", {
  //         required: "Поле пароль не должно быть пустым",
  //         minLength: {
  //           value: 6,
  //           message: "Пароль должен быть длиннее 6 символов",
  //         },
  //       })}
  //     />
  //     {errors.password && <p>{errors.password.message}</p>} */
  //
}

export default RegistrationForm;
