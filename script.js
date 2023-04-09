document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display input");
    const buttons = document.querySelectorAll(".buttons button");
    let currentInput = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const value = this.textContent;
  
        if (value === "C") {
          currentInput = "";
        } else if (value === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = "Error";
          }
        } else {
          currentInput += value;
        }
        display.value = currentInput;
      });
    });
  });
document.addEventListener("DOMContentLoaded", function() {
  const display = document.querySelector(".display input");
  const buttons = document.querySelectorAll(".buttons button");
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const value = this.textContent;

      if (value === "C") {
        currentInput = "";
      } else if (value === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    });
  });
});
  