import PageHeader from "../components/PageHeader";
import WeatherDescription from "../containers/WeatherDescription";
import WeatherVCard from "../components/WeatherVCard";

const Home = () => {
    return (
        <>
            <PageHeader city="Jakarta"></PageHeader>
            <WeatherDescription></WeatherDescription>
            {[1, 2, 3, 4, 5].map(() => {
                return (<WeatherVCard />)
            })}
        </>
    )
}

export default Home;