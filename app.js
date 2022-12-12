let generateQrCodeButton = document.querySelector(".btn1")
let clearTextButton = document.querySelector(".btn2");
let qrCodeImage = document.querySelector(".card-img-top")
var writeInTextarea = document.querySelector(".form-control")


generateQrCodeButton.addEventListener("click", () => { 
 
  let text = writeInTextarea.value;
    if (!text) {
      alert("write your text to get QR code")
    } else
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${text}`;

})


clearTextButton.addEventListener("click", () => {
  writeInTextarea.value = " ";
});

