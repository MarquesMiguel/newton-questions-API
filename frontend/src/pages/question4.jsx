import QPage from "../QPage"
import Timer from "../Timer"

function Question4Page(props){
    const questionN = 4
    return (
        
        <div>
            <Timer/>
            <QPage questionNumber={questionN}/>
        </div>
    )
}

export default Question4Page