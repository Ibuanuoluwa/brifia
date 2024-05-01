import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import Terms from "./pages/terms";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
