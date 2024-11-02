export default function TravelCards(props) {
    const country = props.item.country.toUpperCase();
    return (
        <div className="card--cont">
            <div className="travelCards">
                <img className="travel--image" 
                    src={`/images/${props.item.image}`} alt={props.item.image}></img>
                <section className="card--content">
                    <header className="card--header">
                        <img className="travel--navigate" src="/images/navigate.svg" alt="navigate-icon"></img>
                        <h6 className="card--country">{country}</h6>
                        <span>
                            <a className="maps--link" href={props.item.mapUrl}
                                rel="noopener noreferrer" target="_blank">
                                View on Google Maps
                            </a>
                        </span>    
                    </header>
                    <h1 className="card--place">{props.item.place}</h1>
                    <h4 className="card--date">{props.item.travelDates}</h4>
                    <p className="card--summary">{props.item.summary}</p>
                </section>
            </div>
            <hr className="card--separator" />
        </div>
    )
}