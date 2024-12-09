import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col bg-[#232323] text-[#FFF0EB]">
      <Navbar />
      <section className="max-w-7xl mx-auto p-2 min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default App;
