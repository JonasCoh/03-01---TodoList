import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import appConfig from "../../../Config/appConfig";
import ProductsContext from "../../../Context/ProductsContext";
import { addProduct } from "../../../Context/ProductsReducer";

function AddProduct() {

    const { set } = useContext(ProductsContext)

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0);

    const saveNewProduct = e => {
        e.preventDefault();

        axios.post(appConfig.products, {
            title: title,
            price: price,
            rating: 4.97
        })
            .then(response => set(addProduct(response.data)))
            .catch(err => console.log(err))
            .finally()
    }



    return (
        <div className="AddProduct">

            <h1>Products</h1>
            <Link to='/products/'>Back</Link>

            <hr />
            <form onSubmit={saveNewProduct}>

                <h3>Add New Product </h3>

                <label>Title</label>
                <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} />

                <br />

                <label>Price</label>
                <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />

                <br />

                <button> Save </button>

            </form>
        </div>
    )
}

export default AddProduct;