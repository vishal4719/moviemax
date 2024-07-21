import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer} from "./components"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "flex flex-col min-h-screen justify-between dark:bg-darkbg">
      
      <Header />
      <AllRoutes />
      <Footer />
    </div>
    </div>
  );
}

export default App;
