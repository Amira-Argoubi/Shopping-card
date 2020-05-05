const addButt = Array.from(document.getElementsByClassName("ad"));
const quant = Array.from(document.getElementsByClassName("totalQ"));
const priceProd = Array.from(document.getElementsByClassName("card-text"));
const totalPrice = document.getElementById("totalCart");
const delButt = Array.from(document.getElementsByClassName("del"));
const inputs = Array.from(document.getElementsByClassName("form-control"));
const names = document.getElementsByClassName("name");
const mail = document.getElementById("mail");
const passWord = document.getElementById("password");
const butSave = document.getElementById("sign btn");
let S = 0;

for (let i = 0; i < addButt.length; i++) {
  addButt[i].addEventListener("click", function () {
    quant[i].innerHTML++;

    S = S + Number(priceProd[i].innerHTML);

    totalPrice.innerHTML = S;
    //console.log(totalPrice);
  });
}
for (let j in delButt) {
  delButt[j].addEventListener("click", function () {
    if (quant[j].innerHTML > 0 && totalPrice.innerHTML > 0) {
      quant[j].innerHTML--;

      S = S - Number(priceProd[j].innerHTML);
      totalPrice.innerHTML = S;
    }
    console.log(quant[j].innerHTML);
  });
}

/*function myFunction() {
  for (let j = 0; j < inputs.length; j++) {
    if (inputs[j].value == "") {
      alert("you must type");
    }
  }
}*/
/*function myFunction() {
  let regName = /^[a-z]{3,}\s?[a-z]*$/gi;
  let n = names[0].value;
  regName.test(n) ? alert("valid") : alert("non valid");}*/
butSave.addEventListener("click", () => {
  let regMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z.]{2,3}$/g;
  let n = mail.value;
  regMail.test(n) ? alert("valid") : alert("non valid");

  /*/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/*/
});
