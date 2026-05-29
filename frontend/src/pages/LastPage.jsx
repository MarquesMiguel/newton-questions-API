import { useNavigate } from "react-router-dom"

function LastPage(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>Você ganhou! Obrigado por jogar.</h1>
            <button onClick={() => {
                navigate('/')
            }}>Reiniciar Quiz</button>
            <button onClick={() => {
                window.location.href ='https://contribuições-cientificas.my.canva.site/newton-quiz'
            }}>Inicio</button>
        </div>
    )
}

export default LastPage