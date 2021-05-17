// // var Peer=require("simple-peer")
// // var peer=new Peer()

// // peer.on('signal',function(data){

// var getusermedia=require("getusermedia")

// var peer=require('simple-peer')

// getusermedia({
//     video:true,
//     audio:false
// },
// function(err,stream){
//     if(err) return console.log(err)

// var Peer=new peer({
// initiator:location.hash==="#init",
// trickle:false,
// stream:stream
// })
// Peer.on('signal',function(data){

//     console.log(data)


//     document.getElementById("yourId").value=JSON.stringify(data)




// })

// document.getElementById("connect").addEventListener('click',function(){

// console.log("button clicked")

// var OtherId=JSON.parse(document.getElementById('otherid').value)

// Peer.signal(OtherId)
    
// }) 


// document.getElementById('send').addEventListener('click',function(){

// console.log('send button was clicked')

// var yourmsg=document.getElementById('message').value
// Peer.send(yourmsg)

// })

// Peer.on('data',function(data){

// console.log(data)
// document.getElementById('message').textContent+=data +"\n"

// })

// }



// )

// function showWebCam(){
    
// const video= document.createElement('video')

// document.body.appendChild(video)

// video.srcObject=stream
// video.play()

// }



var getUserMedia = require('getusermedia')

getUserMedia({ video: true, audio: false }, function (err, stream) {
  if (err) return console.error(err)

  var Peer = require('simple-peer')
  var peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false,
    stream: stream
  })

  peer.on('connect', () => {
    console.log('I am connected now')

  })

  peer.on('signal', function (data) {
    console.log("signal")
    document.getElementById('yourId').value = JSON.stringify(data)
  })

  document.getElementById('connect').addEventListener('click', function () {
      console.log("connect button clicked")
    var otherId = JSON.parse(document.getElementById('otherId').value)
    peer.signal(otherId)
  })

  document.getElementById('send').addEventListener('click', function () {
    console.log("send button")  
    var yourMessage = document.getElementById('message').value
    peer.send(yourMessage)
  })

  peer.on('data', function (data) {
      console.log("data")
    document.getElementById('msg').textContent += data + '\n'
  })

  peer.on('stream', function (stream) {
      console.log("stream")
    var video = document.createElement('video')
    document.body.appendChild(video)

    video.srcObject = stream
    video.play()
  })
})