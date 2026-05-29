import { useState } from "react"
import { useEffect } from "react"
import OptionButton from "../OptionButton"
import { getQuestion } from "../services/api"
import { DiApple } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import Timer from "../Timer"

function Question6Page(props){
    const [question, setQuestion] = useState('question')
    const [answer, setAnswer] = useState('option')
    const [option1, setOption1] = useState("option1")
    const [option2, setOption2] = useState("option2")
    const [option3, setOption3] = useState("option3")
    const navigate = useNavigate()

    
    useEffect(() => {
        async function fetchQuestion(){
             const data = await getQuestion(6)
            setQuestion(data.question)
            setAnswer(data.answer)
            setOption1(data.fake_one)
            setOption2(data.fake_two)
            setOption3(data.fake_three)
            console.log(data)


        
        }
       fetchQuestion()
    }, [props.questionNumber])
    
    return (
        <div className="container">
            <Timer/>
            <h1><a href="/congratulations"><DiApple /></a>{question}</h1>
            <div className="OptionButtons">
                <div>
                    <button onClick={() => {
                        navigate('/gameover')
                    }}>{option1}</button>
                </div>
                <div>
                    <button onClick={() => {
                        navigate('/gameover')
                    }}>{option3}</button>
                </div>
                <div onClick={() => {
                        navigate('/gameover')
                    }}>
                    <button onClick={() => {
                        navigate('/gameover')
                    }}>{option2}</button>
                </div>
            </div>
            

        </div>
    )
}

export default Question6Page