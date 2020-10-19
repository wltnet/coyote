import React, { useState } from 'react';
import Text from "./components/Text";
import Input from "./components/Input";
import { INPUT_STATUS } from "./util/inputStatus";
import { saveTextSuccess } from "./util/mockPromise";
import './App.css';

const inputField = {
  label: "helloInput",
  name: "helloInput",
}

const App = () => {
  const [text, setText] = useState("Hello World");
  const [inputText, setInputText] = useState(text);
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState();

  const udpateText = async (inputValue) => {
    setEdit(false);

    // No need to save if there is no change.
    if (text === inputValue) return;

    const prevText = text;

    setStatus(INPUT_STATUS.LOADING);
    setText(inputValue);

    // There is 50:50 chance success rate
    try {
      await saveTextSuccess(500, inputValue);
      setStatus(INPUT_STATUS.SUCCESS);
    } catch (error) {
      setStatus(INPUT_STATUS.ERROR);
      setInputText(prevText);
      setText(prevText);
    }

    setTimeout(() => { setStatus(INPUT_STATUS.SAVED); }, 2000);
  }

  const handleClick = () => {
    setEdit(true);
  }

  const handleBlur = (ev) => {
    udpateText(ev.target.value)
  }

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      udpateText(ev.target.value)
    }
  }

  const handleChange = (ev) => {
    setInputText(ev.target.value);
  }

  return (
    <div className="App">
      <div className="Wrapper">
        {edit ? 
          <Input
            inputField={inputField}
            value={inputText}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          /> : 
          <Text
            text={text}
            handleClick={handleClick}
            status={status}
          />}
      </div>
    </div>
  );
}

export default App;
