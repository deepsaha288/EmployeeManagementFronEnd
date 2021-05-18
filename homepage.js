$(document).ready(function () {
    reload();
});

var innerHtml = " ";
function reload() {
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "GET",
        contentType: "application/json",

        success: function (data) {
            console.log(data.data);
            $.each(data.data, function (index, value) {
                console.log(value)
                innerHtml += `<tr>
                                <td>${value.firstname}</td>
                                <td>${value.lastname}</td>
                                <td>${value.gender}</td>
                                <td>${value.emailId}</td>
                                <td>${value.phoneNumber}</td>
                                <td>${value.salary}</td>
                                <td>${value.department}</td>
                                 <td><buttom class="add-buttom delete"  id=${value._id} onclick="deleteData(this)"><img src="./assets/icons/delete-black-18dp.svg" alt="Delete">
                                </buttom>
                                <a class="add-buttom edit" onclick="updateData(${value._id})" href="./update.html"><img src="./assets/icons/create-black-18dp.svg" alt="Edit">
                                </a></td>
                                </tr>`
            });
            $('#table-Display').append(innerHtml);
        }
    });

}

deleteData = (id) => {
    console.log("mehtod called");
    console.log(id.id);
    $.ajax({
        type: 'delete',
        url: "http://localhost:3000/employee/" + id.id,
        contentType: "application/json",

        success: function (data) {
            console.log(data);

        },
        error: function (error) {
            console.log(error);
        }
    });
    reload();

};
updateData = (obj) => {
    console.log(obj);
    localStorage.setItem('empID', obj);
}
