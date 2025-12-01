import './styles/App.css'
import './styles/Locations.css'

function Locations() {
    const apiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API;

    return (
        <>
            <div>
                <h2>Flesh and Blood Locations in Charlotte</h2>
                <p>Here is the list of locations to play Flesh and Blood in North Carolina</p>
                <p>Last updated: 11/30/2025</p>
            </div>
            <div class="frame">
                <div>
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
                </div>
                <div>
                    <h3>Get Some Game</h3>
                </div>
            </div>
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