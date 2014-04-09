/**
 * Created by User on 4/9/14.
 */
inputBox = document.getElementById('inputBox');
displayBox = document.getElementById('displayBox');
inputBox.focus();


inputBox.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        console.log('enter pressed' + inputBox.value);
//        console.log('enter pressed' + displayBox.value);
        var newChat = document.createElement('div');
        newChat.setAttribute('class','chatMsg');
        newChat.textContent = inputBox.value;
//        newChat.setAttribute('textContent',inputBox.value);
        displayBox.appendChild(newChat);
        inputBox.value = '';
    }
});