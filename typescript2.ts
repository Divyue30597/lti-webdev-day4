function greet(user:string):string{
    return "Hello " + user + " World!!";
}
function main():void{
    var username:string = "Tomchi";
    document.getElementById("display").innerHTML = greet(username);
}

function showGreet(fname:string, lname:string):string{
    return "Welcome Gopnik " + fname + " " + lname + " to TS language. Now you are an expert of TS language. Hack Pentagon."
}

function showMain():void{
    var fname:string = (document.getElementById("fname") as HTMLInputElement).value;
    var lname:string = (document.getElementById("lname") as HTMLInputElement).value;
    var result:string = showGreet(fname, lname); 
    document.getElementById("result").innerHTML = result;
    document.getElementById("fn").innerHTML = fname;
    document.getElementById("ln").innerHTML = lname;
}

