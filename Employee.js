let empDept = [];
const empdepartment = () => {
   
    var hrchecked = document.getElementById('hr').checked;
    var saleschecked = document.getElementById('sales').checked;
    var financechecked = document.getElementById('finance').checked;
    var engineerchecked = document.getElementById('engineer').checked;
    var otherschecked = document.getElementById('others').checked;

    if (hrchecked == true) {
        var hrcheck = document.getElementById('hr').value;
        empDept.push(hrcheck);
    }
    if (saleschecked == true) {
        var salescheck = document.getElementById('sales').value;
        empDept.push(salescheck);
    }
    if (financechecked == true) {
        var financecheck = document.getElementById('finance').value;
        empDept.push(financecheck);
    }
    if (engineerchecked == true) {
        var engineercheck = document.getElementById('engineer').value;
        empDept.push(engineercheck);
    }
    if (otherschecked == true) {
        var othercheck = document.getElementById('others').value;
        empDept.push(othercheck);
    }

    console.log(empDept);
    return empDept;
}

function save() {
    console.log("Method Called");

    var genders = document.getElementsByName("gender")[0].checked ? 'male' : 'female';

    let empObject = {
        "firstname": document.getElementById('firstname').value,
        "lastname": document.getElementById('lastname').value,
        "emailId": document.getElementById("emailId").value,
        "phoneNumber": document.getElementById("phoneNumber").value,
        "gender": genders,
        "salary": document.getElementById('salary').value,
        "department":"HR"
    };
 console.log(empObject)
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "POST",
        data: JSON.stringify(empObject),
        // dataType: "json",
        contentType: "application/json",

        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}
