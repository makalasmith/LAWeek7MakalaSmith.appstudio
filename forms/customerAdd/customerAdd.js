

btnAdd.onclick=function(){
  let name = inptName.value
  let street = inptAddress.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZipCode.value
    let query = "INSERT INTO customer (`name`,`street`,`city`,`state`,`zipcode`) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.value = "You have successfully added the customer!"
        else
            lblMessage3.value = "There was a problem with adding the customer to the database."
    } else 
        lblMessage3.value = "Error: " + req.status
}
