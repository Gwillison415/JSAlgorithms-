function rot13(message){
    var outputStr = '';
    for (var i =0; i < message.length; i++) {
      var rot13 = message.charCodePoint(i) +13;
      outputStr += String.fromCharCode(rot13);
    }
    console.log(outputStr);

}

rot13()
