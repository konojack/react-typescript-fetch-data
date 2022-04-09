import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';
import { fetchTodos, deleteTodo } from '../actions';
import { Todo } from '../actions';
import { useEffect, useState } from 'react';

export const App = (): JSX.Element => {
  const todos = useSelector((state: StoreState) => state.todos);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect((): void => {
    if (todos.length) {
      setIsLoading(false);
    }
  }, [todos]);

  const onButtonClick = (): void => {
    setIsLoading(true);
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
      {isLoading ? <div>Loading...</div> : <ul>{renderList()}</ul>}
    </div>
  );
};
