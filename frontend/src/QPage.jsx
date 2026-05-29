import { useState } from "react"
import { useEffect } from "react"
import OptionButton from "./OptionButton"
import { getQuestion } from "./services/api"

function QPage(props){
    function getRandomInt() {
        return Math.floor(Math.random() * 4);
    }

    const [question, setQuestion] = useState('question')
    const [answer, setAnswer] = useState('option')
    const [option1, setOption1] = useState("option1")
    const [option2, setOption2] = useState("option2")
    const [option3, setOption3] = useState("option3")
    const allOps = [option1,option2,option3,answer]

    
    
    useEffect(() => {
        async function fetchQuestion(){
             const data = await getQuestion(props.questionNumber)
            setQuestion(data.question)
            setAnswer(data.answer)
            setOption1(data.fake_one)
            setOption2(data.fake_two)
            setOption3(data.fake_three)


        
        }
       fetchQuestion()
    }, [props.questionNumber])
    
    return (
        <div>
            <h1>{props.questionNumber}. {question}</h1>
            <div className="">
                <OptionButton options={option1} answer={answer} questionNumber={props.questionNumber}/>
                <OptionButton options={answer} answer={answer} questionNumber={props.questionNumber} />
                <OptionButton options={option2} answer={answer} questionNumber={props.questionNumber}/>
                <OptionButton options={option3} answer={answer} questionNumber={props.questionNumber}/>
            </div>
        </div>
    )
}

export default QPage