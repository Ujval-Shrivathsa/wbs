const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
};

// JavaScript for the letter effect on hover
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelectorAll(".about, .portfolio, .contact").forEach(item => {
    item.dataset.value = item.innerText; // Store original text
    item.onmouseover = event => {  
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };
});

function SendMail() {
    var params = {
        from_name: document.getElementById('from_name').value,
        email_id: document.getElementById('email_id').value,
        name__buisness: document.getElementById('name__buisness').value,
        phone_no: document.getElementById('phone_no').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_3ars70m", "template_7ykj4a8", params)
    .then(function(res) {
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('classNote').style.display = 'contents';
        document.getElementById('classNote').style.marginTop = '50px';
        document.body.style.height = '200vh';
    })
    .catch(function(error) {
        console.error("Failed to send email:", error);
        alert("Failed to send email.");
    });

    return false; // Prevent the default form submission
}

function myfunctionrun(){
    const variableis = document.querySelector('.classhamburgermenu');
    variableis.style.display = 'block';
}

function myfunctionrunn(){
    const variableis = document.querySelector('.classhamburgermenu');
    variableis.style.display = 'none';
}