import logo from '../../assets/logo.svg';
import './top.css';

const Top = () => {
  return (
    <>
      <h1>Top</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
};

export default Top;
