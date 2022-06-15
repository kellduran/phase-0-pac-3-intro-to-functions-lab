function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) { console.log(string.toUpperCase());

}

function logWhisper(string) { console.log(string.toLowerCase());

}

function sayHiToHeadphonedRoommate(string) { 
    var cantHear = "I can\'t hear you!";
    var canHear = "YES INDEED!";
    var eatTogether = "I would love to!";
    if (string === string.toLowerCase()) {return cantHear;}
    else if (string === string.toUpperCase()) {return canHear;}
    else if (string === "Let\'s have dinner together!") {return eatTogether;}
}
