import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import FAQ from "./FAQ";
// import LearnReact from "./LearnReact";
// import UseState from "./LearnReact/LearnUseState";
// import LearnUseEffect from "./LearnReact/learn-useEffect";
// import LearnUseRef from "./LearnReact/learn-useRef";
// import LearnUseMemo from "./LearnReact/learn-useMemo";
import Signin from "./Signin";
import ContactUs from "./ContactUs/index";
import Todo from "./todo/index";
import PDsample1 from "./LearnReact/props-drilling/sample1";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Signin />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        <Route path="/learn-react">
          {/* <Route index element={<LearnReact />} /> */}
          {/* <Route path="useState" element={<UseState />} /> */}

          {/* <Route path="useEffect" element={<LearnUseEffect />} />

          <Route path="useRef" element={<LearnUseRef />} />
          <Route path="useMemo" element={<LearnUseMemo />} /> */}
        </Route>
        <Route path="todo" element={<Todo />} />
        <Route path="pds" element={<PDsample1 />} />
        {/*  */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
