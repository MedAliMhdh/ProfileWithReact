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
          <Fullname name="Mohamed Ali" lastName="Mahdhaoui" />
          <Address
            apartmentNuber="Apartement 42,"
            buildingNumber="149"
            streetName="Boulevard Jean Jaures,"
            city="Clichy,"
          >
            92110
          </Address>
        </div>
      </div>
    </div>
  );
}

export default App;
