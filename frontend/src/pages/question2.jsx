import QPage from "../QPage"
import Timer from "../Timer"

function Question2Page(){
    const questionN = 2
    return (
        <div>
            <Timer/>
            <QPage questionNumber={questionN}/>
        </div>
    )
}

export default Question2Page