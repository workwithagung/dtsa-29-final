import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import City from "./views/City";

function App() {

  return (
    <div className="App text-white">
      <div className="bg-gradient-to-r to-cyan-500 from-blue-500 p-8 min-h-screen">
        <div className="w-full max-w-screen-lg mx-auto space-y-8">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:city" element={<City />} />
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App
