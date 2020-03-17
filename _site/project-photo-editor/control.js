const inputs = document.querySelectorAll(".controls input");

function cssUpdate(event) {
    const change = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+change);
}

inputs.forEach(input => input.addEventListener("change", cssUpdate));
inputs.forEach(input => input.addEventListener("mousemove", cssUpdate));