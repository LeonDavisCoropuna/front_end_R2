import { Route, Routes } from "react-router-dom";
interface props {
  children: JSX.Element | JSX.Element[];
}
export default function RouteNotFound({ children }: props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div className="p-3 w-full bg-slate-400">NOT FOUND 404</div>}></Route>
    </Routes>
  );
}
