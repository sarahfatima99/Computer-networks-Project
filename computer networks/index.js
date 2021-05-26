
var getUserMedia = require('getusermedia')
var filee=3
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

document.getElementById('sendfile').addEventListener('click',function(){


console.log("file added")
const input = document.getElementById('upload')
file=input.files[0]
console.log(file)
filee=1
console.log(filee)
file.arrayBuffer().then(buffer => {
      // Off goes the file!
      console.log(buffer)
      peer.send("file"+buffer);

})
console.log("sentt")
})

peer.on('data', data => {
console.log(data)

  // Convert the file back to Blob
  const file = new Blob([ data ]);

  console.log('Received', file);
  // Download the received file using downloadjs
  require("downloadjs")(file, 'test.txt','text/plain')

  
});



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
    filee=0
    console.log("send button")  
    var yourMessage = document.getElementById('message').value
    document.getElementById('msg').textContent+="you: "+yourMessage+'\n'
   
    peer.send(yourMessage)

    
  })

  peer.on('data', function (data) {
    console.log("yo")
    console.log(filee)
      console.log(data)
    document.getElementById('msg').textContent +="other party: "+ data + '\n'
    
  })



  peer.on('stream', function (stream) {
      console.log("stream")
    var video = document.createElement('video')
    document.body.appendChild(video)

    video.srcObject = stream
    video.play()
  })
})