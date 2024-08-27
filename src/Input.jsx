import React from "react";

function Input({
  id,
  name,
  label,
  className,
  value,
  error,
  onChange,
  touched,
  onBlur,
  ...rest
}) {
  let borderClass = " border-white";
  if (error && touched) {
    borderClass = " border-red-500";
  }
  return (
    <>
      <div
        className={
          "flex border-solid border-2 w-full rounded-md" +
          (className == null ? "" : className) +
          borderClass
        }
      >
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="grow text-white bg-transparent p-2 placeholder-white outline-none overflow-scroll"
          {...rest}
        />
      </div>
      {touched && error && <p className="text-red-600 mt-0 mb-0">*{error}</p>}
    </>
  );
}

export default Input;
