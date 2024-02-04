class validator {

  constructor() {
    this.validator = [
      'data-min-length',

    ]
  }

  //iniciar a validação de todos os campos
  validate(form){
    //pegar os inputs
    let inputs = form.getElementByTagName('input');

    //transformo uma HTMLCollection -> array
    let inputsArray = [...inputs];

    //loop nos inputs e validação mediante ao que for encontrado
    inputsArray.forEach(function(input){

      //loop em todas as validações existente
      for(let i = 0; this.validations.length > i; i++){
        if(input.getAttribute(this.validations[i]) != null){
        
        }

      }

    },this);

  }

  min.length() {
    
  }
}






let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

//evento que dispara as validações
submit.addEventListener('click',function(e){

  e.preventDefault();

  validator.validate(form);

  console.log('funcionou');


})