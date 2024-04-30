/// <reference path="../lib/jquery/dist/jquery.min.js" />
/// <reference path="../lib/jquery/dist/jquery.min.js" />
/// <reference path="../lib/jquery/dist/jquery.js" />
/// <reference path="../lib/jquery/dist/jquery.js" />
$(document).ready(function () {
    GetProducts();
})

//Readt data
function GetProducts() {
    $.ajax({
        url: '/product/GetProducts',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            if (response == null || response == undefined || response.length == 0) {
                var object = '';
                object += '<tr>';
                object += '<td colspan="5">' + 'Products not available' + '</td>'
                object += '</tr>';
                $('#tblBody').html(object);
            } else {
                var object = '';
                $.each(response, function (index, item) {
                    object += '<tr>';
                    object += '<td>' + item.id + '</td>';
                    object += '<td>' + item.productName + '</td>';
                    object += '<td>' + item.price + '</td>';
                    object += '<td>' + item.qty + '</td>';

                  
                    object += '<td>' +
                        '<a href="#" class="btn btn-primary btn-sm" onclick="Edit(' + item.id + ')">Edit</a> ' + 
                        '<a href="#" class="btn btn-danger btn-sm" onclick="Delete(' + item.id + ')">Delete</a>' + 
                        '</td>';

                });
                $('#tblBody').html(object);
            }
        },
        error: function () {
            alert('Unable to read the data')
        }
    })
}

