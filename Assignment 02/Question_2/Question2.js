document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    const num = document.getElementById("number").value;
    const email = document.getElementById("email").value;

    document.getElementById("output").innerHTML=`
    
    <p>First name: ${fname}</p>
    <p>Last name: ${lname}</p>
    <p>Contact: ${num}</p>
    <p>Email: ${email}</p>
    
    `
})