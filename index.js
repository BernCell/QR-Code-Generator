const qrContainer = document.querySelector('.qr-container')
const qrTextInput = document.querySelector(".qr-text")

const btnGenerate = document.querySelector(".btn-generate")
const errorMessage = document.querySelector('.error-message')

btnGenerate.addEventListener('click', () => {
    console.log("Yes !!!!");

    validateInputField()
    
}) 


function validateInputField() {

        // trim supprime les espaces dans le champ
    if (qrTextInput.value.trim().length > 0) {
        

        generateQrCode()
    } else{
        
        errorMessage.textContent = "Enter text or use some URL to generate QR Code"
        setTimeout(() => {
            errorMessage.textContent = "";
        }, 3000);
    }
}

function generateQrCode() {
    qrContainer.innerHTML = ""
    new QRCode(qrContainer, {
        text : qrTextInput.value,
        height : 300,
        width : 300,
        colorLight : '#fff',
        colorDark : '#000',
    
    }) 

     qrTextInput.value = ''
      errorMessage.textContent = ""
      validateInputField()
}
