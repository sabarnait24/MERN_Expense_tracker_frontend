// import logo from './logo.svg';
import "./App.css";
import Charts from "./components/Charts";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <div className="bg-slate-50 text-black">
          <div className="grid md:grid-cols-2 gap-4">
            <Charts></Charts>
            <Forms></Forms>
          </div>
         
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
