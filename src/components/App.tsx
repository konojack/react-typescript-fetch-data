import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';
import { fetchTodos } from '../actions';
import { Todo } from '../actions';

export const App = (): JSX.Element => {
  const todos = useSelector((state: StoreState) => state.todos);
  const dispatch = useDispatch();

  const onButtonClick = (): void => {
    dispatch(fetchTodos());
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};
