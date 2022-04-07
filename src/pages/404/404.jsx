import pageNotFound from "../../assets/Page_not_found.png";
import "./404.css";
const PageNotFound = () => {
  return (
    <main className="responsive-img">
      <div className="error-div">
        <h2>Oops! Page not found</h2>
        <img src={pageNotFound} />
      </div>
    </main>
  );
};
export { PageNotFound };
