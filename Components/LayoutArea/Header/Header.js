import './Header.css';
import { useContext } from 'react';
// import ProductsContext from '../../../Context/ProductsContext';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Services/useAuth';
import NumContext from '../../../Context/NumContext/NumContext';

function Header() {

    // const { products } = useContext(ProductsContext);

    const num = useContext(NumContext)

    const { user, logoutUser } = useAuth();

    // const rating = products.reduce((max, product) => (product.rating > max.rating) ? product : max, products[0])

    return (
        <header className='Header'>
            <h1>TODO List - {num}</h1>
            <div>
                {/* Rating: {rating?.title}({rating?.rating}) */}
                {/* <img src={logo} alt="logo" /><br /> */}
                {!user &&
                    <>
                        <NavLink to='/register'>Register</NavLink><br />
                        <NavLink to='/login'>Login</NavLink>
                    </>
                }

                {
                    user &&
                    <>
                        Hello: {user?.user?.email}, <span onClick={logoutUser}>Logout</span>
                    </>
                }
            </div>
        </header>
    )
}

export default Header;

