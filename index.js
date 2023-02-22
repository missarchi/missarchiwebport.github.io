function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
const serviceID ="service_5wezi3o"
const templateID ="template_10gu4i8"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("message sent succesfully")
    })
    .catch((err) => console.log(err));
}
