import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
// import Signin from "./Signin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Singin />} /> */}
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<contactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
