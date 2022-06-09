import "./Header.css";
import { Link } from "react-router-dom";
import { Nav } from "../../components/nav/nav";

const HeaderSection = () => {
  return (
    <>
      <header>
        <Link to="/signup" className="head-link">
          free delivery for all orders
        </Link>
        <Link to="/signup" className="head-link">
          sign up & get 15% off
        </Link>
        <Link to="/signup" className="head-link">
          quick easy returns on prepaid orders
        </Link>
      </header>
      <Nav />
    </>
  );
};

export { HeaderSection };
