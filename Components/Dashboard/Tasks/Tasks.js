import appConfig from '../../../Config/appConfig';
import useFetch from '../../../Services/useFetch';
import Task from '../Task/Task';
import './Tasks.css';

function Tasks() {

    const [tasks, error, loading] = useFetch(appConfig.todos);

    if (error) {
        return <span>Error!!!</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }


    return (
        <div className='Tasks'>
            {tasks.map(tobj => <Task key={tobj.id} data={tobj} />)}
        </div>
    )
}

export default Tasks;