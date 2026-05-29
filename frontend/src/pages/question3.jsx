import { useState } from "react"
import { useEffect } from "react"
import OptionButton from "../OptionButton"
import { getQuestion } from "../services/api"
import Timer from "../Timer"

function Question3Page(props){


    const [question, setQuestion] = useState('question')
    const [answer, setAnswer] = useState('option')
    const [option1, setOption1] = useState("option1")
    const [option2, setOption2] = useState("option2")
    const [option3, setOption3] = useState("option3")
    const questionNumber = 3

    
    
    useEffect(() => {
        async function fetchQuestion(){
             const data = await getQuestion(questionNumber)
            setQuestion(data.question)
            setAnswer(data.answer)
            setOption1(data.fake_one)
            setOption2(data.fake_two)
            setOption3(data.fake_three)


        
        }
       fetchQuestion()
    }, [])
    
    return (
        <div>
            <Timer/>
            <h1>{questionNumber}. {question}</h1>
            <OptionButton options={option1} answer={answer} questionNumber={questionNumber}/>
            <OptionButton options={option3} answer={answer} questionNumber={questionNumber} />
            <OptionButton options={option2} answer={answer} questionNumber={questionNumber}/>
            <OptionButton options={answer} answer={answer} questionNumber={questionNumber}/>
        </div>
    )
}

export default Question3Page