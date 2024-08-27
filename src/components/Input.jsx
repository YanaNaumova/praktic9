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
    <div>
      <label htmlFor={htmlFor}>{labelTitle}</label>
      <input id={id} type={type} {...register(name, validation)} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
}

export default UIInput;
