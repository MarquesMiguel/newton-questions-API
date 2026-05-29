import QPage from "../QPage"
import Timer from "../Timer"

function Question5Page(props){
    const questionN = 5
    return (
        
        <div>
            <Timer/>
            <QPage questionNumber={questionN}/>
        </div>
    )
}

export default Question5Page