import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
const frozenFoods = ["Shahi Paratha Family Pack","Shahi Plain Paratha","Shahi Paratha Jumbo Pack"]
const mouthFreshner = ["Aas Pas Chocolate Pan Masala","Aas Pas Meetha Pan Masala","Shahi Deluxe","Shahi Deluxe Lite","Shahi Elaichi","Hittt..","Shahi Classic","Shahi Meva","Shahi Supermint","Aas Pas Sweet Sonf"]
const nimco = ["Chewra","Dal Chana","Dal Moong","Dal Moth","Munchy Mix","Salted Peanuts","Savory Mix","Chilli Chips","Karachi Special"]
const snacks = ["Pop Star Champ","Fry-O Sweet N Sour","Fry-O Veggie Dip","KinKorn Cheese","KinKorn Spicy","Pop Star Cheesy Cheese",
"Pop Star Achari Chaska","Pop Star Chatpata Chicken","Wheat-O Chips","Wheat-O Karariyan","Wheat-O Original"]

class Pract extends Component {

  
  
    render() {
      return(
        <div className="row">
          <div className="col-12 col-lg-2">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> {this.props.title}</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="true">Messages</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Settings</a>
</div>
</div>
<div className="col-12 col-lg-10">
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Products data={snacks} /></div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Products data={nimco} /></div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><Products data={mouthFreshner} /></div>
  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Products data={frozenFoods} /></div>
</div> </div>
</div>)
    }
  }

export default Pract
