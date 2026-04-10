const close = document.querySelector("#close")
const icone = document.querySelector("#icone")
icone.addEventListener("focus",()=>{
    close.style.display = "block"
})
close.addEventListener('click',()=>{
    close.style.display = 'none'

})