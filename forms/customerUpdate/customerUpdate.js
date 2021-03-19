
customerUpdate.onshow=function(){
  txtaCustomers_contents.style.height = "150px"
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)
  if (req.status == 200) {
      results = JSON.parse(req.responseText)
      let message = ""
      for (i = 0; i < results.length; i++)
          message = message + results[i][1] + "\n"
      txtaCustomers.value = message
  }
}

btnUpdate.onclick=function(){
    let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)
    if (req.status == 200) {
        allCustomerData = JSON.parse(req.responseText)
        if (allCustomerData.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage4.value = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage4.value = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage4.value = `Error: ${req.status}`
        }
    }
}
