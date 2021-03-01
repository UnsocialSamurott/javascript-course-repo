var offset = 0;
console.log(offset);
function ValidateForm()
{
    console.log(offset);
    var radioButtons = document.getElementsByName("tz");
    var timezone = radioButtons[0].value;
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            timezone = radioButtons[i].value;
        }
    }
    if(timezone == "cst")
    {
        offset = 2;
    }
    else if(timezone == "est")
    {
        offset = 3;
    }
    else
    {
        offset = 0;
    }
    console.log(offset);
    document.getElementById("result").innerHTML = timezone;
    PrintTime();
}
function PrintTime()
{
    /*console.log(offset);
    var session = "am";
    var date = new Date();
    var hour = date.getHours();
    var hourPrinted = hour + offset;
    if(hour < 12)
    {
        session = "am";
    }
    else
    {
        session = "pm";
        hourPrinted = hourPrinted % 12;
        if(hourPrinted == 0)
        {
            hourPrinted = 12;
        }
    }
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = hourPrinted + ":" + minute + ":" + second + session;
    document.getElementById("clock").innerHTML = time;
    repeater = setTimeout(PrintTime(), 1000);*/
}
PrintTime();