// script.js

const crimeData = {
    "Andaman and Nicobar Islands": {
        description: "Crime statistics for Andaman and Nicobar Islands.",
        image: "path_to_image",
        coordinates: { x: 10, y: 50 },
        tooltip: "Overview of crimes in Andaman and Nicobar Islands",
        mapTooltip: "Andaman and Nicobar Islands Crime Overview",
        details: {
            accidents: 50,
            murders: 5,
            thefts: 100,
            cybercrimes: 20
        }
    },
    "Andhra Pradesh": {
        description: "Crime statistics for Andhra Pradesh.",
        image: "path_to_image",
        coordinates: { x: 60, y: 60 },
        tooltip: "Overview of crimes in Andhra Pradesh",
        mapTooltip: "Andhra Pradesh Crime Overview",
        details: {
            accidents: 600,
            murders: 70,
            thefts: 900,
            cybercrimes: 100
        }
    },
    "Arunachal Pradesh": {
        description: "Crime statistics for Arunachal Pradesh.",
        image: "path_to_image",
        coordinates: { x: 70, y: 20 },
        tooltip: "Overview of crimes in Arunachal Pradesh",
        mapTooltip: "Arunachal Pradesh Crime Overview",
        details: {
            accidents: 100,
            murders: 10,
            thefts: 150,
            cybercrimes: 25
        }
    },
    "Assam": {
        description: "Crime statistics for Assam.",
        image: "path_to_image",
        coordinates: { x: 80, y: 30 },
        tooltip: "Overview of crimes in Assam",
        mapTooltip: "Assam Crime Overview",
        details: {
            accidents: 800,
            murders: 90,
            thefts: 1200,
            cybercrimes: 150
        }
    },
    "Bihar": {
        description: "Crime statistics for Bihar.",
        image: "path_to_image",
        coordinates: { x: 90, y: 40 },
        tooltip: "Overview of crimes in Bihar",
        mapTooltip: "Bihar Crime Overview",
        details: {
            accidents: 1500,
            murders: 200,
            thefts: 1800,
            cybercrimes: 250
        }
    },
    "Chandigarh": {
        description: "Crime statistics for Chandigarh.",
        image: "path_to_image",
        coordinates: { x: 100, y: 50 },
        tooltip: "Overview of crimes in Chandigarh",
        mapTooltip: "Chandigarh Crime Overview",
        details: {
            accidents: 300,
            murders: 30,
            thefts: 400,
            cybercrimes: 50
        }
    },
    "Chhattisgarh": {
        description: "Crime statistics for Chhattisgarh.",
        image: "path_to_image",
        coordinates: { x: 110, y: 60 },
        tooltip: "Overview of crimes in Chhattisgarh",
        mapTooltip: "Chhattisgarh Crime Overview",
        details: {
            accidents: 700,
            murders: 100,
            thefts: 800,
            cybercrimes: 120
        }
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        description: "Crime statistics for Dadra and Nagar Haveli and Daman and Diu.",
        image: "path_to_image",
        coordinates: { x: 120, y: 20 },
        tooltip: "Overview of crimes in Dadra and Nagar Haveli and Daman and Diu",
        mapTooltip: "Dadra and Nagar Haveli and Daman and Diu Crime Overview",
        details: {
            accidents: 200,
            murders: 20,
            thefts: 250,
            cybercrimes: 30
        }
    },
    "Delhi": {
        description: "Delhi has significant rates of violent crime.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Delhi.svg/320px-Flag_of_Delhi.svg.png",
        coordinates: { x: 160, y: 90 },
        tooltip: "Violent crime hotspot",
        mapTooltip: "Delhi State Crime Overview",
        details: {
            accidents: 2500,
            murders: 400,
            thefts: 5000,
            cybercrimes: 1500
        }
    },
    // Add entries for remaining states and Union Territories here...

    "Maharashtra": {
        description: "Maharashtra has high crime rates related to theft and cybercrime.",
        image: "https://wheremaps.com/wp-content/uploads/2023/04/Maharashtra-Division-Map-768x637.png",
        coordinates: { x: 15, y: 10 },
        tooltip: "Theft and cybercrime hotspot",
        mapTooltip: "Maharashtra State Crime Overview",
        details: {
            accidents: 5000,
            murders: 300,
            thefts: 7000,
            cybercrimes: 2000
        }
    },
    // Continue adding for all remaining states and UTs...
};

function showCrimeData() {
    const state = document.getElementById('state').value;
    const dataDisplay = document.getElementById('dataDisplay');

    // Clear previous data
    dataDisplay.innerHTML = '';

    if (crimeData[state]) {
        const { description, image, coordinates, tooltip, mapTooltip, details } = crimeData[state];
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
    } else {
        dataDisplay.innerHTML = '<p>Please select a valid state or UT.</p>';
    }
}


