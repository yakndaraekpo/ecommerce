import Footer from "./components/Footer";
import Header from "./components/Header";
//import {Container} from "react-bootstrap";
import ProductsListPage from "./pages/ProductsListPage";
import LoginPage from "./pages/LoginPage";
//import { users } from "./users";

//console.log("Footer:", Footer);
//console.log("Header:", Header);
//console.log("LoginPage:", LoginPage);
//console.log("ProductsListPage:", ProductsListPage);

const App = () => {
  const localUser = localStorage.getItem('user')
  const user = JSON.parse(localUser)
  const page = user ? <ProductsListPage /> : <LoginPage />
  return (
    <>
    <Header />
   {page}
    <Footer />
    </>
  );
};

export default App;
