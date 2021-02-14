


function calculaIMC(){
  let peso = document.getElementById("peso").value
  let altura = document.getElementById("altura").value
  altura = altura.replace(",",".")
  peso = peso.replace(",",".")
  var resultado = (peso/(altura*altura)).toFixed(1)
  console.log(resultado)

  if (resultado <18.5) {
      alert ("Seu IMC é de: " + resultado + ". Seu peso esta abaixo do normal")
  }
  if (resultado >= 18.5 && resultado <24.9) {
      alert ("Seu IMC é de: " + resultado + ". Seu peso esta normal")
  }
  if (resultado >= 25 && resultado <29.9) {
      alert ("Seu IMC é de: " + resultado + ". Você esta com sobrepeso")
  }
  if (resultado >= 30 && resultado <34.9) {
      alert ("Seu IMC é de: " + resultado + ". Você tem Obesidade grau I")
  }
  if (resultado >= 35 && resultado <39.9) {
      alert ("Seu IMC é de: " + resultado + ". Você tem Obesidade grau II")
  }
  if (resultado >= 40) {
      alert ("Seu IMC é de: " + resultado + ". Você tem Obesidade grau III")
  }



}



