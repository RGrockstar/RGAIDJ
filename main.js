song="";
scoreright=0;
scoreleft=0;

leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
song=loadSound("Sunflower.mp3");
}
function setup() {
    canvas = createCanvas(560, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
console.log("Posenet is on")
}
function DG_rock(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}
function draw(){
image(video,0, 0, 560, 450);
fill("#00FF00");
stroke("#008000");
if (scoreleft > 0.2){
circle(leftwristx, leftwristy, 20);
Numlefty=Number(leftwristy);
removeDecimals=floor(Numlefty);
Volume=removeDecimals/500;
document.getElementById("vol").innerHTML="Volume ="+Volume;
song.setVolume(Volume);
}
if(scoreright > 0.2){
circle(rightwristx, rightwristy, 20);
if(rightwristy > 0 && rightwristy <= 100){
document.getElementById("spd").innerHTML="speed=2.5x";
song.rate(2.5);
}
else if(rightwristy > 100 && rightwristy <= 200){
    document.getElementById("spd").innerHTML="speed=2x";
    song.rate(2);
}
else if(rightwristy > 200 && rightwristy <= 300){
    document.getElementById("spd").innerHTML="speed=1.5x";
    song.rate(1.5);
}
else if(rightwristy > 300 && rightwristy <= 400){
    document.getElementById("spd").innerHTML="speed=1x";
    song.rate(1);
}
else if(rightwristy > 400){
    document.getElementById("spd").innerHTML="speed=0.5x";
    song.rate(0.5);
}
}
}
function gotPoses(results){
 if (results.length >0){
    console.log(results);

    scoreleft=results[0].pose.keypoints[9].score;
    scoreright=results[0].pose.keypoints[10].score;
    console.log("Scoreleft=" +scoreleft+"Scoreright=" +scoreright);
  leftwristx=results[0].pose.leftWrist.x;
  leftwristy=results[0].pose.leftWrist.y;
  console.log("leftwristx = "+leftwristx+"leftwristy = "+leftwristy);
  rightwristx=results[0].pose.rightWrist.x;
  rightwristy=results[0].pose.rightWrist.y;
  console.log("rightwristx = "+rightwristx+"rightwristy = "+rightwristy);
 }
}
function DG_rock(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}
