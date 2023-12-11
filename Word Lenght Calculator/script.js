function CalculateWords(){
    let temp = document.getElementById("textares").value;
    document.getElementById("textares").value = ""
    document.getElementById("Ans").innerHTML = temp.split(" ").length;
}