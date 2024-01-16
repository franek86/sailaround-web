const Button = ({ children, type, classVariation }) => {
  return (
    <button type={type} className={classVariation}>
      {children}
    </button>
  );
};

const IconBtn = ({ name, type, icon }) => {
  return (
    <button className="flex items-center bg-blue-400 text-white px-3 py-2 me-3 rounded-md hover:bg-blue-500" type={type}>
      <div className="rounded-full bg-white me-2">{icon}</div>
      <div className="text-md">{name}</div>
    </button>
  );
};

export { Button, IconBtn };
