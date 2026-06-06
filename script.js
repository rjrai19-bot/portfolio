// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});


// ===== Dark / Light Mode =====
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});


// ===== Contact Form (Save Messages) =====
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = {
        name: name,
        email: email,
        message: message
    };

    let savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    savedMessages.push(data);

    localStorage.setItem("messages", JSON.stringify(savedMessages));

    alert("Message sent successfully!");

    this.reset();
});


// ===== Admin Login =====
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1234"){
        
        let messages = JSON.parse(localStorage.getItem("messages")) || [];

        let output = "<h3>All Messages</h3>";

        if(messages.length === 0){
            output += "<p>No messages yet!</p>";
        } else {
            messages.forEach((msg, index) => {
                output += `
                <div style="border:1px solid #ccc; padding:10px; margin:10px 0;">
                        <p><b>${index + 1}. ${msg.name}</b></p>
                        <p>${msg.email}</p>
                        <p>${msg.message}</p>
                    </div>
                `;
            });
        }

        document.getElementById("responses").innerHTML = output;

    } else {
        alert("Invalid username or password!");
    }
}
let text = "Web Developer";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 200);
    }
}

typing();
