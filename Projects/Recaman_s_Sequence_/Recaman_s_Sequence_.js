let numbers = [];
let count = 1;
let sequence = [];
let index = 0;

let arcs = [];

class Arc{
 constructor(start, end, dir){
  this.start = start;
 this.end = end;
 this.dir = dir;
 }
 
 show(){
  let diameter = abs(this.end - this.start);
  let x = (this.end + this.start) / 2;
  stroke(255);
  noFill();
  if (this.dir == 0){
  arc(x, height / 2, diameter, diameter, PI, 0);
  } else {
  arc(x, height / 2, diameter, diameter, 0, PI);

  } 
  
 }
}

function setup() {
    createCanvas(600, 400);
    background(0);
    numbers[index] = true;
    sequence.push(index);
}



function step(){
  let next = index - count;
  if( next < 0 ||numbers[next]){
    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);
  
  let a = new Arc(index, next, count % 2);
  arcs.push(a);
  
  index = next;
  count++;
}

function draw(){
  background(0);
   step();
   
   for(let  a of arcs){
     a.show();
   }
  // console.log(index);
}
