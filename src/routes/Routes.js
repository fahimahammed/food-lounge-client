import { createBrowserRouter } from "react-router-dom";
import Checkout from "../componets/Checkout/Checkout";
import FoodContainer from "../componets/FoodContainer/FoodContainer";
import FoodDetails from "../componets/FoodContainer/FoodDetails";
import Login from "../componets/Login/Login";
import Register from "../componets/Login/Register";
import Home from "../layout/Home/Home";
import Main from "../layout/Main/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/foods',
                element: <FoodContainer/>,
                loader: ()=> {
                   return fetch('http://localhost:5000/catagory')
                }
            },
            {
                path: '/food-details/:id',
                element: <FoodDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])