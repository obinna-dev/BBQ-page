let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault()
   
    let formData = new FormData(event.target)
    let userFirstName = formData.get("firstName")
    let userEmailAddress = formData.get("emailAddress")

    let mainContent = document.getElementById("Main-Content")
    let updatedHtmlContent = `
            <h2>Congratulations, ${userFirstName}!</h2>
            <p>You're on your way to becoming a BBQ Master!</p>
            <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
        `
    mainContent.innerHTML = updatedHtmlContent
})