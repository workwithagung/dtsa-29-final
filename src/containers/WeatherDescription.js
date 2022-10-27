import WeatherSymbol from "../components/WeatherSymbol";
import WeatherHCard from "../components/WeatherHCard";

const WeatherDescription = ({data}) => {
    return (
        <div className="flex w-full">
            <div className="flex-1 flex pr-4">
                <WeatherSymbol />
            </div>
            <div className="flex-1 pl-4 flex justify-between gap-4 text-blue">
                { [1, 2, 3].map((e) => {
                    return (
                        <WeatherHCard />
                    )
                })}
            </div>
        </div>

    )
}

export default WeatherDescription;