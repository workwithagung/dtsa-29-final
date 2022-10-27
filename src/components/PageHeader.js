
const PageHeader = ({city}) => {
    return (
        <div>
            <h1 className="text-6xl font-semibold">{city}</h1>
            <h2 className="text-xl">{ (new Date()).toUTCString() }</h2>
        </div>
    )
}

export default PageHeader