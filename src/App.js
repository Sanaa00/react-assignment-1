import "./App.css";
import Container from "./component/Container";
import Navbar from "./component/Navbar";
import HomeCard from "./component/HomeCard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <HomeCard />
      </Container>
    </div>
  );
}

export default App;
