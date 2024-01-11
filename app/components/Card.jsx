const Card = ({ children, variation }) => {
  return <article className={variation}>{children}</article>;
};

export default Card;
