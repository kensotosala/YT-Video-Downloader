document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.querySelector(".download-form");
  const inputElement = document.getElementById("input-download");

  formElement.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado de envío del formulario

    const inputValue = inputElement.value;
    console.log(inputValue);

    // Simulación de una operación asincrónica
    await delay(1000); // Espera de 1 segundo

    // Limpiar el campo de entrada después de imprimir el valor
    inputElement.value = "";
  });

  // Función de utilidad para simular una espera asincrónica
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
});
