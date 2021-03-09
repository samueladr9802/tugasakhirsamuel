function checkedbox() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var btn = document.getElementById("btnsubmit");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
}

var state = false;
        function toggle() {
            var x = document.getElementById("eye");
            if(state){
                document.getElementById("password").setAttribute("type","password");
                x.classList.add("fa-eye-slash");
                x.classList.remove("fa-eye");
                state = false;
            }
            else{
                document.getElementById("password").setAttribute("type","text");
                x.classList.remove("fa-eye-slash");
                x.classList.add("fa-eye");
                state = true;
            }
        }

        function togglepswsatu() {
            var x = document.getElementById("eye-one");
            if(state){
                document.getElementById("password-one").setAttribute("type","password");
                x.classList.add("fa-eye-slash");
                x.classList.remove("fa-eye");
                state = false;
            }
            else{
                document.getElementById("password-one").setAttribute("type","text");
                x.classList.remove("fa-eye-slash");
                x.classList.add("fa-eye");
                state = true;
            }
        }

        function togglepswdua() {
            var x = document.getElementById("eye-two");
            if(state){
                document.getElementById("password-two").setAttribute("type","password");
                x.classList.add("fa-eye-slash");
                x.classList.remove("fa-eye");
                state = false;
            }
            else{
                document.getElementById("password-two").setAttribute("type","text");
                x.classList.remove("fa-eye-slash");
                x.classList.add("fa-eye");
                state = true;
            }
        }

        