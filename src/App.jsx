
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/Main section/MainSection'
import Navbar from './Components/Navbar/Navbar'
import NewNavbar from './Components/Navbar/NewNavbar'
import Stats from './Components/Stats/Stats'


const fetchProducts = async() =>{
  const res = await fetch('/productData.json');
  return res.json();
}

function App() {

  const productsPromise = fetchProducts();
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NewNavbar></NewNavbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      }>
        <MainSection productsPromise={productsPromise}></MainSection>

      </Suspense>
    </div>
  )
}

export default App
