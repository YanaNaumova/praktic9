import styles from "../styles/UIInput.module.css";

function UIInput({
  htmlFor,
  labelTitle,
  id,
  type,
  register,
  name,
  validation,
  errors,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor={htmlFor} className={styles.labelStyle}>
          {labelTitle}
        </label>
        <input
          id={id}
          type={type}
          {...register(name, validation)}
          className={styles.inputStyle}
        />
      </div>
      {errors[name] && (
        <p className={styles.errorMessage}>{errors[name].message}</p>
      )}
    </div>
  );
}

export default UIInput;
