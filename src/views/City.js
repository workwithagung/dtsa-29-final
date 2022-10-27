import PageHeader from "../components/PageHeader";
import WeatherSymbol from "../components/WeatherSymbol";
import {Link} from "react-router-dom";

const City = () => {
    return (
        <div className="space-y-4">
            <div class="flex w-full gap-4">
                <div className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow">
                    <PageHeader city="Jakarta" />
                </div>
                <div className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow">
                    <WeatherSymbol />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <Link to="/" className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                    </svg>
                </Link>
                <div className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow flex flex-col text-center">
                    <span className="text-6xl">4 <span className="text-base">km/h</span></span>
                    <span>wind</span>
                </div>
                <div className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow flex flex-col">
                    <h3 className="text-center font-semibold">Day +1</h3>
                    <div>
                        <p className="text-center text-6xl">21&#176;</p>
                        <p className="text-center">Mostly sunny</p>
                    </div>
                </div>
                <div className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow flex flex-col">
                    <h3 className="text-center font-semibold">Day +1</h3>
                    <div>
                        <p className="text-center text-6xl">21&#176;</p>
                        <p className="text-center">Mostly sunny</p>
                    </div>
                </div>
                <div className="flex-1 bg-white/10 p-4 rounded-xl backdrop-blur items-center justify-center flex text-center hover:drop-shadow flex flex-col">
                    <h3 className="text-center font-semibold">Day +1</h3>
                    <div>
                        <p className="text-center text-6xl">21&#176;</p>
                        <p className="text-center">Mostly sunny</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default City