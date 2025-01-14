import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import OpenColor from "open-color";
// children 을 중괄호 안에서 가져오는 방법은 props drilling 을 사용한 방법. react스러운 방법.
// rrd => <Outlet/>
const index = () => {
  return (
    <>
      <Header />
      <main
        className="bg-gray-900 text-gray-100 h-screen"
        style={{
          backgroundColor: OpenColor.gray[9],
          color: OpenColor.gray[0],
          paddingTop: 60,
          height: "100vh",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default index;
