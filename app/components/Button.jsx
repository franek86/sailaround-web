const Button = ({ children, type, classVariation }) => {
  return (
    <button type={type} className={classVariation}>
      {children}
    </button>
  );
};

export default Button;
