import { useEffect, useState } from 'react';
import './Clock.css';

function Clock() {


    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        let interId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interId)

    }, []);

    return (
        <div className="Clock">
            {time}
        </div>
    )
}
export default Clock;


