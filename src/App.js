import logo from "./powered_logo.png";
import "./App.css";
import Title from "./components/Title";
import InfoForm from "./components/InfoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <body className="App-body">
        <InfoForm />
      </body>
    </div>
  );
}

export default App;
