import Properties from './pages/Properties';
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import Header from "./components/Navbar/Header";
function App() {
  return (
    
    <SSRProvider>
    <Header/>
    <Properties/>
    </SSRProvider>
    
  )
  
  
  
}

export default App;
