import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Welcome() {
  const externalImage =
    "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1682359128~exp=1682359728~hmac=dd69c1930e53bbf5f7a914b27957879be11d89fef185a593f017e5304d0677b1";
  return (
    <>
      <div
        style={{
          padding: 20,
          backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "770px",
        }}
      >
        <nav className="mainMenu">
          <ul className="menuOptions">
            <div className="card text-bg-dark text-white border-0">
              <div className="card-img-overlay d-flex flex-column">
                <div classNameName="container">
                  <center>
                    {" "}
                    <h5 className="card-title display-3 text-black fw-bolder mb-0">
                      WELCOME
                    </h5>
                  </center>
                </div>

                <NavLink
                  className="btn btn-outline-dark px-4 py-2 "
                  style={{
                    width: 500,
                    marginTop: "13%",
                    border: "bold",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn btn-outline-dark px-4 py-2"
                  style={{
                    width: 500,
                    marginTop: "10%",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  to="/signup"
                >
                  Signup
                </NavLink>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Welcome;
