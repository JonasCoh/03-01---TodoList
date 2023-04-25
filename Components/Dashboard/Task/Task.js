import { useState } from 'react';
import './Task.css';

function Task(props) {

    const tobj = props.data;
    const [completed, setCompleted] = useState(tobj.completed);

    if (completed) {
        return
    }

    const printTask = (id, e) => {
        console.log(id);
        console.log(e);
    }

    return (
        <div onClick={e => printTask(tobj.id, e)} className='task' key={tobj.id}>
            <big> {tobj.title} </big>
            <span> {completed ? <span>completed</span> : <span className='red'>not completed</span>} </span>
            <button onClick={() => setCompleted(!completed)}>Set {completed && 'not'} Completed</button>
        </div>
    );
}

export default Task