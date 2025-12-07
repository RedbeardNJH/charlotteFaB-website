import './styles/App.css'

function People() {
    return (
        <>
            <h2>The People of FAB CLT</h2>

            <h3>The Judges</h3>

            <div class="frame">
                <div class="left_side">
                    <figure class="people">
                        <h4>Jim VanFleet</h4>
                        <img src="/images/vanfleet.jpg" width="300" alt="(Picture of Jim)" />
                        <ul>
                            <li>Level 2 Judge</li>
                            <li>Discord: bigfleet</li>
                        </ul>
                    </figure>
                </div>
                <div className="left_side judges-text">
                    <p>Our judges help to ensure a fair play experience for everyone as 
                        well as ensuring sportsmen like conduct. The judges are not only responsible 
                        for ensuring the rules of the game are upheld
                        but also run all of the events from weekly armories 
                        to larger Pro Quest and Road to Nationals.</p>
                </div>
                <div class="right_side">
                    <figure class="people">
                        <h4>Ashlyn Slattery</h4>
                        <img src="images/ash_scerve_win.png" width="300" alt="(Picture of Ashlyn)" class="people-pic" />
                        <ul>
                            <li>Level 1 Judge</li>
                            <li>Discord: slatty_v3</li>
                        </ul>
                    </figure>
                </div>
            </div>

            <hr />

            <h3>The Locals</h3>

            <p>The ones you will laugh with and the ones you will one day face against. Our locals always look to bring a fun time and their A-game to any event you may see them in</p>

            <div class="frame">
                <div class="left_side">
                    <figure class="people">
                        <h4>Noah Harden</h4>
                        <img src="/images/noahBigK.jpg" width="300" alt="(Picture of Noah)" />
                    </figure>
                </div>
                <div class="left_side">
                    <figure class="people">
                        <h4>Jacob Kilcrease</h4>
                        <img src="/images/jacob-eater.jpg" width="300" alt="(Picture of Jacob)" />
                    </figure>
                </div>
                <div class="right_side">
                    <figure class="people">
                        <h4>Bryce</h4>
                        <img src="/images/bryce.jpg" width="300" alt="(Picture of Bryce)" />
                    </figure>
                </div>
            </div>
        </>
    );
}

export default People;