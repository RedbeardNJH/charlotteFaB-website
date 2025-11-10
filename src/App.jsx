import './styles/App.css'

function App() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Trading Card Games are an incredible medium for bringing people together as a community. They are a force so powerful as to transcend the barriers of age, race, religion, gender and even spoken language, through a common language of "playing great games."</p>
      <p>In our wonderful world of breathtaking technology, we believe the need for local communities, forging local friendships, will never be out of date. We are grateful to the Local Game Store (LGS) owners and staff around the world who work hard to provide welcoming environments for local TCG communities to exist.</p>
      <button>Join now!</button>

      <figure>
        <img src="/images/barmery.jpg" alt="barmory" />
        <figcaption>HAVING FUN</figcaption>
        <p>You can compete for promos while expressing your skill in playing, costume making, or judging.  But the whole point is to have some fun!  "Play the game, see the world" was very influential to James White, the founder of Legend Story Studios, and many of our players have.  There's a lot of ways to have fun with Flesh and Blood, and there's no wrong way to get started.  But we're happy you're here with us. </p>
      </figure>

      <figure>
        <figcaption>PLAYING GAMES</figcaption>
        <img src="/images/dont-know.jpg" alt="no clue who" />
        <p>Draft.  Classic Constructed.  Sealed.  Blitz.  Blitz Preconstructed.  Crack, Shuffle, Play.  Living Legend.  Shapeshifter.  Clash.  Commoner.  Ultimate Pit Fight.  Deathmatch Arena.  There are so many formats for the game that you're bound to find something that fits your play style and collection.  If you want to know more about how to play, we're here to help.</p>
      </figure>

      <figure>
        <img src="/images/big-armory.jpg" alt="big" />
        <figcaption>IN THE FLESH AND BLOOD</figcaption>
         <img src="/images/gsg-armory.jpg" alt="get some game" />
        <p>These guys don't look so tough.  Bring it on!</p>
      </figure>

      <figure className="bottom-fig">
        <img src="/images/nats-crew.jpg" alt="nationals" />
        <p>Charlotte players (and Dozr) at the 2021 National Championships</p>
      </figure>
    </>
  );
}

export default App
