import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';
import { fetchTodos, deleteTodo } from '../actions';
import { Todo } from '../actions';

export const App = (): JSX.Element => {
  const todos = useSelector((state: StoreState) => state.todos);
  const dispatch = useDispatch();

  const onButtonClick = (): void => {
    dispatch(fetchTodos());
  };

  const deleteTodoHandler = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <li onClick={deleteTodoHandler.bind(null, todo.id)} key={todo.id}>
          {todo.title}
        </li>
      );
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};
