$(document).ready(function(){
    var innerHtml = " ";
       $.ajax({
        url: "http://localhost:3000/employee",
        type: "GET",
        contentType: "application/json",

        success: function(data){
             console.log(data.data);
            $.each(data.data, function(index,value){
                console.log(value)
                innerHtml += `<tr>
                            <td>${value.firstname}</td>
                            <td>${value.lastname}</td>
                            <td>${value.gender}</td>
                            <td>${value.emailId}</td>
                            <td>${value.phoneNumber}</td>
                            <td>${value.salary}</td>
                            <td>${value.department}</td>
                             <td><buttom class="add-buttom delete" onclick="deleteData(${value.id})"><img src="./assets/icons/delete-black-18dp.svg" alt="Delete">
                            </buttom>
                           
                            </a></td>
                            </tr>`
            });
            $('#table-Display').append(innerHtml);
        } 
    });
});

