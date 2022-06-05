noseX=0;
noseY=0; var difference = 0; var rightWristX=0; var leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(1120,500);
    canvas = createCanvas(550,550);
    canvas.position(560,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#969A97');
    document.getElementById("size").innerHTML = "Size of the square is : " + difference +  "px";
fill("skyblue");
stroke("lightblue");
textSize(difference);
text("Fonts!",noseX,noseY);

}
function modelLoaded() {
    console.log('Model Loaded!');
}
function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x = " + noseX + " nose y = " + noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("left wrist x = " + leftWristX + " right wrist x = " + rightWristX + " Difference = " + difference);

    }
}
