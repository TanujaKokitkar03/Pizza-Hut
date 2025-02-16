import React from "react";

export default function ContactUs() {
  return (
    <div>
      <h3> Login/Sign Up </h3>

      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h1 className="login"> Login </h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                I accept all the terms of services!
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>

        </div>

        <div className="col-lg-6 col-md-6">

          <h1 className="login"> Sign Up </h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Phone no:
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Address:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                City:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
