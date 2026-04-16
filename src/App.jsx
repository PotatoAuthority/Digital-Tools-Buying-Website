
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import NewNavbar from './Components/Navbar/NewNavbar'
import Stats from './Components/Stats/Stats'

function App() {

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NewNavbar></NewNavbar>
      <Banner></Banner>
      <Stats></Stats>
    </div>
  )
}

export default App
