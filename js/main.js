
function validateForm() {
  let x = document.forms["myForm"]["fnombre"].value;
  let y = document.forms["myForm"]["fapellido"].value;
  let z = document.forms["myForm"]["email"].value;

  if (x == "") {
    alert("Debe completar su nombre");
    return false;
  }
  else {
    if (y == "") {
      alert("Debe completar su apellido");
      return false;
    }
    else {
      if (z == "") {
        alert("Debe completar su email");
        return false;
      }

    }

  }
}
