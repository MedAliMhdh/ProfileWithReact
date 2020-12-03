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
            apartmentNuber={22}
            buildingNumber={333}
            streetName=" cité el wahat,"
            city=" Tunis,"
            country=" Tunisia"
            zipCode={1000}
          ></Address>
        </div>
      </div>
    </div>
  );
}

export default App;
