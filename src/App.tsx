import "./App.css";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/login/Login";
import RouteNotFound from "./utils/RouteNotFound";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { Suspense } from "react";

// Importa tus componentes que deseas cargar de forma diferida
import System from "./pages/private/system/System";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<div>...Wait</div>}>
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
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
