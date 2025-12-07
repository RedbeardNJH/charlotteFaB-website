import './styles/App.css'

function Seasons_Winners() {
    return(
        <>
        <div>
            <h2>Seasons Winners:</h2>
            <p>This page is to celebrate all the locals who won recent events!</p>
        </div>
        <hr />
        <div>
            <h4 className="IndividualName">Matt W</h4>
        </div>
        <div className="frame">
            <div className="left_side">
                <img src="/images/gravy-bones-shipwrecked-looter__13710.jpg" width="310" alt="Gravy Bones" />
            </div>
            <div className="left_side">
                <p>Matt W won this seasons Pro Quest at Get Some Game!
                     He sailed his way through the 6 rounds of swiss and top 8 with <strong>Gravy Bones, Shipwreked Looter</strong> and got a 
                     hearty first place!</p>
            </div>
            <div className="right_side">
                <img src="images\Dzv7Gziw_400x400.jpg" width="250" alt="Matt W" />
            </div>
        </div>

        <p>Theese people don't look so tough! Why don't you <a href='/Learn_to_Play'>learn to play</a> and <a href='/Join_Us'>join us!</a></p>
        </>
    );
}

export default Seasons_Winners;