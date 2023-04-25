

import Routing from '../Routing/Routing';
import './Main.css';

function Main({ children }) {


    return (
        <main className='Main'>
            {children}
            <Routing />
        </main>
    )
}

export default Main;

