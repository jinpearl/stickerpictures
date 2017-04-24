 var stamps = []; //array of stamps
 var choice;
 var sticker;

 var myFont;
 var ears;
 var heart;
 var date;
 var angry;
 var bubble;
 var cheeks;
 var crown;
 var sparkle;
 var star;

 var video; //source
 var img; //display
 var pictures = [];
 var x;
 var y;

 var date;

 function setup() {
   createCanvas(640, 960); // make the canvas taller so you can see all the images 
   video = createCapture(VIDEO);
   video.size(320, 240);
   img = createImage(640, 480);
   img.loadPixels();

   stroke(255);
   strokeWeight(1);
   textFont(myFont);
   textSize(30);

   textAlign(CORNER);
   imageMode(CORNER);

   var d = day();
   var m = month();
   var y = year();

   date = y + "/" + m + "/" + d;
   ears = loadImage('elements/earssmall.png');
   heart = loadImage('elements/heartsmall.png');
   angry = loadImage('elements/angry.png');
   bubble = loadImage('elements/bubble.png');
   cheeks = loadImage('elements/cheeks.png');
   crown = loadImage('elements/crown.png');
   sparkle = loadImage('elements/sparkle.png');
   star = loadImage('elements/star.png');
 }

 function preload() {
   myFont = loadFont('elements/neverletgo.ttf');
 }

 // function keyPressed() {
 //   if (keyCode === ENTER) {
 //     setInterval(startCamera, 2000);
 //   }
 // }

 setInterval(startCamera, 3000);

 function startCamera() {
   if (pictures.length >= 4) return;
   img = createImage(640, 480); // on mouse press, make another image

   img.loadPixels(); // load image pixels

   video.loadPixels(); // load video pixels

   //use for loop to copy video pixels to the image's pixels
   for (var i = 0; i < video.pixels.length; i += 4) {
     var r = video.pixels[i];
     var g = video.pixels[i + 1];
     var b = video.pixels[i + 2];
     var a = video.pixels[i + 3];

     img.pixels[i] = r; //RED
     img.pixels[i + 1] = g; //green
     img.pixels[i + 2] = b;
     img.pixels[i + 3] = a;
   }

   img.updatePixels(); //update the image's pixels
   var s = img;
   pictures.push(s); // save the image to the pictures array

 }

function saveToFile() {
  var temp = createGraphics(320, 960);
  temp.background(255);
  temp.noStroke();
  for (var i = 0; i < pictures.length; i++) {
    temp.imageMode(CORNER);
    temp.image(pictures[i], 0, i * 240, 320, 240);
  }
  saveCanvas(temp, "pictures", "jpg");
}x


 function draw() {
   background(255);
   for (var i = 0; i < pictures.length; i++) {
     imageMode(CORNER);
     image(pictures[i], 0, i * 240, 320, 240);
   }


   text(date, 460, 100);
   text('wow!', 450, 150);


   text('s to save', 400, 700);
   text('delete to undo', 400, 750);
   text('0', 400, 100);
   text('1', 400, 150);
   text('2', 400, 200);
   text('3', 400, 300);
   text('4', 400, 400);
   text('5', 400, 500);
   text('6', 500, 400);
   text('7', 500, 500);
   text('8', 400, 600);
   text('9', 500, 600);

   image(heart, 410, 200);
   image(ears, 410, 300);
   image(angry, 410, 400);
   image(bubble, 410, 500);
   image(cheeks, 510, 400);
   image(crown, 510, 500);
   image(sparkle, 410, 600);
   image(star, 510, 600);




   for (var n = 0; n < stamps.length; n++) {
     stamps[n].display();
   }
 }

 function Sticker(x, y, thang) {
   this.x = x;
   this.y = y;
   this.thang = thang;

   this.display = function() {
     if (typeof this.thang === 'string') {
       text(this.thang, this.x, this.y);
     } else if (typeof this.thang === 'object') {
       image(this.thang, this.x, this.y);
     }
   }
 }

 function keyTyped() {
   if (key === '0') {
     choice = date;
   } else if (key === '1') {
     choice = 'wow!';
   } else if (key === '2') {
     choice = heart;
   } else if (key === '3') {
     choice = ears;
   } else if (key === '4') {
     choice = angry;
   } else if (key === '6') {
     choice = cheeks;
   } else if (key === '5') {
     choice = bubble;
   } else if (key === '7') {
     choice = crown;
   } else if (key === '8') {
     choice = sparkle;
   } else if (key === '9') {
     choice = star;
   } else if (key === 's') {
     saveToFile();
   }
 }

 function keyPressed() {
   if (keyCode === BACKSPACE) {
     stamps.pop();
   }
 }

 function mousePressed() {
   var s = new Sticker(mouseX, mouseY, choice);
   stamps.push(s);
 }