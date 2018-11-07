
  function myFunction(){
    var x = document.getElementById("frm1");
    var number = 0;
    var i;
    for (i=0;i<x.length;i++){
        number += parseInt(x.elements[i].value)
    }
    number = number / 4;
    document.getElementById("demo").innerHTML = number;
  }


  function myFunction2() {
    var x = document.getElementById("frm2");
    var number = 0;
    var i;
    for (i=0;i<x.length;i++){
        number += parseInt(x.elements[i].value)
    }
    number = number;
    document.getElementById("demo1").innerHTML = number;
  }

  function myFunction3() {
    var x = document.getElementById("frm3");
    var number = 0;
    var i;
    for (i=0;i<x.length;i++){
        number += parseInt(x.elements[i].value)
    }
    number = number - 7;
    document.getElementById("demo2").innerHTML = number;
  }

  function showDiv() {
     document.getElementById('welcomeDiv').style.display = "block";
  }

  function showDiv1() {
     document.getElementById('welcomeDiv1').style.display = "block";
  }

  function showDiv2() {
     document.getElementById('welcomeDiv2').style.display = "block";
  }
