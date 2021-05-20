let EmpData = [];
$(document).ready(function () {
    reload();
});

function reload() {
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "get",
        contentType: "application/json",
        success: function (data) {
            console.log(data.data);
             load(data.data)
        
        }
    });

}
const load =(data) =>{
    let innerHtml;
    $.each(data,function (index, value) {
        EmpData.push(value._id)
        console.log(value)
        innerHtml += `<tr>
                        <td>${value.firstname}</td>
                        <td>${value.lastname}</td>
                        <td>${value.gender}</td>
                        <td>${value.emailId}</td>
                        <td>${value.phoneNumber}</td>
                        <td>${value.salary}</td>
                        <td>${value.department}</td>
                        <td><buttom class="add-buttom delete" onclick="deleteData(this)" id= "${value._id}"><img src="../assets/icons/delete-black-18dp.svg" alt="Delete">
                        </buttom>
                        <a class="add-buttom edit" onclick="updateData(this)" id="${value._id}"><img src="../assets/icons/create-black-18dp.svg" alt="Edit">
                        </a></td>
                        </tr>`
    });
    $('#table-Display').append(innerHtml);

 }

deleteData = (id) => {
    console.log("mehtod called");
    console.log(id.id);
    $.ajax({
        type: 'delete',
        url: "http://localhost:3000/employee/" + id.id,
        contentType: "application/json",

        success: function (data) {
            alert("Record has been deleted");
            console.log(data);
            reload();
             load();
        
           
        },
        error: function (error) {
            console.log(error);
        }
    });
    window.location.href='../HTML/HomePage.html';
  
}
function updateData(id){   
    localStorage.setItem("id",id.id)
    console.log(id.id)
    console.log("ID inside the Local Storage : "+localStorage.getItem("id"))
    window.location.href='../HTML/update.html';
 
}
     










