var x = 1;
function myFunction()
{
    if (x == 1) {
        document.querySelector("#main-pic").src="tech2.jpg";
        x++;
    }
    else if (x == 2)
    {
        document.querySelector("#main-pic").src="tech.jpg";
        x--;
    }
}

var t = setInterval(myFunction, 3000);
