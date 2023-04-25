import AddTasks from '../../Dashboard/AddTasks/AddTasks';
import Tasks from '../../Dashboard/Tasks/Tasks';

function Todo() {
    return (
        <div className="Todo">

            {/* Lists */}
            <Tasks />

            {/* Events */}
            <AddTasks />
        </div>
    )
}
export default Todo;