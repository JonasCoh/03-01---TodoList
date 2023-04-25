import { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {

    console.log('Timer Created');

    const timeArr = useState('');
    let time = timeArr[0]; // ''
    let setTime = timeArr[1]; // Functionד

    const [isWork, setIsWork] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            // document.querySelector('.Timer').style.color = 'red';
            window.localStorage.setItem('time', time);
        }, 2000);

    });

    const startWork = () => {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
        setIsWork(true);
    }

    return (
        <div className="Timer">
            {isWork && <span>Working... | </span>}
            <span>Time: {time} </span>

            <br />
            <button onClick={startWork}> Start </button>
        </div>
    )
}
export default Timer;