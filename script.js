var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var charNum = document.getElementById('charNum');
var numBox = document.getElementById('num');
var symBox = document.getElementById('sym');
var submit = document.getElementById('submit');
var yourPw = document.getElementById('yourPw');
var clipboard = document.getElementById('clipboard');

// clipboard.setAttribute("type", "button")
// clipboard.getAttribute("type") // return "button"

submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';

    // characters += num;
    // is the same as:
    // characters = characters + num
    //ternary operator

    (symBox.checked) ? characters += sym : '';
    if(symBox.checked){
        characters += sym;
    }

    if(symBox.checked || numBox.checked){

        yourPw.value = password(charNum.value, characters)
    } else {
        //alert that they didn't check anything
    };
});

function password(l, characters){
    var pwd = '';
    for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(pwd)
    }
    return pwd;
}

clipboard.addEventListener("click", function(){

  /* Select the text field */
  yourPw.select();
  yourPw.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + yourPw.value);
})
