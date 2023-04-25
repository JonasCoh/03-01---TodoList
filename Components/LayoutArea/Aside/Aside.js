import { NavLink } from 'react-router-dom';
import './Aside.css';

function Aside() {

    return (

        <aside className='Aside'>
            <nav>
                <NavLink to="/home">Home</NavLink><br />
                <NavLink to="/todo">Todo List</NavLink><br />
                {/* <NavLink to="/users">Users</NavLink><br /> */}
                <NavLink to="/posts">Posts</NavLink><br />
                <NavLink to="/products">Products</NavLink>
            </nav>
        </aside>

    )
}

export default Aside;