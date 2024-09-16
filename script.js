let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function generateQR(){
    if (qrtext.value.length > 0) {
        // If the input field has a value, generate a QR code
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgbox.classList.add("show-img");
      } else {
        // If the input field is empty, remove the QR code image
        qrimage.src = "";
        imgbox.classList.remove("show-img");
        qrtext.classList.add('error');
        setTimeout(() => {
          qrtext.classList.remove('error');
        }, 1000);
      }
}