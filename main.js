righthandX=0;
righthandY=0;

function preload(){
    butterfly = loadImage('https://i.postimg.cc/cJ0CNWhB/Butterfly-PNG-3.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function draw() 
{
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //stroke(255,0,0);
    ///circle(righthandX, righthandY, 20);
    image(butterfly, righthandX, righthandY - 40, 40, 40);
}

function take_snapshot()
{
    save('Filterimage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        righthandX = results[0].pose.rightWrist.x;
        righthandY = results[0].pose.rightWrist.y;
        console.log("nose x = " +results[0].pose.rightWrist.x);
        console.log("nose y = " +results[0].pose.rightWrist.y);
    }
}
