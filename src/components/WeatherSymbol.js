const WeatherSymbol = () => {
    return (
        <div className="flex-1 flex pr-4">
            <div className="flex-1 w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                     stroke="currentColor" className="w-56 h-56">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
                </svg>
            </div>
            <div className="flex-1 flex justify-center content-center align-center flex-col">
                <div className="text-9xl font-light">21&#176;</div>
                <div className="text-2xl">Mostly sunny</div>
            </div>
        </div>
    )
}

export default WeatherSymbol