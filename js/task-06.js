document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
  };

const textInput = document.querySelector("#validation-input");
textInput.addEventListener("focus", () => {
  textInput.classList.remove("valid", "invalid");
  textInput.value = "";

});

textInput.addEventListener("blur", () => {
  const isValid = textInput.value.length === +textInput.dataset.length;
  const addClass = isValid ? "valid" : "invalid";
  textInput.classList.add(addClass);
});