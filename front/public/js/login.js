// login.js

document.getElementById("loginForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Formulario de login enviado"); // Verifica si el evento se dispara
  
    // Recopila los datos del formulario de inicio de sesión
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
  
    console.log("Correo:", correo); // Verifica que el correo sea el esperado
    console.log("Contraseña:", contrasena); // Verifica que la contraseña sea la esperada
  
    try {
      const response = await fetch("https://pateles-borcelle.onrender.com/api/usuario/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, contrasena }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Guarda el token en localStorage
        localStorage.setItem("token", data.token);
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html"; // Redirige a la página principal
      } else {
        alert(data.error || "Correo o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al conectar con el servidor.");
    }
  });
  
