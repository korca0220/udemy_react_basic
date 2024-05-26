import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTIme={1} />
        <TimerChallenge title="Easy" targetTIme={1} />
        <TimerChallenge title="Easy" targetTIme={1} />
        <TimerChallenge title="Easy" targetTIme={1} />
      </div>
    </>
  );
}

export default App;
