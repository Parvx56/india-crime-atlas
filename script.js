// script.js

async function getCrimeData(state, cb) {
  const rawResponse = await fetch('https://crime-atlas-indian-backend.vercel.app/api/get-crime-data', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ state: state })
  });

  try {
    const content = await rawResponse.json();
    cb(content);
  } catch (e) {
    dataDisplay.innerHTML = '<p>Please select a valid state or UT.</p>';
  }
}

function showCrimeData() {
  const state = document.getElementById('state').value;
  const dataDisplay = document.getElementById('dataDisplay');

  // Clear previous data
  dataDisplay.innerHTML = '';

  getCrimeData(state, data => {
    const { description, image, coordinates, tooltip, mapTooltip, details } = data;
    dataDisplay.innerHTML = `<h2>Crime Data for ${state}</h2>
                             <p>${description}</p>
                             <canvas id="crimeCanvas" width="320" height="240"></canvas>
                             <div id="tooltip" class="tooltip"></div>`;

    const canvas = document.getElementById('crimeCanvas');
    const ctx = canvas.getContext('2d');
    const tooltipDiv = document.getElementById('tooltip');

    // Draw the image
    const img = new Image();
    img.src = image;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 320, 240);

      // Draw the red dot
      ctx.beginPath();
      ctx.arc(coordinates.x, coordinates.y, 5, 0, Math.PI * 2, true);
      ctx.fillStyle = 'red';
      ctx.fill();

      // Add tooltip content for the entire map with details
      const fullTooltipContent = `
          <strong>${mapTooltip}</strong><br>
          Accidents: ${details.accidents}<br>
          Murders: ${details.murders}<br>
          Thefts: ${details.thefts}<br>
          Cybercrimes: ${details.cybercrimes}
      `;

      // Event listener to display tooltip with all details when hovering over the map
      canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Check if the mouse is over the red dot
        const distance = Math.sqrt(
          (mouseX - coordinates.x) ** 2 + (mouseY - coordinates.y) ** 2
        );

        // Show specific tooltip when hovering over the red dot
        if (distance < 5) {
          tooltipDiv.innerHTML = tooltip;
        } else {
          tooltipDiv.innerHTML = fullTooltipContent;
        }

        // Position the tooltip near the cursor
        tooltipDiv.style.display = 'block';
        tooltipDiv.style.left = `${event.pageX + 10}px`;
        tooltipDiv.style.top = `${event.pageY + 10}px`;
      });

      // Hide tooltip when mouse leaves the canvas
      canvas.addEventListener('mouseleave', () => {
        tooltipDiv.style.display = 'none';
      });
    };
  });
}

// Optionally, add a JS event to trigger fade-in after the page fully loads
window.onload = function () {
  document.body.style.animation = 'fadeIn 2s ease-in-out forwards';
};



