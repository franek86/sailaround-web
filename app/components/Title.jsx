const Title = ({ children, addClasses, level }) => {
  const HeadingTags = `h${level || 1}`;
  return <HeadingTags className={addClasses}>{children}</HeadingTags>;
};

export default Title;
