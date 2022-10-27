import PageHeader from "./components/PageHeader";
import WeatherDescription from "./containers/WeatherDescription";

function App() {

  return (
    <div className="App text-white">
      <div className="bg-gradient-to-r to-cyan-500 from-blue-500 p-8 min-h-screen">
        <div className="w-full max-w-screen-lg mx-auto space-y-8">
          <PageHeader city="Jakarta" ></PageHeader>
          <WeatherDescription></WeatherDescription>
          <div className="w-full bg-blue-700/50 rounded-xl px-6 py-2 backdrop-blur shadow-md flex justify-between items-center">
            <span className="text-xl">Bandung</span>
            <div className="text-center items-center flex flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
              </svg>
              <span>Mostly sunny</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">4 km/h</span>
              <span>wind</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">21&#176;</span>
              <span>celcius</span>
            </div>
          </div>
          <div className="w-full bg-blue-700/50 rounded-xl px-6 py-2 backdrop-blur shadow-md flex justify-between items-center">
            <span className="text-xl">Bandung</span>
            <div className="text-center items-center flex flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
              </svg>
              <span>Mostly sunny</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">4 km/h</span>
              <span>wind</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">21&#176;</span>
              <span>celcius</span>
            </div>
          </div>
          <div className="w-full bg-blue-700/50 rounded-xl px-6 py-2 backdrop-blur shadow-md flex justify-between items-center">
            <span className="text-xl">Bandung</span>
            <div className="text-center items-center flex flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
              </svg>
              <span>Mostly sunny</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">4 km/h</span>
              <span>wind</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">21&#176;</span>
              <span>celcius</span>
            </div>
          </div>
          <div className="w-full bg-blue-700/50 rounded-xl px-6 py-2 backdrop-blur shadow-md flex justify-between items-center">
            <span className="text-xl">Bandung</span>
            <div className="text-center items-center flex flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
              </svg>
              <span>Mostly sunny</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">4 km/h</span>
              <span>wind</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">21&#176;</span>
              <span>celcius</span>
            </div>
          </div>
          <div className="w-full bg-blue-700/50 rounded-xl px-6 py-2 backdrop-blur shadow-md flex justify-between items-center">
            <span className="text-xl">Bandung</span>
            <div className="text-center items-center flex flex-col justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
              </svg>
              <span>Mostly sunny</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">4 km/h</span>
              <span>wind</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl">21&#176;</span>
              <span>celcius</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
