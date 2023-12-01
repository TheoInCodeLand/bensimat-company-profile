document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch("send_email.php", {
        method: "POST",
        body: formData,
    })
    .then(function (response) {
        return response.text();
    })
    .then(function (responseText) {
        // Handle the response (e.g., show a confirmation message)
        console.log(responseText);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
});