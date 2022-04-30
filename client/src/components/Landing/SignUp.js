import React from 'react';
import './signUp.css';
function SignUp() {
  return (
    <div id="container">
      <div id="box">
        <br />
        <h1>SIGN UP</h1>
        <form action="/login/create_account" method="Post">
          <div id="input_container">
            <div class="label">
              <label for="name">Name</label>
            </div>
            <input type="text" name="name" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="email">Email</label>
            </div>
            <input type="email" name="email" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="password">Password</label>
            </div>
            <input type="password" name="password" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="confirm_password">Confirm Password</label>
            </div>
            <input type="password" name="confirm_password" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="address">Address</label>
            </div>
            <input type="text" name="address" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="city">City</label>
            </div>
            <input type="text" name="city" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="state">State</label>
            </div>
            <input type="text" name="state" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="country">Country</label>
            </div>
            <input type="text" name="country" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="speciality">Speciality</label>
            </div>
            <input type="text" name="speciality" />
          </div>
          <br />
          <div id="input_container">
            <div class="label">
              <label for="fees">Fees</label>
            </div>
            <input type="number" name="fees" />
          </div>
          <br />

          <br />
          <button type="" submit>SIGNUP</button>
        </form>

        <h3>Already a member ? <a href="/login/sign_in">Log In</a></h3>
        <br />
      </div>
    </div>


  );
}
export default SignUp;