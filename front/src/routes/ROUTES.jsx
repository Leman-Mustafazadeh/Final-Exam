import Contact from "../components/Contact";
import Food from "../components/Food";
import OurMenu from "../components/OurMenu";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";
import AddPage from "../pages/AddPage";
import DetailMenu from "../pages/DetailMenu";
import Home from "../pages/Home";
import PulseRouter from "../pages/PulseRouter";
import WishlistPage from "../pages/WishlistPage";

export const ROUTES = [{
    path:"/",
    element:<PulseRouter/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"welcome",
            element:<Welcome/>
        },
        {
            path:"ourmenu",
            element:<OurMenu/>
        },
        {
            path:"ourservices",
            element:<OurServices/>
        },
        {
            path:"food",
            element:<Food/>
        },
        {
            path:"contact",
            element:<Contact/>
        },
        {
            path:"testimonials",
            element:<Testimonials/>
        },
        {
            path:"detailmenu/:id",
            element:<DetailMenu/>
        },{
            path:"wishlistpage",
            element:<WishlistPage/>
        },
        {
            path:"addpage",
            element:<AddPage/>
        }
    ]
}]