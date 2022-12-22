//SE MODIFICA

//LO HACE ALUMNO
noseX=0;
noseY=0;

//LO HACE ALUMNO
function preload() {
  clown_nose = loadImage('https://i.postimg.cc/pTQXXdwJ/580b57fcd9996e24bc43c3a8.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(570,250);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    //LO HACE ALUMNO
    noseX = results[0].pose.nose.x-60;
    noseY = results[0].pose.nose.y-150;
  }
}

function draw() {
  //LO HACE ALUMNO
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 100, 100);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
