import './styles/App.css'

function Locations() {
    const apiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API;

    return (
        <>
            <p>Jerkin It Big Time</p>
            <iframe
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Get+Some+Game,Charlotte+NC`}
                title="Space Needle map"
            />
            <p>Skroikin it bigly</p>
            <iframe
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Cosmic+Hearth,Charlotte+NC`}
                title="Space Needle map"
            />
        </>
    );
}

export default Locations;