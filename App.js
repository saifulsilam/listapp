const studentName= document.getElementById("studentName");
const courseName= document.getElementById("courseName");
const price= document.getElementById("price");
const addBtn = document.querySelector(".submit");
const studentLists = document.getElementById("studentList");

addBtn.addEventListener("click", 
function(event){
    event.preventDefault();

    // creating row 
    const newRow = document.createElement("tr");
    console.log(newRow)

    // creating student name
    const newStudentName= document.createElement("td");
    newStudentName.innerHTML = studentName.value;
    console.log(newStudentName);

    //  append td into tr 
    newRow.appendChild(newStudentName);


    //creating course name
    const newCourseName= document.createElement("td");
    newCourseName.innerHTML = courseName.value;


    //  append td into tr 
    newRow.appendChild(newCourseName);

    // creating price
    const newPrice= document.createElement("td");
    newPrice.innerHTML ="TK" + price.value;


    //  append td into tr 
    newRow.appendChild(newPrice);


    // creating Delete Field 
    const delteField = document.createElement("td");
    newRow.appendChild(delteField);

    //  Creating Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.classList.add('delete');

    deleteBtn.innerHTML="Delete Item";

    delteField.appendChild(deleteBtn);




    // inserting data to table
    studentLists.appendChild(newRow);

    studentName.value = "";
    courseName.value ="";
    price.value = "";   
     // delete functionality

    let deleteItems = document.querySelectorAll(".delete");
    console.log(deleteItems)

    // deleteItems.addEventListener("click", function(event){
    //     event.target.parentElement.parentElement.remove();
    // })

    for ( const btn of deleteItems){
        btn.addEventListener("click", function(e) {
            e.target.parentElement.parentElement.remove();
        })
    }


})
