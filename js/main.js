window.onload = function() {
    if(localStorage.getItem("alert") != "1") {
        localStorage.setItem("alert", "1")
        window.alert("Affinity.com is not intended to be a substitute for professional medical advice, diagnosis, or treatment. If you are in crisis, please visit your local emergency department or call 911. ")
    }
}