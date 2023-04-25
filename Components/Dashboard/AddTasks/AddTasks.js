import './AddTasks.css';

function AddTasks() {

    const addNewTask = args => {
        console.log(args);
        console.log('New Task');
    }

    return (
        <div className='AddTasks'>
            <h2>AddTasks</h2>
            <button onClick={addNewTask}>Add</button>
        </div>
    )
}

export default AddTasks;