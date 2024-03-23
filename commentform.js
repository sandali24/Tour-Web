function validateForm() {
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  
  // Validate username
  if (name == "") {
    alert("Please enter your name");
    return false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == "") {
    alert("Please enter your email");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }


	var a =document.getElementById("1");
	var b =document.getElementById("2");
	var c =document.getElementById("3");
	var d =document.getElementById("4");
  var e =document.getElementById("5");
  var f =document.getElementById("6");
  var g=document.getElementById("7");
  var h =document.getElementById("8");
  var i=document.getElementById("9");
  var j =document.getElementById("10");
  

	if ((a.checked == false) && (b.checked == false) &&(c.checked == false) && (d.checked == false) && (e.checked == false) && (f.checked == false) && (g.checked == false) && (h.checked == false) && (i.checked == false) && (j.checked == false)){
		alert("Your feedback is incomplete. Please make sure that you have given us rating.");
    }

	
	if (a.checked == true){
		var rating = "1";
    }
	if (b.checked == true){
		var rating = "2";
    }
	if (c.checked == true){
		var rating = "3";
	}
	if (d.checked == true) {
		var rating = "4";
	}
  if (e.checked == true) {
		var rating = "5";
	}
  if (f.checked == true) {
		var rating = "6";
	}
  if (g.checked == true) {
		var rating = "7";
	}
  if (h.checked == true) {
		var rating = "8";
	}
  if (i.checked == true) {
		var rating = "9";
	}
  if (j.checked == true) {
		var rating = "10";
	}
  
  var com = document.forms["myForm"]["comments"].value;
  if (com == "") 
  {
		alert("Please fill the reasons");
		return false;
	}

if ((name!="")  && (com!="") && ((a.checked == true) || (b.checked == true) || (c.checked == true) || (d.checked == true)|| (e.checked == true)|| (f.checked == true)|| (g.checked == true)|| (h.checked == true)|| (i.checked == true)|| (j.checked == true))){
		alert("Dear "+ name +" , Thank you very much for your feedback. You have rated our site as "+rating+".");
		return true;
	}
	

}


/*script for select method*/

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

