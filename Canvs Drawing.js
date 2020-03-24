
var drawing=[];
var currentPath=[];
var isdrawing=false;

function setup()
{
    canvas=createCanvas(600,600);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

    
    
    initial=createInput('Set strokeWeight');
button=createButton('SET');
    button.mousePressed(changeweight);

    filling=createInput('Set Color')
    button2=createButton('SET');
    button2.mousePressed(changeColor);
    

} 


function draw()
{
    background(0);

    if(isdrawing===true)
    {
        var point={
            x:mouseX,
            y:mouseY
        }
        currentPath.push(point);
    }

    
    //stroke(255);
    //strokeWeight(changeweight);
    noFill();
    for(i=0;i<drawing.length;i++)
    {
        var point=drawing[i];
       // console.log(point);
        beginShape();
        for(j=0;j<point.length;j++)
        {
        vertex(point[j].x,point[j].y);
        }
        endShape();

    }
    
}

function startPath()
{
    isdrawing=true;
    currentPath=[];
    drawing.push(currentPath);
}

function endPath()
{
    isdrawing=false;

}

function changeweight()
{
    strokeWeight(initial.value());
}

function changeColor()
{
    stroke(filling.value());

}