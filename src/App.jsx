import React from 'react';
import FoodLists from "./components/FoodLists";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://wallpaperaccess.com/full/5674818.jpg')"}}>
      <div className="min-h-screen bg-black bg-opacity-50 backdrop-blur-sm ">
        <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center  w-full max-w-6xl">
          <Header />
          <Summary />
          <FoodLists />
        </div>
      </div>
    </div>
  );
}

export default App;