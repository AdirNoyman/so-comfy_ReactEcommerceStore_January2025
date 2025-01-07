/* eslint-disable react/prop-types */
const FormInput = ({label, name, type, defaultValue}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input id={name} type={type} name={name} className="input input-bordered" defaultValue={defaultValue}/>
    </div>
  );
};

export default FormInput;
