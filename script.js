const check = () =>{
    userInput=[]
    let myNum = document.getElementById('floating-phone-number').value
    if (myNum === "") {
        alert('cant be empty')
    } else if (myNum.length < 11) {
        alert('is not complete')
    }else{
    userInput.push(myNum)
    let startNum = userInput[0].substring(0,4)
    JSON.stringify(startNum)
    console.log(startNum);
    // MTN NUMBER
    if (startNum === "0803" ||
    startNum === "0806" ||
    startNum === "0810" ||
    startNum === "0813" ||
    startNum === "0814" ||
    startNum === "0816" ||
    startNum === "0903" ||
    startNum === "0906" ||
    startNum === "0913" ||
    startNum === "0916" ||
    startNum === "0703" ||
    startNum === "0706"){
      displayNetwork.innerHTML = `${myNum} is an MTN Number`
     mtn.style.display = 'block'
     airtel.style.display = 'none'
     mobi.style.display = 'none'
     glo.style.display = 'none'
    // AIRTEL NUMBER
      } else if (startNum === "0802" ||
      startNum === "0701" ||
      startNum === "0708" ||
      startNum === "0808" ||
      startNum === "0812" ||
      startNum === "0901" ||
      startNum === "0902" ||
      startNum === "0904" ||
      startNum === "0907" ||
      startNum === "0912"){
        displayNetwork.innerHTML = `${myNum} is an Airtel Number`
        mtn.style.display = 'none'
        mobi.style.display = 'none'
        glo.style.display = 'none'
        airtel.style.display = 'block'
      // 9MOBIL NUMBER
      } else if (startNum === "0909" ||
      startNum === "0908" ||
      startNum === "0818" ||
      startNum === "0809" ||
      startNum === "0817"){
        displayNetwork.innerHTML = `${myNum} is a 9mobile Number`
        mobi.style.display = 'none'
        glo.style.display = 'none'
        airtel.style.display = 'none'
        mtn.style.display = 'block'
        // GLO NUMBER
      } else if (startNum === "0805" ||
      startNum === "0905" ||
      startNum === "0807" ||
      startNum === "0811" ||
      startNum === "0705" ||
      startNum === "0815"){
        displayNetwork.innerHTML = `${myNum} is a GLO Number`
        mtn.style.display = 'none'
        mobi.style.display = 'none'
        airtel.style.display = 'none'
        glo.style.display = 'block'
      } else{
        displayNetwork.innerHTML = `Hey! ${myNum} was not verified`
      }
    }
    }
