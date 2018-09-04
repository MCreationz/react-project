import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
      <div class="col-sm-6 contactform">
        <h2>Contact</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
       <form action="/action_page.php" class="">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd"/>
  </div>
  <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
      </div>
    );
  }
}
export default Contact;