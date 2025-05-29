const rangeInput = document.getElementById("range");
const squircleContainer = document.querySelector(".squircle-container");
const codeContainer = document.querySelector(".code-container");

const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", () => {
  const preElement = codeContainer.querySelector("pre");
  if (preElement) {
    const svgCode = preElement.textContent;
    navigator.clipboard
      .writeText(svgCode)
      .then(() => {
        alert("SVG code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy SVG code. Please try again.");
      });
  } else {
    alert("No SVG code available to copy.");
  }
});

function updateSquircle() {
  const n = parseFloat(rangeInput.value);
  const r = 2 + 18 * (n / 100);
  const k = (8 / 3) * (Math.pow(2, -1 / r) - 0.5);
  const a = 50;

  const pathD = `M 100,50 C 100,${50 + a * k} ${50 + a * k},100 50,100 C ${
    50 - a * k
  },100 0,${50 + a * k} 0,50 C 0,${50 - a * k} ${50 - a * k},0 50,0 C ${
    50 + a * k
  },0 100,${50 - a * k} 100,50 Z`;

  const svgCode = `
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathD}" />
        </svg>
        `;

  squircleContainer.innerHTML = svgCode;

  let preElement = codeContainer.querySelector("pre");
  if (!preElement) {
    preElement = document.createElement("pre");
    codeContainer.appendChild(preElement);
  }
  preElement.textContent = svgCode;
}

rangeInput.addEventListener("input", updateSquircle);

updateSquircle();
