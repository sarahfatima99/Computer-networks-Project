/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Counter from './Counter.js'
import './styless.css'
import picture from './headphone.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Products extends Component {
    render() {
        return (
<div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
{this.props.data.map((item,idx)=>{

return(

  <div class="col-lg-3 col-md-4 col-sm-6">
  <div class="card mb-4 shadow-sm">

    <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
    <div class="card-body" style={{paddingBottom:'0px'}}>
      <p class="card-text" style={{paddingBottom:'0px'}}><strong>{item}</strong></p>  
      <hr class="Hr"/>
      <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
       
      <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
      <Counter/>
        
        </div>
       
      </div>
      <button class="btn  btn-primary">Add to cart</button>
  </div>
</div>
  
)

}


)}

        {/* <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card mb-4 shadow-sm">
     
            <img class="bd-placeholder-img card-img-top" style={{width:'100%', height:'225px'}}  src={picture}></img>   
            <div class="card-body" style={{paddingBottom:'0px'}}>
              <p class="card-text"><strong>Headphones</strong></p>  
              <hr class="Hr"/>
              <div class="mt-1" style={{justifyContent: 'space-around', display: 'flex'}}><div>
               
              <h4 class="mt-2 pr-2" style={{color: 'rgb(29, 165, 232)', fontSize: '18px'}}>$15.00</h4></div>
              <Counter/>
                
                </div>
               
              </div>
              <button class="btn  btn-primary">Add to cart</button>
          </div>
        </div> */}
       </div>
    </div>
  </div>

        )
    }
}

export default Products
