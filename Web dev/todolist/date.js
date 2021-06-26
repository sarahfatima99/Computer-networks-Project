



module.exports.getDate= function (){

const today= new Date();
currentday=today.getDay();

var day="";

var weekday
const  options={
    weekday:"long",
    day :"numeric",
    month:"long"
};
return today.toLocaleDateString("en-US",options);


}