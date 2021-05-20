  $(document).ready(function(){
    let employeeId = localStorage.getItem('id')
    console.log("ID present in Local Storage : "+localStorage.getItem('id'))
    
    $.ajax({
        url: "http://localhost:3000/employee/"+employeeId,
        type: "GET",
        contentType: "application/json",
        
        success: function(data){
            console.log(data);
            document.getElementById('firstname').value=data.data.firstname;
            document.getElementById('lastname').value=data.data.lastname;
            // if(document.getElementById('male').value == data.gender){
            //     document.getElementById('male').checked = true;
            // }else if(document.getElementById('female').value == data.gender){
            //     document.getElementById('female').checked = true;
            // }
            document.getElementById("emailId").value=data.data.emailId;
            document.getElementById("phoneNumber").value=data.data.phoneNumber;
            document.getElementById('salary').value=data.data.salary;
            // document.getElementById('HR').value=data.data.department;
        },
        error : (error) => {
            console.log("Error : ",error)
        }

    })
})

function updateEmp(){
    var gender = document.getElementsByName("gender")[0].checked ? 'Male' : 'Female';
        let obj = {
            "firstName": document.getElementById("firstname").value,
            "lastName": document.getElementById("lastname").value,
             "gender":gender,
            "emailId": document.getElementById("emailId").value,
            "phoneNumber": document.getElementById("phoneNumber").value,
    //       "department" : document.getElementById("department").value,
            "salary": document.getElementById('salary').value,
        }
    
         console.log("New updated data : ",obj);
         console.log("Updating Employee data.....")



$.ajax({
    url: "http://localhost:3000/employee/" +localStorage.getItem('id'),
    type: "PUT",
    data: JSON.stringify(obj),
    contentType: "application/json",

    success: function (data) { 
        console.log(data.data);
        alert("Employee data updated successfully") 
    },
    
    error: function (error) {
        console.log("Error",error);
       }
    })
    
}
