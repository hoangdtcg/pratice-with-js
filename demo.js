function hello() {
    let myName = document.getElementById("myName").value;
    let myImg = document.getElementById("myImg").value;

    document.getElementById("title").innerHTML = "Hello " + myName;
    document.getElementById("myImage").src = myImg;
}
