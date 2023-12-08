import { useState } from 'react'
import './App.css'
import Fortune from "./Fortune"

function App() {

  const [getAnswer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const [submitShake, setSubmitShake] = useState(false)
  const [showFortune, setShowFortune] = useState(false);


  const answers = ["yes", "maybe", "no", "its likely", "its unlikely", "ask again later"]

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }
    let randomIndex = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomIndex];
    setAnswer(randomAnswer);
    setSubmitShake(true)

    setShowFortune(false);


    setTimeout(() => {
      setShowFortune(true);
    }, 500);
  }

  function handleChange(e) {
    setQuestion(e.target.value)
  }

  function refresh() {
    window.location.reload(false)
  }

  return (
    <>
      {submitShake
        && <Fortune getAnswer={getAnswer}
          submitShake={submitShake}
          showFortune={showFortune} />}

      <div className={`ball ${submitShake ? "shake" : "black--ball"}`} >

        <div className="fortune">
        <div className="fortune-inner">8</div>
        </div>
         
      </div>

      <form onSubmit={handleFormSubmit} >
        <label>
          Enter your question:
          <input
            placeholder="Will I get married?"
            className="question"
            type="text"
            name="question"
            value={question}
            onChange={handleChange}


          />
        </label>

        <input
          type="submit"
          value="Submit"
          disabled={submitShake}
        />

      </form>
      <button onClick={refresh}>Refresh</button>
    </>
  )
}

export default App
