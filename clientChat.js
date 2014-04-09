/**
 * Created by User on 4/9/14.
 */

inputBox = document.getElementById('inputBox');
displayBox = document.getElementById('displayBox');
inputBox.focus();


inputBox.addEventListener('keyup', function(event) {
    if ((event.keyCode == 13) && (inputBox.value.trim() != '')) {
        var newChat = document.createElement('div');
        newChat.textContent = inputBox.value;
        newChat.setAttribute('class','chatMsg');
//        newChat.setAttribute('textContent',inputBox.value);
        displayBox.appendChild(newChat);
        inputBox.value = '';
    }
});