(function () {
    'use strict';
    var inputBox = document.getElementById('inputBox');
    var displayBox = document.getElementById('displayBox');
    inputBox.focus();
    inputBox.addEventListener('keyup', function (event) {
        if ((event.keyCode == 13) && (inputBox.value.trim() != '')) {
//            var newChat = document.createElement('div');
//            newChat.textContent = inputBox.value;
//            newChat.setAttribute('class', 'c    hatMsg');
//            displayBox.appendChild(newChat);
            if (displayBox.innerText == '') {
                displayBox.innerText = inputBox.value;
            }
            else {
                displayBox.innerText = displayBox.innerText + '\n' + inputBox.value;
            }
            sendChatToServer(inputBox.value);
            // clear chatbox
            inputBox.value = '';
        }
    });

    function sendChatToServer(chatMsg) {
        var request = new XMLHttpRequest();
        request.open('post', '/chat');
        request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        request.send(JSON.stringify({message: chatMsg}));
    }

    function updateChat() {
        var allMsgs = JSON.parse(this.responseText);
        debugger;
        console.log('allmsgs = ' + allMsgs);
        displayBox.innerText = allMsgs.join('\n');
    }

    setInterval(function () {
        var request = new XMLHttpRequest();
        request.open('get', '/chat');
        request.onload = updateChat;
        request.send(null);
    }, 1000);
}());

