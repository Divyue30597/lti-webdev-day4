function greet(user) {
    return "Hello " + user + " World!!";
}
function main() {
    var username = "Tomchi";
    document.getElementById("display").innerHTML = greet(username);
}
function showGreet(fname, lname) {
    return "Welcome Gopnik " + fname + " " + lname + " to TS language. Now you are an expert of TS language. Hack Pentagon.";
}
function showMain() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var result = showGreet(fname, lname);
    document.getElementById("result").innerHTML = result;
    document.getElementById("fn").innerHTML = fname;
    document.getElementById("ln").innerHTML = lname;
}
