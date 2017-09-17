function getChat(matchID){
    var data = $.getJSON('https://api.opendota.com/api/matches/' + matchID, function(data){
        for(i = 0; i < data.chat.length; i++){
            if(data.chat[i].type == ['chat']){
                document.write(data.chat[i].unit + ' : ' + data.chat[i].key + '</br>');
            }
        }
    });
}

function getChatButton(){
    getChat(document.getElementById('match_input').value);
}