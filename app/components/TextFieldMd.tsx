const TextFieldMd = ({ name, label, tabIndex, required, children }) => {
  let controlGroupDivClass = "form-group";

  //   validationFields.forEach((vf: any) => {
  //     if (vf.getFieldName() === name) {
  //       controlGroupDivClass = "form-group has-error";
  //     }
  //   });

  // capitalize name for label
  // const labelName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="form-group">
      <input
        id={name + "-input"}
        className="input-large"
        type={name === "password" ? "password" : "text"}
        autoComplete="off"
        defaultValue=""
        name={name}
        tabIndex={tabIndex}
        required={required}
      ></input>
      <label className="control-label" htmlFor={name + "-input"}>
        {label}
      </label>
      <i className="bar"></i>
      {children}
    </div>
  );
};

export default TextFieldMd;
