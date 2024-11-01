import './App.css'
import Layout from './Component/Layout/Layout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Route, Routes } from 'react-router-dom'
import { UserProducts } from './Component/UserProducts/UserProducts.jsx'
import { About } from './Component/About/About.jsx'
import { Home } from './Component/Home/Home.jsx'
import { ProductDetails } from './Component/ProductDetials/ProductDitails.jsx'




function App() {


  return (
    <>
      <Routes>
        <Route path='/'element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Products'element={<UserProducts/>}/>
        <Route path='/Products/:id'  element={<ProductDetails />  } />
        <Route path='/about' element={<About/>}/>
        
        </Route>
      </Routes>
    </>
  )
}

export default App
