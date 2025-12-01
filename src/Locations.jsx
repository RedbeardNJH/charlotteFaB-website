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
                <div class="left_side">
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
                <div class="right_side">
                    <h3>Get Some Game</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A rerum necessitatibus laboriosam eveniet, ex veritatis dolores error fugiat deserunt amet labore magnam iusto iste corporis unde distinctio similique? Repellat, fugiat.</p>
                    <p><strong>Wednesday</strong>: 6:30 - 10:00pm <br /><strong>Format</strong>: Classic Constructed, Silver Age</p>
                </div>
            </div>
            <br />
            <div class="frame">
                <div class="left_side">
                    <h3>Cosmic Hearth</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptate a neque inventore sed quidem autem eius molestiae fugit, tempora natus similique quia at vel excepturi saepe id. Laborum, sed.</p>
                    <p><strong>Friday</strong>: 6:30 - 10:00pm <br /><strong>Format</strong>: Classic Constructed</p>
                </div>
                <div class="right_side">
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
                </div>
            </div>
        </>
    );
}

export default Locations;