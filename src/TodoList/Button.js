const Button = (props) => {
  const { buttonName, buttonFunction } = props;
  return <button onClick={buttonFunction}> {buttonName}</button>;
};

export default Button;
