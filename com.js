img = "";
status = "";
objects = [];

function back()
{
    window.location ="index.html";

}


function preload()
{
img = loadImage('Screenshot 2024-05-24 101819.png')

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
text("Monitor", 270, 160);
noFill();
stroke("#FF0000")
rect(270,145,550,200);                                  
                                    
fill("FF0000");                                         
text("Speakers",150, 310);
noFill();
stroke("#FF0000");
rect(150, 300, 800,100);

fill("FF0000");
text("PC",850,520);
noFill();
stroke("#FF0000");
rect(850,500,270,100 );

fill("FF0000");
text("keyBoard",350,400);
noFill();
stroke("#FF0000");
rect(350,390,350,100);
}








function gotResult(error, results)
{
if  (error) {
console.log(error);
}
console.log(results);
objects = results;
}

