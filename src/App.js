import logo from "./logo.svg";
import ButtonComponent from "./button_component";
import ImageComponent from "./image_component";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <ButtonComponent buttonText="Bottone 1" buttonColor="red" />
        <ButtonComponent buttonText="Bottone 2" buttonColor="blue" />
      </div>
      <div className="container">
        <ImageComponent animation="App-logo" src={logo} alt="logo" />
        <ImageComponent
          src="https://img.pixers.pics/pho_wat(s3:700/FO/10/61/74/77/700_FO10617477_6ba952d27926291bbc470a9b6fb6bece.jpg,507,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,287,650,jpg)/adesivi-chitarra-fuoco.jpg.jpg"
          alt="chitarra"
        />
      </div>
    </>
  );
}

export default App;
