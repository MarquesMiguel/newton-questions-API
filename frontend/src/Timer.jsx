import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(15); // Inicia com 15 segundos
    const navigate = useNavigate()

    useEffect(() => {
        if (timeLeft <= 0){
            
            navigate('/gameover')
            return;
        }  // Para o timer quando chega a 0

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1); // Decrementa o tempo
        }, 1000);

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
    }, [timeLeft]);

    return (
        <div >
            <div className='Timer'>
            <h1>{timeLeft}</h1>
            </div>
        </div>
    );
}


export default Timer