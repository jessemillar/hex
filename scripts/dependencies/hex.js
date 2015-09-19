var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]; // All valid hexacdecimal characters

var generateHex = function() {
    var hex = ""; // The string of hex characters that we generate

    for (var i = 0; i < length; i++) {
        hex += characters[Math.floor(Math.random() * (characters.length))];
    }

    return hex;
};

var hexToDecimal = function(hex) {
    var power = 0;
    var decimal = 0;

    for (var i = hex.length - 1; i >= 0; i--) { // Convert hex to decimal
        decimal += characters.indexOf(hex[i]) * Math.pow(16, power);
        power++;
    }

    return decimal;
};

var decimalToHex = function(decimal) {
    var hex = "";

    while (decimal > 0) {
        hex = characters[decimal % 16] + hex;
        decimal = Math.floor(decimal / 16);
    }

    return hex;
};
