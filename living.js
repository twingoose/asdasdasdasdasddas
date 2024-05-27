function back()
{
    window.location ="index.html";

}

img = "";
status = "";
objects = [];

function back()
{
    window.location ="index.html";

}


function preload()
{
img = loadImage('Screenshot 2024-05-27 114816.png')

}




function setup()
{
canvas = createCanvas(1100,600);
canvas.center();
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
}



function modelLoaded()
{
console.log("Model Loaded!")
status = true;
objectDetecter.detect(video, gotResult)
}





function draw()
{
image(img,0,0,1100,600);

if(status !="") {
        r = random(225);   
        g =  random(225);  
        b =  random(225); 
    objectDetect.detect(video,gotResult);
    for (i = 0; i < objects.length; i++) {
      
        document.getElementById("Status").innerHTML = "Status : Object Decected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;

        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%",objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
         
        }
}

fill("#FF0000");
text("Paintings",350,165);
noFill();
stroke("#FF0000")
rect(350,145,550,130);                                  
                                    
fill("FF0000");                                         
text("Sofa",150, 300);
noFill();
stroke("#FF0000");
rect(150, 280, 800,180);

fill("FF0000");
text("Lamp and Table",900,270);
noFill();
stroke("#FF0000");
rect(900,250,200,200);

fill("FF0000");
text("Table",350,420);
noFill();
stroke("#FF0000");
rect(350,400,350,100);
}








function gotResult(error, results)
{
if  (error) {
console.log(error);
}
console.log(results);
objects = results;
}

