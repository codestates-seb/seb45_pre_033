import React, { useEffect, useState }from 'react';
import './App.css';
import QuestionsListPage from './pages/QuestionsListPage';
import Header from './components/Header';
import Qusetion from './components/Question';


function App() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  
  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput)
  };

  
  return (
    <>
    <Header questions={questions} handleChange={handleChange} setUserInput={setUserInput} userInput={userInput}
    setFilteredQuestions={setFilteredQuestions} filteredQuestions={filteredQuestions}/>
    <QuestionsListPage questions={filteredQuestions.length > 0 ? filteredQuestions : questions}
    setQuestions={setQuestions}/>
    </>
  );
}

export default App;
