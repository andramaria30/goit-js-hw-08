


const storage = "feedback-form-state";

const feedback_form =document.querySelector(".feedback-form");

const email=document.getElementById("email");
console.log(email);
const message = document.getElementById("message");
console.log(message);



//Examinam continutul local storage sa vedem daca se afla ceva acolo sau nu  


function savevalues() {

    const text_salvat = JSON.parse(localStorage.getItem(storage))

    if (text_salvat) {

        if (text_salvat.message) {

            message.value = text_salvat.message
        }

        if(text_salvat.email) {

            email.value =text_salvat.email
        }
    }

}

feedback_form.addEventListener("submit", onsubmit) 
feedback_form.addEventListener("input", oninput)


function onsubmit (event) {

    event.preventDefault()

    if(email.value == "" || message.value == "") {

        return;

    }

    const text_salvat =JSON.parse(localStorage.getItem(storage));
    console.log(text_salvat);
    event.currentTarget.reset();

    localStorage.removeItem(storage)
}


function oninput (event) {

    const allData = {
        
        email:email.value,
        message:message.value

    }

    localStorage.setItem(storage,JSON.stringify(allData))
}

savevalues();




