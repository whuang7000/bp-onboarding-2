import './App.css';
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <Button
          text='LOG IN'
          buttonType='button-clear'
          textType='button-text-white'
        />
        <Button
          text='CONTINUE'
          buttonType='button-green'
          textType='button-text-white'
        />
        <Button
          text='SKIP'
          buttonType='button-white'
          textType='button-text-grey'
        />
        <Button
          text='ONCE A DAY'
          buttonType='button-clearAlt'
          textType='button-text-green'
        />
      </header>
    </div>
  );
}

export default App;
