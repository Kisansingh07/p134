function setup(){
   video = createCapture(VIDEO) ;
   video.size(560,500);

   canvas =createCanvas(550,550);
   canvas.position(600,150);

   poseNet = ml5.poseNet(video,modelLoded);
   poseNet.on('pose', gotPoses);
}

function draw(){
    background('#808080');
    fill("#FF1493");
    stroke("#FF1493");
    square(noseX,noseY,difference);
}

function modelLoded(){
    console.log('PoseNet Is Initialized!');
}


noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload(){
   
}
function gotPoses (results){
    if(results.length > 0)
    {
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX+"noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.X;
        rightWristX = results[0].pose.rightWrist.X;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}