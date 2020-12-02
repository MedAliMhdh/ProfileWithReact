import "./App.css";
import ProfilePhoto from "./components/profile/ProfilePhoto";
import Fullname from "./components/profile/FullName";
import Address from "./components/profile/Adress";

function App() {
  return (
    <div className="App">
      <div className="ProfileContainer">
        <ProfilePhoto />
        <div className="rightSide">
          <Fullname />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
