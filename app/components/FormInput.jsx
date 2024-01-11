const FormInput = ({ label, id, type, name, placeholder }) => {
  return (
    <div className="flex flex-col mb-5">
      <label className="text-xs text-zinc-300 font-normal uppercase mb-2" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="px-5 leading-10 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300  placeholder:text-black-200" type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
