const timeContainer = document.querySelector(".timeContainer")

let time = new Date().toUTCString()

timeContainer.innerHTML = time

