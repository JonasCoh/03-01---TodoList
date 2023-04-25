import axios from 'axios';
import { useEffect, useReducer } from 'react';
import appConfig from '../../../Config/appConfig';
import AuthProvider from '../../../Context/AuthContext/AuthProvider';
import NumContext from '../../../Context/NumContext/NumContext';
import numReducer from '../../../Context/NumContext/NumReducer';
import ProductsContext from '../../../Context/ProductsContext';
import productsReducer from '../../../Context/ProductsReducer';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Layout.css';

function Layout() {

    const [products, setProducts] = useReducer(productsReducer, []);
    const [number, setNumber] = useReducer(numReducer, 2);

    useEffect(() => {
        axios.get(appConfig.products).then(response => setProducts({ type: 'FETCH', payload: response.data.products }))
    }, [])

    const numPlus = () => {
        setNumber({ type: 'PLUS' })
    }

    const numNimus = () => {
        setNumber({ type: 'MINUS' })
    }


    return (
        <AuthProvider>
            <ProductsContext.Provider value={{ products: products, set: setProducts }}>
                <div className='Layout'>

                    <NumContext.Provider value={number}>
                        <Header />
                        <Aside />
                        <Main>
                            <button onClick={numPlus}>Plus + </button>
                            <button onClick={numNimus}>Minus - </button>
                            <button onClick={() => setNumber({ type: 'RESET' })}>Reset</button>
                        </Main>
                        <Footer />
                    </NumContext.Provider>

                </div>
            </ProductsContext.Provider>
        </AuthProvider>
    );

}
export default Layout;