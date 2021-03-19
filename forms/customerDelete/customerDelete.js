
customerDelete.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)

    if (req.status == 200) {
        allCustomerData = JSON.parse(req.responseText)
        console.log(allCustomerData)
    } else {
        lblMessages2.value = `Error: ${req.status}`
    }  
}

btnDelete.onclick=function(){
  let customerNameDel = inptCustomer.value
    let found = false
    for (i = 0; i < allCustomerData.length; i++) {
        if (customerNameDel == allCustomerData[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage2.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)
      if (req.status == 200)
            if (req.responseText == 500)    
                lblMessage2.value = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblMessage2.value = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblMessage2.value = `Error: ${req.status}`
    } 
}
