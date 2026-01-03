function GenerateNumber(){
    let randomNo = Math.floor(Math.random()*1000 + 1)
    document.getElementById("space").textContent = randomNo
}