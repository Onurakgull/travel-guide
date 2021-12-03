import Content from "./Content";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>    
       <div className="w-full p-3 flex items-center bg-primary-dark font-bold">
              <img className="w-11 h-11 rounded-full" src="https://pbs.twimg.com/profile_images/943222884973064193/_2u9vkvx_400x400.jpg" alt=""/>
              <h1 className="text-xl mx-4 text-white hover:text-gray-300 transform transition-colors cursor-pointer">
                Travel Guide
              </h1>
      </div>
      <div className="flex">
        <Content/>
      </div>

    </>
    
  );
}

export default App;
