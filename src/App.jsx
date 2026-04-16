
import './App.css'
import Banner from './Components/Banner/Banner'
import MainSection from './Components/Main section/MainSection'
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
      <MainSection></MainSection>
    </div>
  )
}

export default App
