import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import { Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Routes>
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default Layout;
