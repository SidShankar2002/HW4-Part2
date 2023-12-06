// <!-- Name: Sid Shankar
// Email: siddarth_shankar@student.uml.edu 
// This document is responsible for doing the most of the work, since it contains the sliders. I could
// get the tabs to work because of time restraints. I got the 2 way binding to work and separate tabs
// for changing the table.  
// -->

function validation() {
    console.log("Function called");

    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var num3 = parseInt($("#num3").val());
    var num4 = parseInt($("#num4").val());

    // Check if input values are within bounds
    if (
        isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) ||
        num1 < -50 || num1 > 50 || num2 < -50 || num2 > 50 ||
        num3 < -50 || num3 > 50 || num4 < -50 || num4 > 50
    ) {
        // Display error message on the screen
        $("#error-message-container").text("Please enter valid numbers between -50 and 50 inclusive.");
        return false; // Exit the function if values are out of bounds
    }

    // Clear any existing error message
    $("#error-message-container").text("");

    return true; // Validation successful
}

$(document).ready(function () {
    // Initialize sliders
    $("#slider1").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#num1").val(ui.value);
        },
        change: function (event, ui) {
            $("#num1").val(ui.value);
        }
    });

    $("#slider2").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#num2").val(ui.value);
        },
        change: function (event, ui) {
            $("#num2").val(ui.value);
        }
    });

    $("#slider3").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#num3").val(ui.value);
        },
        change: function (event, ui) {
            $("#num3").val(ui.value);
        }
    });

    $("#slider4").slider({
        min: -50,
        max: 50,
        slide: function (event, ui) {
            $("#num4").val(ui.value);
        },
        change: function (event, ui) {
            $("#num4").val(ui.value);
        }
    });

    console.log("Sliders initialized!");

    // Event listener for input changes
    $("#num1, #num2, #num3, #num4").on("input", function () {
        var inputId = $(this).attr("id");
        var sliderId = "#slider" + inputId.charAt(inputId.length - 1);

        // Update the corresponding slider value when the input changes
        $(sliderId).slider("value", parseInt($(this).val()));
    });

    // Event listener for form submission
    $("#inputForm").submit(function (event) {
        event.preventDefault();

        // Call validation and proceed if successful
        if (validation()) {
            generateTable();
        }
    });

    // Initialize form validation

    document.getElementById("inputForm").addEventListener("submit", function(event) {
        console.log("Submitted");
        event.preventDefault();
        // The form submission is now handled within the submitHandler
    });
});

function generateTable() {
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var num3 = parseInt($("#num3").val());
    var num4 = parseInt($("#num4").val());

    // Check if input values are within bounds
    if (
        isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) ||
        num1 < -50 || num1 > 50 || num2 < -50 || num2 > 50 ||
        num3 < -50 || num3 > 50 || num4 < -50 || num4 > 50
    ) {
        alert("Please enter valid numbers between -50 and 50 inclusive.");
        return; // Exit the function if values are out of bounds
    }

    // Generate multiplication table
    var tableContent = '<table>';

    // Create the header row with horizontal numbers
    tableContent += '<tr><td></td>';
    for (var j = num3; j <= num4; j++) {
        tableContent += '<th>' + j + '</th>';
    }
    tableContent += '</tr>';
    for (var i = num1; i <= num2; i++) {
        tableContent += '<tr>';
        tableContent += '<th>' + i + '</th>';
        for (var j = num3; j <= num4; j++) {
            var product = i * j;
            var cellClass = '';

            // Check if the number is even
            if (product % 2 === 0) {
                cellClass += 'even ';
            }

            // Check if the number is negative
            if (product < 0) {
                cellClass += 'negative';
            }

            tableContent += '<td class="' + cellClass.trim() + '">' + product + '</td>';
        }
        tableContent += '</tr>';
    }

    tableContent += '</table>';

    // Save the table content to sessionStorage
    sessionStorage.setItem('tableContent', tableContent);

    // Open a new tab with the table content
    var newTab = window.open('', '_blank');
    newTab.document.write(tableContent);
    newTab.document.close();
}


// function generateTable() {
//     var num1 = parseInt($("#num1").val());
//     var num2 = parseInt($("#num2").val());
//     var num3 = parseInt($("#num3").val());
//     var num4 = parseInt($("#num4").val());

//     // Check if input values are within bounds
//     if (
//         isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) ||
//         num1 < -50 || num1 > 50 || num2 < -50 || num2 > 50 ||
//         num3 < -50 || num3 > 50 || num4 < -50 || num4 > 50
//     ) {
//         alert("Please enter valid numbers between -50 and 50 inclusive.");
//         return; // Exit the function if values are out of bounds
//     }
//     // Generate multiplication table
//     var tableContent = '<table>';

//     // Create the header row with horizontal numbers
//     tableContent += '<tr><td></td>';
//     for (var j = num3; j <= num4; j++) {
//         tableContent += '<th>' + j + '</th>';
//     }
//     tableContent += '</tr>';
//     for (var i = num1; i <= num2; i++) {
//         tableContent += '<tr>';
//         tableContent += '<th>' + i + '</th>';
//         for (var j = num3; j <= num4; j++) {
//             var product = i * j;
//             var cellClass = '';

//             // Check if the number is even
//             if (product % 2 === 0) {
//                 cellClass += 'even ';
//             }

//             // Check if the number is negative
//             if (product < 0) {
//                 cellClass += 'negative';
//             }

//             tableContent += '<td class="' + cellClass.trim() + '">' + product + '</td>';
//         }
//         tableContent += '</tr>';
//     }

//     tableContent += '</table>';

//     // Save the table content to sessionStorage
//     sessionStorage.setItem('tableContent', tableContent);

//     // Redirect to a new page
//     window.location.href = 'table.html';
// }
