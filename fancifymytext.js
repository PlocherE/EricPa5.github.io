function fontSizeFunction() {
    document.getElementById("Text").style.fontSize = "24pt";
}
function fontBoldFunction() {
    document.getElementById("Text").style.fontWeight = "bold";
    document.getElementById("Text").style.color = "blue";
    document.getElementById("Text").style.textDecoration = "underline";
}
function fontNormalFunction() {
    document.getElementById("Text").style.fontWeight = "normal";
    document.getElementById("Text").style.color = "black";
    document.getElementById("Text").style.textDecoration = "none";
}
function mooFunction() {
    var text = document.getElementById("Text").value;
    var newText = text.replaceAll(".", " MOO!");
    document.getElementById("Text").value = newText;
}