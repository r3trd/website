var i=0; // index

var string = "Welcome to Entrepreneurship Development Cell|-- The Official ECell of NIT Durgapur --"

var speedForward = 100, //Typing Speed
    speedBetweenLines = 1000, //Wait between first and second lines
    isParagraph = false;

TypeEffect("type")

function TypeEffect(id)
{
    var element = $("#" + id),
    eHeader = element.children("h1"); 
    eParagraph = element.children("p");
  
    if (i < string.length) 
    {
        if (string.charAt(i) == "|") 
        {
            isParagraph = true;
            eHeader.removeClass("cursor");
            eParagraph.addClass("cursor");
            i++;
            setTimeout(function(){ TypeEffect(id); }, speedBetweenLines);
        }
        else 
        {
            if (!isParagraph) 
            {
              eHeader.text(eHeader.text() + string.charAt(i));
            } 
            else 
            {
              eParagraph.text(eParagraph.text() + string.charAt(i));
            }
            i++;
            setTimeout(function(){ TypeEffect(id); }, speedForward);
        }
    }
}