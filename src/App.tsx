import "./App.css";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/login/Login";
import RouteNotFound from "./utils/RouteNotFound";
import System from "./pages/private/system/System";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RouteNotFound>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route
              path="system/*"
              element={
                <ProtectedRoute>
                  <System />
                </ProtectedRoute>
              }
            />
          </RouteNotFound>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
