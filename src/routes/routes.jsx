import { Route, Routes as Redirect, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Redirect>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Home />} />
        <Route path="/series" element={<Home />} />
      </Redirect>
    </BrowserRouter>
  );
}
