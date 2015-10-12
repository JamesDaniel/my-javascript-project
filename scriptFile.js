// JavaScript Document  
    var total;
    var description = new Array("Property ownership: ",
                                "Type of property: ",
                                "Age of property: ",
                                "House alarm: ",
                                "Smoke Detectors: ",
                                "Location: ",
                                "Claims free: ",
                                "Buildings cover: ",
                                "Contents cover: ",
                                "Claims Excess: ");
    var values = new Array(10);  
    var text="";
    
    function setValues(){
        values[0] = "-1";            
        values[1] = "-2";            
        values[2] = "-3";            
        values[3] = "-4";            
        values[4] = "-5";            
        values[5] = "-6";            
        values[6] = "-7";            
        values[7] = "-8";            
        values[8] = "-9";            
        values[9] = "-10";  
    }
    setValues();  
    
    function q1(value){
    values[0] = parseInt(value,10);
    if (values[0] != -1)
        {
        document.getElementById("question1").style.color="#000000";
        }
    }
    function q2(value){
    values[1] = parseInt(value,10);    
    if (values[1] != -2)
        {
        document.getElementById("question2").style.color="#000000";
        }
    }
    function q3(value){  
    values[2] = parseInt(value,10);          
    if (values[2] != -3)
        {
        document.getElementById("question3").style.color="#000000";
        }
    }
    function q4(value){
    values[3] = parseInt(value,10);
    if (values[3] != -4)
        {
        document.getElementById("question4").style.color="#000000";
        }
    }
    function q5(value){
    values[4] = parseInt(value,10);
    if (values[4] != -5)
        {
        document.getElementById("question5").style.color="#000000";
        }
    }
    function q6(value){
    values[5] = parseInt(value,10);
    if (values[5] != -6)
        {
        document.getElementById("question6").style.color="#000000";
        }  
    }
    function q7(value){
    values[6] = parseInt(value,10);
    if (values[6] != -7)
        {
        document.getElementById("question7").style.color="#000000";
        }   
    }
    function q8(value){   
        if (value === "" || value === "-")
            {
                document.getElementById('errorMessage').innerHTML="";
                values[7] = -8;
            } 
        else if (!isNaN(value))
            {
                values[7] = parseFloat(value)/100; 
                document.getElementById('errorMessage').innerHTML="";
                if (values[7] <= 0)
                {                                                    
                    values[7] = -8;
                }
                else
                {
                    document.getElementById("question8").style.color="#000000";
                }
            }
        else
            {  
            document.getElementById('errorMessage').innerHTML="*<br>&nbsp;&nbsp;&nbsp;Invalid Number"; 
            values[7] = -8;
            }
    }                                                     
    function q9(value){
    values[8] = parseInt(value,10);
    if (values[8] != -9)
        {
        document.getElementById("question9").style.color="#000000";
        }   
    }
    function q10(value){
    values[9] = parseInt(value,10);   
    if (values[9] != -10)
        {
        document.getElementById("question10").style.color="#000000";
        }
    }
    function printScreen()
    {    
    
        if (values[0] != -1 &&
            values[1] != -2 &&
            values[2] != -3 &&
            values[3] != -4 &&
            values[4] != -5 &&
            values[5] != -6 &&
            values[6] != -7 &&
            values[7] != -8 &&
            values[8] != -9 &&
            values[9] != -10)
            {    
                text="A summary of your quote is as follows:\n";
                for (var i=0;i<10;i++)
                    {
                    text += "\n" + description[i] + " " + values[i] + "\n";
                    }
                total = values[0]+values[1]+values[2]+values[3]+values[4]+values[5]+values[6]+values[7]+values[8]+values[9];
                text += "\nYour Total Cost is: " + total.toFixed(2);
                document.insurance.result.value=text;
            }
        else
            {
                if (values[0] == -1)
                    {
                    document.getElementById("question1").style.color="#B80000";
                    }
                if (values[1] == -2)
                    {
                    document.getElementById("question2").style.color="#B80000";
                    }
                if (values[2] == -3)
                    {
                    document.getElementById("question3").style.color="#B80000";
                    }
                if (values[3] == -4)
                    {
                    document.getElementById("question4").style.color="#B80000";
                    }
                if (values[4] == -5)
                    {
                    document.getElementById("question5").style.color="#B80000";
                    }
                if (values[5] == -6)
                    {
                    document.getElementById("question6").style.color="#B80000";
                    }
                if (values[6] == -7)
                    {
                    document.getElementById("question7").style.color="#B80000";
                    }
                if (values[7] == -8)
                    {
                    document.getElementById("question8").style.color="#B80000";
                    }
                if (values[8] == -9)
                    {
                    document.getElementById("question9").style.color="#B80000";
                    }
                if (values[9] == -10)
                    {
                    document.getElementById("question10").style.color="#B80000";
                    }
                document.insurance.result.value="You have to fill out all 10 questions to get your quote.\n";
            }
    }  
    function resetTheFormCompletely()
    {                 
        document.insurance.reset();  
        setValues();
    
        document.getElementById("question1").style.color="#000000";  
        document.getElementById("question2").style.color="#000000";  
        document.getElementById("question3").style.color="#000000"; 
        document.getElementById("question4").style.color="#000000";   
        document.getElementById("question5").style.color="#000000"; 
        document.getElementById("question6").style.color="#000000";  
        document.getElementById("question7").style.color="#000000";   
        document.getElementById("question8").style.color="#000000";  
        document.getElementById("question9").style.color="#000000";  
        document.getElementById("question10").style.color="#000000";
                                                                 
        document.getElementById('errorMessage').innerHTML="";
        document.insurance.result.value="";  
    }