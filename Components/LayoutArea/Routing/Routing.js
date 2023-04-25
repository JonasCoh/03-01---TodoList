import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Posts from "../../Pages/Posts/Posts";
import Products from "../../Pages/Products/Products";
import Todo from "../../Pages/Todo/Todo";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing() {
    return (

        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route path='/home' element={<Home />} />
            <Route path='/todo' element={<Todo />} />
            {/* <Route path='/users' element={<Users />} /> */}
            <Route path='/posts/*' element={<Posts />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/new' element={<AddProduct />} />
            <Route path='/products/edit/:id' element={<EditProduct />} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>

    )
}
export default Routing;