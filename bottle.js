function preload(){

}
function setup(){
canvas=createCanvas(500,400);
camera=createCapture(VIDEO);
camera.hide();
canvas.center();
}
function draw(){
image(camera,0,0,500,400);

}