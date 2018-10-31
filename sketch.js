
  function setup() {
    createCanvas(1350, 800);
  var listOfColors = [color('#aabf12'), color('#33ab12'), color('#165512'), color('#fe3fa2'), color('#a345cd')];


  strokeWeight(100);
  for(var i=0;i<listOfColors.length;i++) {
    stroke(listOfColors[i]);
       // stroke(listOfColors[int(random(0, listOfColors.length))]);  //to randomize, comment this line in
    line(0, 0, 0, height);
    translate(100, 0);
  }
}

function draw() {

}
