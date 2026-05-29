import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function OptionButton(props) {
    const [isTrue, setIsTrue] = useState(false)
    const navigate = useNavigate()
    console.log('oi')
    console.log(props)

    return (
        <div>
            <button onClick={() => {
                if (props.questionNumber == 6){navigate('/gameover')}
                else {
                    if (props.options == props.answer){
                        setIsTrue(true)
                        
                        let page = `question${props.questionNumber + 1}`
                        
                        const url = `/${page}?score=1`
                        console.log("aqui em baixo")
                        console.log(url)
                        navigate(url)
                    }else {
                         navigate('/gameover')
                     }
                }
                
            }}>
                {props.options}
            </button>
        </div>
    )
}

export default OptionButton