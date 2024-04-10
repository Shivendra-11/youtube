import Head from "./components/Head";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Head/>
      
      
          <Routes>
           
            <Route path="/" element={<Body />} />
            <Route path="watch" element={<Watchpage />} />
          
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
