function validate()
{
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var email=document.getElementById("email").value;
	var company= document.getElementById("company").value;
	var course=document.getElementById("course");
	var phone= document.getElementById("phone");
	var area_code= document.getElementById("area_code");
	atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

	if(fname == "" || lname == "")
	{
		alert("No blank value allowed");
		return false;
	}
	if(email.length<=0)
	{
		alert("Email is required");
		return false;
	}

         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            return false;
         }
	if(company.length <= 0)
	{
		alert("Company name is required");
		return false;
	}
	if(area_code= "-1")
	{
		alert("select the area code");
	}
	
    if (isNaN(num)){  
    document.getElementById("phone").innerHTML="Enter Numeric value only";  
    return false;  
    } 

}  
