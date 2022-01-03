satatus="";

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function wild() {
  wildfire = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "status : detecting objects";
  wildanimal= document.getElementById("text").value;

}

function modelLoaded() {
    console.log("model is loaded");
    satatus=true;
}

function draw() {
    image(video,0,0,300,300);
}