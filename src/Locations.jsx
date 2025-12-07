import './styles/App.css'

function Locations() {
    const apiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API;

    return (
        <>
            <div>
                <h2>Flesh and Blood Locations in Charlotte</h2>
                <p>Here is the list of locations to play Flesh and Blood in (and close by) Charlotte</p>
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
                    <p>Hello from Get Some Game! We do a weekly armory for the Classic Constructed format, 
                        except for the last Wednesday every month which is going to be Silver Age! 
                        We are beginner friendly with free entry- and on top of that you get a free GEM pack for participating!
                        If you don't have a deck to play with, still feel free to join us when we play Silver Age as we have many 
                        decks for others to borrow when needed.</p>
                    <p><strong>Wednesday</strong>: 7:00 - 10:00pm <br /><strong>Format</strong>: Classic Constructed, Silver Age</p>
                </div>
            </div>
            <br />
            <div class="frame">
                <div class="left_side">
                    <h3>Cosmic Hearth</h3>
                    <p>
                        Here at Cosmic Hearth we do a weekly armory for the Classic Constructed format. 
                        There is a $5 buy in with a pack per win plus a guarenteed GEM pack prizing.
                    </p>
                    <p><strong>Friday</strong>: 6:30 - 9:30pm <br /><strong>Format</strong>: Classic Constructed</p>
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