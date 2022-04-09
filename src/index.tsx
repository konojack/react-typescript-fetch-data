import { useState } from 'react';
import ReactDOM from 'react-dom';

const App: React.FC<{ color?: string }> = ({ color }) => {
  const [counter, setCounter] = useState<number>(0);

  const onIncrement = (): void => {
    setCounter((prevState: number) => prevState + 1);
  };

  const onDecrement = (): void => {
    setCounter((prevState: number) => prevState - 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
};

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
