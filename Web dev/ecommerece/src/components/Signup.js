import React, { Component } from 'react'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Signup extends Component {
    render() {
        return (

<div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>


        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
        <div class="form-group">
		<div class="row">
           <div class="col"> <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
           </div>
           <div class="col">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
            </div>
        </div>        
        </div>

        <div class="form-group">
        <textarea name="address" placeholder="Address" rows="3" cols="50"></textarea>
         </div>
         <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="first_name" placeholder="Country" required="required"/></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="City" required="required"/></div>
			</div>        	
        </div>
        
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a>  <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" style={{backgroundColor:'blue'}}>Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <a href="#">Sign in</a></div>
</div>
        )
    }
}


export default Signup;  