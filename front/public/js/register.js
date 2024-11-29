// auth.js

// Registro de usuario
document.getElementById("registerForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const usuario = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      contrasena: document.getElementById("contrasena").value,
      direccion: document.getElementById("direccion").value,
      telefono: document.getElementById("telefono").value,
      tipo_usuario: document.getElementById("tipo_usuario").value,
    };
  
    try {
      const response = await fetch("http://localhost:3000/api/usuario/crearusuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Usuario registrado con éxito. Ahora inicia sesión.");
        window.location.href = "login.html";
      } else {
        alert(data.error || "Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
  