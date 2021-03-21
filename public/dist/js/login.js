let $submit = document.querySelector('#submit');

$submit . addEventListener("click", user_login);

function user_login(){

   let nbError = 0;
   let $input = document.querySelectorAll(".require");
   let message = document.querySelector(".message");

$input.forEach(element => {
   if(element.nodeValue.trim()===""){
      element.classList.add("is-invalid");
      nbError++;
   } else {
      element.classList.remove("is-invalid");
   }
});

if(nbError !== 0) {
   document.querySelector
} else {

}
}
