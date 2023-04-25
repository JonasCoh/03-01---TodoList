// import './TaskCounter.css';

// function TaskCounter() {

//     const taskCounter = 0;

//     if (taskCounter === 0) {
//         return (
//             <div className='TaskCounter'>
//                 <span>הידד!!!</span>
//             </div>
//         )
//     }

//     return (
//         <div className='TaskCounter'>
//             <span>Task Counter: {taskCounter}</span>
//         </div>
//     )
// }

// export default TaskCounter;

// import './TaskCounter.css';

// function TaskCounter() {

//     const taskCounter = 0;

// let msg = <span>Task Counter: {taskCounter}</span>;

//     if (taskCounter === 0) {
//         msg = <span>הידד!!!</span>;
//     }

//     return (
//         <div className='TaskCounter'>
//             {msg}
//         </div>
//     )
// }

// export default TaskCounter;

import './TaskCounter.css';

function TaskCounter() {

    const taskCounter = 20;

    return (
        <div className='TaskCounter'>
            
            {taskCounter > 0 ? <span>Task Counter: {taskCounter}</span> : <span lang='he'>הידד!!!</span> }

            {taskCounter >= 150 && <><br /><span lang='he'>הי יעקב נא להזדרז!!!</span></>}

        </div>
    )
}

export default TaskCounter;