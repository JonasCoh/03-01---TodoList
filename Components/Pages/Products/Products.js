import './Products.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../../../Context/ProductsContext";
import useTitle from '../../../Services/useTitle';

function Products() {

    useTitle('Products');

    const { products } = useContext(ProductsContext);

    return (
        <div className="Products">

            <h1>Products</h1>
            <Link to='/products/new'>Add Product</Link>

            <hr />
            {products.map(pro => <div className="productCard" key={pro.id}> {pro.images && <img width={50} src={pro.images[0]} alt='product' />}<span><Link to={'/products/edit/' + pro.id}>{pro.title}</Link>- {pro.price}</span></div>)}
        </div>
    )
}
export default Products;