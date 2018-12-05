var slider;
var john;
function setup() {
    createCanvas(1350, 760);
    background('white')
    slider = createSlider(0, 255, 30);
      slider.position(7, 620);
      slider.style('width', '80px');
      colorMode(HSB);
  john = createSlider(0, 360, 60, 40);
  john.position(7, 670);
  john.style('width', '80px');
  keyPressed();
}

function draw() {
paint();
border();
makeBigger();
changeColors();
}
function paint(){
  if (mouseX < 1350 && mouseY < 600 && mouseIsPressed){
     var val = slider.value();
     var jj = john.value();
    noStroke();
    fill(jj,100, 100, 1);
    ellipse(mouseX, mouseY, val, val);
    return false;

  }
}
function border(){
  noFill();
  strokeWeight(10);
  rect(0,0,1350,600);
}
function makeBigger(){

  strokeWeight(10);
  rect(0,600,100,50);

}
function changeColors(){

  strokeWeight(10);
  rect(0,650,100,50);
}

function keyPressed(){
  if (keyCode === 83){
  saveCanvas("my art","png");
}
  return false;
}
function makeCircle(){

}
