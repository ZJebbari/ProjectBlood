import { Link, useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1); // Navigates back to the previous page
  };
  return (
    // <div
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ height: "100vh" }}
    // >
    //   <div className="text-center">
    //     <span className="display-1 d-block">404</span>
    //     <div className="mb-4 lead">Oops! We can't seem to find the page</div>
    //     <Link to="/" className="btn btn-link">
    //       Back to home
    //     </Link>
    //   </div>
    // </div>
    <section
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>Oops! We can't seem to find the page</p>
                <Link to="#" onClick={goBackHandler} className="link_404">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NotFoundPage };
