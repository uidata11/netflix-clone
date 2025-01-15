import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
// import Signin from "./Signin";
// import UseEffect from "./LearnReact/useEfeect";
// import UseRef from "./LearnReact/learn-useRef/index";
// import UseMemo from "./LearnReact/learn-useMemo/index";

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
        <Route path="/learn-react">
          {/* <Route path=/>
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useMemo" element={<UseMemo />} /> */}

          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
