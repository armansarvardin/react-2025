import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    duration: 12, 
    expectedReturn: 5,
  });

  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <Result userInput={userInput} />  
    </>
  )
}

export default App
