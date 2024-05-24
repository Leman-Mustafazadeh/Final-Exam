import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from './routes/ROUTES.jsx';
import ContextMenu from './context/ContextMenu.jsx';
function App() {
  const [count, setCount] = useState(0)
const routera = createBrowserRouter(ROUTES)
  return (
   <>
   <ContextMenu>
   <RouterProvider router={routera}/>

   </ContextMenu>
   </>
  )
}

export default App
