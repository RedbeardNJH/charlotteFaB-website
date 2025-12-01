import './styles/App.css'

function Learn_to_Play() {
    return (
        <>
            <h2>Learn to Play</h2>

            <div class="frame">
                <div class="left_side">
                    <iframe width="562" height="382" src="https://www.youtube.com/embed/g12X4OQVyW4" title="The M-n-R Cast: Welcome to Rathe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="right_side">
                    <h3>Why Play Flesh and Blood?</h3>
                    <p>This video is from 2022 World Champion Michael Hamilton and Roger Bodee, who describe how they came to love the game, coming from a background in Magic: The Gathering. They describe similarities and differences, and why they love the game so much.  We hope you'll give it a try as well!</p>
                </div>
            </div>

            <div class="frame">
                <div class="left_side">
                    <h3>How to Learn</h3>
                    <p>One of the best learn to play resources is hosted immediately to the right of this text.  Hit play and let the Professor teach you Flesh and Blood in 15 minutes</p>
                    <ul>
                        <li>The online tutorial allows you to mimic some of the actual physical interactions in the game, like pitching cards, attacking and defending.</li>
                        <li>Felt Table offers a learn to play experience with additional interactions.</li>
                        <li>From there, you may feel ready to pick out a deck and play!</li>
                    </ul>
                </div>
                <div class="right_side">
                    <iframe width="464" height="314" src="https://www.youtube.com/embed/3KFP_ESRz54" title="How To Play Flesh And Blood (TCG) Learn To Play In Less Than 15 minutes!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <hr />
            <h2>Getting Started</h2>

            <div class="frame">
                <div class="left_side">
                    <img src="/images/ira-armory-deck.png" alt="Ira Armory Deck" class="armory-deck" />
                </div>
                <div class="right_side">
                    <h3>Armory Decks</h3>
                    <p>Armory Decks are pre-constructed decks made by LSS the creators of Flesh and Blood. They retail for $40, most are offered at your local game stores. The more recent Armory Decks are both legal in Classic Constructed, the premier competitive format for the game, or Blitz, a shorter format built for new players. If you see a hero you are interested in learning be sure to pick up their armory deck</p>
                </div>
            </div>

            <div class="frame">
                <div class="left_side">
                    <h3>Silver Age</h3>
                    <p>Silver Age (Also known As SAGE) is Flesh and Bloods newest format. This format is designed to be very new player friendly while also allowing for competitive depth. Silver Age is a format that only allows common and rare cards in each deck. This means that decks are very affordable averaging around $15. The format features an extensive ban list and a community voting systems to rotate heros. This ensures that the format is not over run by just a few decks while also allowing for the meta to shift without a full rotation. The format is currently in beta and will officially launch on February 14th. Along side the release of Silver Age LSS will also be offering pre-constructed decks for the format. These decks retail for $20 and are said the be competitively viable right out of the box.</p>
                </div>
                <div class="right_side">
                    <iframe width="615" height="400" src="https://www.youtube.com/embed/VZzqCKTgSdM" title="Introducing Silver Age | Flesh and Blood TCG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="frame">
                <div class="left_side">
                    <img src="/images/bulk-box.jpg" alt="Card bulk box" class="bulk-box" />
                </div>
                <div class="right_side">
                     <h3>Building Your Own Deck?</h3>
                     <p>Are you looking into building your own deck? Websites such as Fabrary and the Official Flesh and Blood website have a collection of decks for you to take insperation from. There are count less deck techs from content creators and competitive plays out their for you to learn about how people make their decks. If you are looking for any cards be sure to ask the locals or judges, you might be surprised about collections some of these people have. Commons, Rares, and Token may be found at your local game store's bulk box, make sure to ask them about it.</p>
                </div>
            </div>

        </>
    );
}

export default Learn_to_Play;