import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
            })
          }
          {
            privateRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
