function setup() {
    video=createCapture(VIDEO);
    video.size(600,500);

    canvas=createCanvas(600,500);
    canvas.position(660,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if(results.length >0){
        console.log(results);
    }
}

function modelLoaded() {
console.log("model is loaded");


}

function draw() {
    background("grey");
}