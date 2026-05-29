import QPage from "../QPage"
import Timer from "../Timer"

function Question1Page(){
    const questionN = 1
    return (
        <div className="container">
            <Timer/>
            <QPage questionNumber={questionN}/>
        </div>
    )
}

export default Question1Page