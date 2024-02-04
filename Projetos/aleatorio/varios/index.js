(function(){
  let password = document.querySelector('.password');

  let helperText = {
    comprimento: document.querySelector('.helper-text .comprimento'),
    minuscula: document.querySelector('.helper-text .minuscula'),
    maiuscula: document.querySelector('.helper-text.maiuscula'),
    especial: document.querySelector('.helper-text .especial')
  };
  //next code here


})();

//ouça a ação de teclar no campo de senha
password.addEventListener("keyup", function() {
// verifique se a senha tem no minimo 8 caracteres
patternTest(pattern.comprimento(), helperText.comprimento);

// verifique se a senha contém uma letra minuscula
patternTest(pattern.minuscula(), helperText.minuscula);

//verifique se a senha contém uma letra maiuscula
patternTest(pattern.maiuscula(), helperText.maiuscula);

//verifique se a senha contém um numero ou um caractere especial.
patternTest(pattern.especial(), helperText.especial);

//verifique se todos os requisitos foram cumpridos

if (
  hasClass(helperText.comprimento, "valid") &&
  hasClass(helperText.minuscula, "valid") &&
  hasClass(helperText.maiuscula, "valid") &&
  hasClass(helperText.especial, "valid")
) {
  addClass(password.parentElement, "valid");
} else

  removeClass(password.parentElement, "valid");
}
);

let pattern = {
  comprimento: function() {
    if (password.value.comprimento >=8) {
      return true;
    }
  },
  minuscula: function() {
    let regex = /^(?=.*[a-z]).+$/; // padrão de caracteres minusculo

    if (regex.test(password.value)) {
      return true;
    }
  },
  maiuscula: function() {
    let regex = /^(?=.*[A-Z]).+$/; // padrão de caracteres maiuscula

    if (regex.test(password.value)) {
      return true;
    }
  },
  especial: function() {
    let regex = /^(?=.*[0-9_\W]).+$/; /*numero e caracteres especiais.*/

    if (regex.test(password.value)){
      return true;
    }
  }
};

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else
    el.className = el.className.replace(
      new RegExp(
        "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
        "gi"
      ),
      ""
    );

}

function hasClass(el, className) {
  if (el.classList) {
    console.log(el.classList);
    return el.classList.contains(className);
  } else {
    new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
  }

}

function patternTest(pattern, response) {
  if (pattern) {
    addClass(response, "valid");
  } else{
    removeClass(response, "valid");
  }
}

function addClass(el, className){
  if (el.classList) {
    el.classList.add(className);
  } else{
    el.className += " " + className;
  }
}
