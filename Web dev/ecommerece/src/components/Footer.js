import React, { Component } from 'react'
import './styless.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Footer --> */}
<footer class="bg-light text-center text-lg-start">
  {/* <!-- Grid container --> */}
  <div class="container p-1">
    {/* <!--Grid row--> */}
    <div class="row">
      {/* <!--Grid column--> */}
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase futer">Footer Content</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      {/* <!--Grid column-->

      <!--Grid column--> */}
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase futer">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark">Link 1</a>
          </li>
          
        </ul>
      </div>
      {/* <!--Grid column-->

      <!--Grid column--> */}
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0 futer">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-dark">Link 1</a>
          </li>
       
        </ul>
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
            </div>
        )
    }
}

export default Footer
