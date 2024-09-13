const TodoItem = (props) => {
  const { item } = props;
  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
