import { useNavigate } from "react-router-dom"

function YouLostPage(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>Você Perdeu, recomece do zero.</h1>
            <button onClick={() => {
                navigate('/')
            }}>Recomeçar</button>
        </div>
    )
}

export default YouLostPage