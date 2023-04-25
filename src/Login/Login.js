import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { signup, setsignUp } = useState([]);
  const { register, handleSubmit } = useForm();
  const { login, handleClick } = useNavigate();
  const onSubmit = (data) => {
    const list = [];
    alert("register successfully");
  };

  const ProductPage = () => {
    navigate("/dashboard");
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
        <div>
          <div>
            <div>
              <div style={{ paddingTop: "10%" }}>
                <center>
                  {" "}
                  <h1 color="black">Login</h1>
                </center>
                <br></br>
                <form
                  onSubmit={ProductPage}
                  style={{
                    margin: 20,
                    marginLeft: 400,
                    padding: 20,
                    marginRight: 400,
                  }}
                >
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
                      {...register("email")}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email*"
                      required
                    />
                  </div>
                  <br></br>
                  <div class="form-group">
                    <label
                      for="exampleInputPassword1"
                      style={{ fontSize: 15, fontWeight: "bold" }}
                    >
                      {" "}
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

                  <center>
                    <button
                      type="submit"
                      style={{
                        outline: 0,
                        border: 0,
                        backgroundColor: "yellow",
                        padding: 13,
                        borderRadius: 5,
                        margin: 10,
                        paddingLeft: 25,
                        paddingRight: 25,
                        marginTop: 40,
                      }}
                    >
                      Login
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
