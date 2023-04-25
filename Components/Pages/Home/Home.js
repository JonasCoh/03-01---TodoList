import Welcome from '../../Dashboard/Welcome/Welcome';
import TaskCounter from '../../Dashboard/TaskCounter/TaskCounter';
import useTitle from '../../../Services/useTitle';


function Home() {

    useTitle('Home');

    return (
        <div className="Home">

            {/* Interpolation */}
            <Welcome />

            {/* Conditional Rendering */}
            <TaskCounter />

            {/* Class Component  */}
            {/* <ClockEx title="The Title" /> */}

        </div>
    )
}
export default Home;