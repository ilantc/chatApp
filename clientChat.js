(function ($) {
    'use strict';
//    var inputBox = document.getElementById('inputBox');
//    var displayBox = document.getElementById('displayBox');
//    inputBox.focus();
    $('#inputBox').focus();
//    $('#displayBox').css('border', 'solid 3px red');
//    inputBox.addEventListener('keyup', function (event) {
//        if ((event.keyCode == 13) && (inputBox.value.trim() != '')) {
////            var newChat = document.createElement('div');
////            newChat.textContent = inputBox.value;
////            newChat.setAttribute('class', 'c    hatMsg');
////            displayBox.appendChild(newChat);
//            if (displayBox.innerText == '') {
//                displayBox.innerText = inputBox.value;
//            }
//            else {
//                displayBox.innerText = displayBox.innerText + '\n' + inputBox.value;
//            }
//            sendChatToServer(inputBox.value);
//            // clear chatbox
//            inputBox.value = '';
//        }
//    });

    $('#inputBox').keyup(function(e) {
        debugger;
        if ((e.keyCode == 13) && ($('#inputBox').val().trim() != '') ) {
            sendChatToServer($('#inputBox').val());
            // clear chatbox
            $('#inputBox').val('');
        }
    });

    function sendChatToServer(chatMsg) {
       $.ajax({ type: 'post',
                url: '/chat',
                //contentType: 'application/json;charset=UTF-8',
//                data: JSON.stringify({message: chatMsg})}
                data: {message: chatMsg}}
        ).done(function () {
                console.log("sent message: '" + chatMsg + "'");
        });
//    var request = new XMLHttpRequest();
//    request.open('post', '/chat');
//    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//    request.send(JSON.stringify({message: chatMsg}));
//    console.log("sent message: '" + chatMsg + "'");
    }

//    function updateChat() {
//        var allMsgs = JSON.parse(this.responseText);
//        console.log('allmsgs = ' + allMsgs);
//        displayBox.innerText = allMsgs.join('\n');
//    }

//    setInterval(function () {
//        var request = new XMLHttpRequest();
//        request.open('get', '/chat');
//        request.onload = updateChat;
//        request.send(null);
//        }, 1000);

    setInterval(function() {
        $.ajax({url: '/chat'}).done(function(response) {
            console.log('allmsgs = ' + response);
            $('#displayBox').html(response.join("<br/>"));});
        }
     ,1000);

}(window.jQuery));

