import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appConfig from "../../../Config/appConfig";
import ProductsContext from "../../../Context/ProductsContext";

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { products, set } = useContext(ProductsContext)

    const product = products.find(p => p.id === +id);

    const [title, setTitle] = useState(product?.title)
    const [price, setPrice] = useState(product?.price);

    useEffect(() => {
        if (!product) {
            navigate('/products')
        }
    })

    const saveNewProduct = e => {
        e.preventDefault();

        axios.patch(appConfig.products + product.id, {
            title: title,
            price: price,
        })
            .then(response => set({ type: 'UPDATE', payload: response.data }))
            .catch(err => console.log(err))
            .finally()
    }

    const deleteProduct = e => {
        e.preventDefault();
        axios.delete(appConfig.products + product.id)
            .then(response => {
                set({ type: 'DELETE', payload: product.id });
                navigate('/products')
            })
            .then(console.log(11))
    }



    return (
        <div className="EditProduct">

            <h1>Products</h1>
            <Link to='/products/'>Back</Link>

            <hr />
            <form onSubmit={saveNewProduct}>

                <h3>Edit Product </h3>

                <label>Title</label>
                <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} />

                <br />

                <label>Price</label>
                <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} />

                <br />

                <button> Save </button>

                <button onClick={deleteProduct} style={{ background: "red", marginLeft: '20px' }}> Delete </button>

            </form>
        </div>
    )
}

export default EditProduct;