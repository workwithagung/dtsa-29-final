const WeatherHCard = (props) => {
    return (
        <div className="w-full flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow flex-col">
            <h3 className="text-center font-semibold">Day +1</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-24 h-24 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
            </svg>
            <div>
                <p className="text-center text-4xl">21&#176;</p>
                <p className="text-center">Mostly sunny</p>
            </div>
        </div>
    )
}

export default WeatherHCard