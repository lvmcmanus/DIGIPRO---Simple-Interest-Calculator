
function compute(principal, interestRate, years) {
   
                
          document.getElementById("divContainer").style.display = "block";     
          principal = document.getElementById("principalId").value;
          interestRate = document.getElementById("rateId").value;
          years = document.getElementById("yearsId").value;
          
          var resultInterest = (principal * interestRate * years / 100);
          var totalAmount =  parseInt(principal) + parseInt(resultInterest);
          var totalYear = 2021 + parseInt(years);
        
          document.getElementById("principalOutput").innerHTML =  principal;
          document.getElementById("interestOutput").innerHTML = interestRate;
          document.getElementById("totalamountOutput").innerHTML =  totalAmount;
          document.getElementById("yearOutput").innerHTML =  totalYear;
          
 
        }
function hideDetails()
{
       
      document.getElementById("divContainer").style.display = "none";

}

function validate()
{

        
       
         principal = document.getElementById("principalId").value
          console.log(principal);
   
  
         if (principal == "" || principal == 0 || principal < 0) {
           
              document.getElementById("divContainer").style.display = "none";
              console.log("validatingNull");
              window.alert("Enter a positive number");
              
              document.getElementById("principalId").focus();
            return false;
        }
       
    }
