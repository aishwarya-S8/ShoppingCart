import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUpCustomer() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const list = [];
    alert("Register Successfully");
    navigate("/login");
  };
  const externalImage =
    "https://img.freepik.com/premium-vector/background-with-colorful-shopping-bags-vector-illustration-sale-discount-concept_653240-59.jpg";

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "770px",
        }}
      >
        <div className="col">
          <div className="card text-bg-dark text-white border-0">
            <div className="card-img-overlay d-flex flex-column text-black">
              <div className="container" style={{ paddingTop: "10%" }}>
                <center>
                  <h1>SignUp</h1>
                </center>
                <br></br>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ marginLeft: 400, marginRight: 400 }}
                >
                  <div class="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{ fontSize: 15, fontWeight: "bold" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      {...register("name")}
                      id="exampleInputEmail1"
                      aria-describedby="name"
                      placeholder="Enter Name*"
                      required
                    />
                    <br></br>
                  </div>
                  <div class="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{ fontSize: 15, fontWeight: "bold" }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      {...register("emailHelp")}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email*"
                      required
                    />{" "}
                  </div>
                  <br></br>
                  <div class="form-group">
                    <label
                      for="exampleInputPassword1"
                      style={{ fontSize: 15, fontWeight: "bold" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      {...register("password")}
                      id="exampleInputPassword1"
                      placeholder="Enter Password*"
                      required
                    />
                  </div>
                  <br></br>
                  <center>
                    <button
                      type="submit"
                      class="btn btn-outline-dark px-4 py-3"
                      style={{ backgroundColor: "yellow", color: "black" }}
                    >
                      Submit
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
