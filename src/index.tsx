import ReactDOM from 'react-dom';

const App: React.FC<{ color?: string }> = ({ color }) => {
  return <div>{`Hi There ${color}!`}</div>;
};

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
