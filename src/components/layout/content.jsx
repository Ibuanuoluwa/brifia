import Navbar from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
