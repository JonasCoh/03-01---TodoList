import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import ProductsContext from '../../../Context/ProductsContext';
import Clock from '../../Dashboard/Clock/Clock';
import './Footer.css';
import 'react-toastify/dist/ReactToastify.css';


function Footer() {

    const { products } = useContext(ProductsContext)

    return (
        <footer className='Footer'>
            <Clock />
            Products: {products.length}
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </footer>
    )
}

export default Footer;