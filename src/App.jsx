import Header from "./components/Header"
import Summary from "./components/Summary"

function App() {


  return (
    <main className="w-full h-screen  flex flex-col justify-center items-center">
      <figure className="z-0 h-full  w-full absolute blur-sm"><img className="h-screen w-full  object-cover" src="https://wallpaperaccess.com/full/5674818.jpg" alt="" /></figure>
    <Header/>
    <Summary/>
    
    </main>
  )
}

export default App
