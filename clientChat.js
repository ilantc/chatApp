(function () {
    'use strict';
    var inputBox = document.getElementById('inputBox');
    var displayBox = document.getElementById('displayBox');
    inputBox.focus();
    inputBox.addEventListener('keyup', function (event) {
        if ((event.keyCode == 13) && (inputBox.value.trim() != '')) {
            var newChat = document.createElement('div');
            newChat.textContent = inputBox.value;
            newChat.setAttribute('class', 'c    hatMsg');
            displayBox.appendChild(newChat);
            sendChatToServer(inputBox.value);
            // clear chatbox
            inputBox.value = '';
        }
    });

    function sendChatToServer(chatMsg) {
        var request = new XMLHttpRequest();
        request.onload = highscoreReceived;
        request.open('post', '/chat');
        request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        request.send('chatMsg');
    }
}());

