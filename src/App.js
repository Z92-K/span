import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Entrepreneur from "./screens/Entrepreneur";
import Wallpapers from "./screens/Wallpapers";
import TexturesAndPatterns from "./screens/TexturesAndPatterns";
import Nature from "./screens/Nature";
import BusinessAndWork from "./screens/BusinessAndWork";
import Fashion from "./screens/Fashion";
import Architecture from "./screens/Architecture";
import Experimental from "./screens/Experiemental";
import Renders from "./screens/3DRenders";
import Film from "./screens/Film";

function App() {
  return (
    <>
        <Router>
            <Sidebar/>
            <Routes>
                <Route path='/Entrepreneur' exact element={<Entrepreneur/>} />
                <Route path='/Wallpapers' exact element={<Wallpapers/>} />
                <Route path='/Textures%20&%20Patterns' exact element={<TexturesAndPatterns/>} />
                <Route path='/Nature' exact element={<Nature/>} />
                <Route path='/Architecture' exact element={<Architecture/>} />
                <Route path='/Film' exact element={<Film/>} />
                <Route path='/Fashion' exact element={<Fashion/>} />
                <Route path='/Business%20&%20Work' exact element={<BusinessAndWork/>} />
                <Route path='/Experimental' exact element={<Experimental/>} />
                <Route path='/3D%20Renders' exact element={<Renders/>} />
            </Routes>
        </Router>

    </>
  );
}

export default App;
