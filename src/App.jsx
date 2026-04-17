
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/Main section/MainSection'
import Navbar from './Components/Navbar/Navbar'
import NewNavbar from './Components/Navbar/NewNavbar'
import Stats from './Components/Stats/Stats'
import { Bounce, ToastContainer } from 'react-toastify'


const fetchProducts = async() =>{
  const res = await fetch('/productData.json');
  return res.json();
}

function App() {

  const productsPromise = fetchProducts();

  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NewNavbar selectedProducts={selectedProducts}></NewNavbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      }>
        <MainSection productsPromise={productsPromise} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></MainSection>

      </Suspense>


      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="light"
      transition={Bounce}
      />
    </div>
  )
}

export default App
