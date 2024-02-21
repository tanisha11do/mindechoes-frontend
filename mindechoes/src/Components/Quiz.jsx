import React,{useState} from 'react'
import Navbar from './Navbar'
import './Quiz.css'
export default function Quiz() {
  const questions = [{
    questionText:'1. Do you have a family history of mental illness?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
    ],
  },
  {
    questionText:'2. Have you sought treatment for a mental health condition?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
    ],
  },
  {
    questionText:'3. If you have a mental health condition, do you feel that it interferes with your work?',
    answerOptions: [ 
      { answerText:'Sometimes' },
      { answerText:'Never' },
      { answerText:'Rarely' },
      { answerText:'Often' },
    ],
  },
  {
    questionText:'4. Is your work primarily related to a tech company/organization?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
    ],
  },
  {
    questionText:'5. Is your anonymity protected if you choose to take advantage of mental health or substance abuse treatment?',
    answerOptions: [ 
      { answerText:"Don't know" },
      { answerText:'Yes' },
      { answerText:'No' },
    ],
  },
  {
    questionText:'6. Do you think that discussing a mental health issue with your family would have negative consequences?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
      { answerText:'Maybe' },
    ],
  },
  {
    questionText:'7. Do you think that discussing a physical health issue with your family would have negative consequences?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
      { answerText:'Maybe' },
    ],
  },
  {
    questionText:'8. Would you be willing to discuss a mental health issue with your coworkers?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
      { answerText:'Some of them' },
    ],
  },
  {
    questionText:'9. Have you heard of or observed negative consequences among your friends/family with mental health conditions?',
    answerOptions: [ 
      { answerText:'Yes' },
      { answerText:'No' },
    ],
  },
];

const [currentQuestion, setCurrentQuestion] = useState(0);

const handleAnswerButtonClick = () => {
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    alert("Test completed!")
  }
}
  return (
    <>
    <Navbar></Navbar>
    <h1>We hope you are doing well :D</h1>
    <div className='container2'>
        <h2>{questions[currentQuestion].questionText}</h2>
        <ul>
            {questions[currentQuestion].answerOptions.map((answerOption)=>(
              <li onClick={handleAnswerButtonClick}>{answerOption.answerText}</li>
            ))}
        </ul>
        <div className='index'><span>{currentQuestion + 1}</span> / {questions.length} Questions</div>
    </div>
    </>
    
  )
}
