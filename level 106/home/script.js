
    document.getElementById("registerForm").addEventListener("submit", function(event) {
      event.preventDefault();

      let fname = document.getElementById("firstName").value.trim();
      let lname = document.getElementById("lastName").value.trim();
      let email = document.getElementById("email").value.trim();
      let pass = document.getElementById("password").value;
      let confirmPass = document.getElementById("confirmPassword").value;
      let message = document.getElementById("message");

      if (!fname || !lname || !email || !pass || !confirmPass) {
        alert("გთხოვთ შეავსოთ ყველა ველი!");
        return;
      }

      if (pass !== confirmPass) {
        document.body.className = "warning";
        message.textContent = "Warning";
      } else {
        document.body.className = "success";
        message.textContent = "successfullylogin";
      }
    });

   
    document.getElementById("outer").addEventListener("click", function() {
      console.log("outer clicked");
    });

    document.getElementById("inner").addEventListener("click", function() {
      console.log("inner clicked");
    });

    document.getElementById("button").addEventListener("click", function() {
      console.log("button clicked");
    });

    document.getElementById("myList").addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        console.log("დაწკაპუნებულია:", event.target.textContent);
      }
    });
