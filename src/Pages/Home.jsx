import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

 

  return (
    <>
      <Navbar />

      <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="section-overlay"></div>

        <div className="container container2">
          <div className="row">
            <div className="col-lg-12 col-12 mb-5 mb-lg-0">
              <div className="hero-section-text mt-5">
                <h6 >This Our Home Page</h6>

                <h1 className="hero-title  mt-4 mb-4">
                  Welcome <i>{user ? user.email : ""}</i>
                </h1>

               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
