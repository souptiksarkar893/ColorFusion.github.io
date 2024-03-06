const gradientPreview = document.getElementById("gradient-preview");
      const numColorsSelect = document.getElementById("num-colors");
      const colorControls = document.getElementById("color-controls");
      const angleInput = document.getElementById("angle");
      const generateGradientBtn = document.getElementById(
        "generate-gradient-btn"
      );
      const copyUserGradientBtn = document.getElementById(
        "copy-user-gradient-btn"
      );
      const downloadGradientBtn = document.getElementById(
        "download-gradient-btn"
      );
      const gradientsContainer = document.getElementById("gradients-container");
      const pagination = document.getElementById("pagination");
      const gradientsPerPage = 12; // 4 rows * 3 columns
      const copyModal = document.getElementById("copyModal");
      const copyTextarea = document.getElementById("copy-textarea");
      const closeModalBtn = document.getElementById("close-modal-btn");

      // Initialize default gradient
      window.onload = () => {
        generateGradientPreview();
      };

      // Function to generate color inputs based on selected number of colors
      function generateColorInputs(numColors) {
        colorControls.innerHTML = "";
        for (let i = 1; i <= numColors; i++) {
          const colorInput = document.createElement("input");
          colorInput.type = "color";
          colorInput.value = "#000000";
          colorInput.id = `color${i}`;
          colorControls.appendChild(colorInput);
        }
      }

      // Event listener for number of colors select
      numColorsSelect.addEventListener("change", () => {
        const numColors = parseInt(numColorsSelect.value);
        generateColorInputs(numColors);
        generateGradientPreview();
      });

      // Function to generate gradient preview
      function generateGradientPreview() {
        const numColors = parseInt(numColorsSelect.value);
        let gradientColors = [];
        for (let i = 1; i <= numColors; i++) {
          gradientColors.push(document.getElementById(`color${i}`).value);
        }
        const angle = angleInput.value;
        gradientPreview.style.background = `linear-gradient(${angle}deg, ${gradientColors.join(
          ", "
        )})`;
      }

      // Event listener for generate gradient button
      generateGradientBtn.addEventListener("click", generateGradientPreview);

      // Dummy gradient data
      const gradientsData = [
        {
          name: "Gradient 1",
          colors: ["#FF6B6B", "#FFE66D", "#8AFF66"],
          degree: "135deg",
        },
        {
          name: "Gradient 2",
          colors: ["#3399FF", "#66CCFF", "#99FFFF"],
          degree: "135deg",
        },
        {
          name: "Gradient 3",
          colors: ["#FFB6C1", "#87CEFA", "#00FF7F"],
          degree: "135deg",
        },
        {
          name: "Gradient 4",
          colors: ["#FF6347", "#8A2BE2", "#000080"],
          degree: "135deg",
        },
        {
          name: "Gradient 5",
          colors: ["#FFE4C4", "#8B4513", "#2E8B57"],
          degree: "135deg",
        },
        {
          name: "Gradient 6",
          colors: ["#FF4500", "#ADFF2F", "#7B68EE"],
          degree: "135deg",
        },
        {
          name: "Gradient 7",
          colors: ["#FFD700", "#CD5C5C", "#00FFFF"],
          degree: "135deg",
        },
        {
          name: "Gradient 8",
          colors: ["#FF8C00", "#00FA9A", "#FF00FF"],
          degree: "135deg",
        },
        {
          name: "Gradient 9",
          colors: ["#7FFFD4", "#8B008B", "#FFD700"],
          degree: "135deg",
        },
        {
          name: "Gradient 10",
          colors: ["#BDB76B", "#FFC0CB", "#556B2F"],
          degree: "135deg",
        },
        {
          name: "Gradient 11",
          colors: ["#FF1493", "#00BFFF", "#808000"],
          degree: "135deg",
        },
        {
          name: "Gradient 12",
          colors: ["#87CEEB", "#DAA520", "#CD5C5C"],
          degree: "135deg",
        },
        {
          name: "Gradient 13",
          colors: ["#8A2BE2", "#00FFFF", "#98FB98"],
          degree: "135deg",
        },
        {
          name: "Gradient 14",
          colors: ["#8B008B", "#FFD700", "#FF4500"],
          degree: "135deg",
        },
        {
          name: "Gradient 15",
          colors: ["#0000FF", "#FFFF00", "#8A2BE2"],
          degree: "135deg",
        },
        {
          name: "Gradient 16",
          colors: ["#FF6347", "#8A2BE2"],
          degree: "135deg",
        },
        {
          name: "Gradient 17",
          colors: ["#FF6347", "#000080"],
          degree: "135deg",
        },
        {
          name: "Gradient 18",
          colors: ["#8A2BE2", "#000080"],
          degree: "135deg",
        },
        {
          name: "Gradient 19",
          colors: ["#FF6347", "#8A2BE2", "#000080"],
          degree: "135deg",
        },
        {
          name: "Gradient 20",
          colors: ["#FF6347", "#8A2BE2", "#FFD700"],
          degree: "135deg",
        },
        {
          name: "Gradient 21",
          colors: ["#FF6347", "#000080", "#FFD700"],
          degree: "135deg",
        },
        {
          name: "Gradient 22",
          colors: ["#8A2BE2", "#000080", "#FFD700"],
          degree: "135deg",
        },
        {
          name: "Gradient 23",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "135deg",
        },
        {
          name: "Gradient 24",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "45deg",
        },
        {
          name: "Gradient 25",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "225deg",
        },
        {
          name: "Gradient 26",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "315deg",
        },
        {
          name: "Gradient 27",
          colors: ["#FF6347", "#8A2BE2", "#000080"],
          degree: "90deg",
        },
        {
          name: "Gradient 28",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "180deg",
        },
        {
          name: "Gradient 29",
          colors: ["#FF6347", "#000080", "#FFD700"],
          degree: "270deg",
        },
        {
          name: "Gradient 30",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "360deg",
        },
        {
          name: "Gradient 31",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "45deg",
        },
        {
          name: "Gradient 32",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "225deg",
        },
        {
          name: "Gradient 33",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "315deg",
        },
        {
          name: "Gradient 34",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "90deg",
        },
        {
          name: "Gradient 35",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "180deg",
        },
        {
          name: "Gradient 36",
          colors: ["#FF6347", "#000080", "#FFD700"],
          degree: "270deg",
        },
        {
          name: "Gradient 37",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "360deg",
        },
        {
          name: "Gradient 38",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "60deg",
        },
        {
          name: "Gradient 39",
          colors: ["#FF6347", "#8A2BE2", "#FFD700"],
          degree: "240deg",
        },
        {
          name: "Gradient 40",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "30deg",
        },
        {
          name: "Gradient 41",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "210deg",
        },
        {
          name: "Gradient 42",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "120deg",
        },
        {
          name: "Gradient 43",
          colors: ["#FF6347", "#8A2BE2", "#FFD700"],
          degree: "300deg",
        },
        {
          name: "Gradient 44",
          colors: ["#FF6347", "#8A2BE2", "#FFD700"],
          degree: "150deg",
        },
        {
          name: "Gradient 45",
          colors: ["#FF6347", "#8A2BE2", "#000080", "#FFD700"],
          degree: "330deg",
        },
        {
          name: "Gradient 46",
          colors: ["#FF6347", "#4169E1"],
          degree: "135deg",
        },

        {
          name: "Gradient 47",
          colors: ["#7FFFD4", "#9932CC"],
          degree: "135deg",
        },

        {
          name: "Gradient 48",
          colors: ["#00CED1", "#F08080"],
          degree: "135deg",
        },

        {
          name: "Gradient 49",
          colors: ["#20B2AA", "#9370DB"],
          degree: "135deg",
        },

        {
          name: "Gradient 50",
          colors: ["#4682B4", "#A52A2A"],
          degree: "135deg",
        },

        {
          name: "Gradient 51",
          colors: ["#2E8B57", "#FF7F50"],
          degree: "135deg",
        },

        {
          name: "Gradient 52",
          colors: ["#1E90FF", "#FA8072"],
          degree: "135deg",
        },

        {
          name: "Gradient 53",
          colors: ["#2F4F4F", "#DC143C"],
          degree: "135deg",
        },

        {
          name: "Gradient 54",
          colors: ["#008080", "#DAA520"],
          degree: "135deg",
        },

        {
          name: "Gradient 55",
          colors: ["#556B2F", "#8B008B"],
          degree: "135deg",
        },

        {
          name: "Gradient 56",
          colors: ["#6B8E23", "#800080"],
          degree: "135deg",
        },

        {
          name: "Gradient 57",
          colors: ["#4169E1", "#00FF00"],
          degree: "135deg",
        },

        {
          name: "Gradient 58",
          colors: ["#6A5ACD", "#FF69B4"],
          degree: "135deg",
        },

        {
          name: "Gradient 59",
          colors: ["#8B0000", "#3CB371"],
          degree: "135deg",
        },

        {
          name: "Gradient 60",
          colors: ["#9932CC", "#FAEBD7"],
          degree: "135deg",
        },
      ];

      // Function to display gradients
      function displayGradients(gradients, page) {
        const startIndex = (page - 1) * gradientsPerPage;
        const endIndex = Math.min(
          startIndex + gradientsPerPage,
          gradients.length
        );
        const paginatedGradients = gradients.slice(startIndex, endIndex);

        gradientsContainer.innerHTML = "";

        paginatedGradients.forEach((gradient, index) => {
          const gradientCard = document.createElement("div");
          gradientCard.classList.add("gradient-card");

          const gradientName = document.createElement("h2");
          gradientName.textContent = gradient.name;

          const gradientDiv = document.createElement("div");
          gradientDiv.classList.add("gradient");
          gradientDiv.style.background = `linear-gradient(${
            gradient.degree
          }, ${gradient.colors.join(", ")})`;

          const copyButton = document.createElement("button");
          copyButton.innerHTML = '<i class="far fa-copy"></i>';
          copyButton.classList.add("copy-button");
          copyButton.addEventListener("click", () => {
            const copyText = `background: linear-gradient(${
              gradient.degree
            }, ${gradient.colors.join(", ")});`;
            copyTextarea.value = copyText;
            copyModal.style.display = "block";
          });

          gradientCard.appendChild(gradientName);
          gradientCard.appendChild(gradientDiv);
          gradientCard.appendChild(copyButton);
          gradientsContainer.appendChild(gradientCard);

          // Adding clear card after every 3rd gradient card
          if ((index + 1) % 3 === 0) {
            const clearCard = document.createElement("div");
            clearCard.classList.add("clear-card");
            gradientsContainer.appendChild(clearCard);
          }
        });
      }

      // Function to generate pagination links
      function displayPagination(totalPages) {
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
          const pageLink = document.createElement("a");
          pageLink.href = "#";
          pageLink.textContent = i;
          pageLink.addEventListener("click", () => {
            displayGradients(gradientsData, i);
          });
          pagination.appendChild(pageLink);
        }
      }

      // Calculate total pages
      const totalPages = Math.ceil(gradientsData.length / gradientsPerPage);

      // Initial display
      generateColorInputs(2); // Set initial number of colors to 2
      displayGradients(gradientsData, 1);
      displayPagination(totalPages);

      // Event listener for closing modal
      closeModalBtn.addEventListener("click", () => {
        copyModal.style.display = "none";
      });

      // Close modal when clicking outside of modal
      window.addEventListener("click", (event) => {
        if (event.target === copyModal) {
          copyModal.style.display = "none";
        }
      });

      // Close modal when clicking close button
      document.querySelector(".close").addEventListener("click", () => {
        copyModal.style.display = "none";
      });

      // Download gradient button functionality
      downloadGradientBtn.addEventListener("click", () => {
        const gradientCSS = gradientPreview.style.backgroundImage;
        const link = document.createElement("a");
        link.download = "gradient.css";
        link.href = "data:text/css;charset=utf-8," + escape(gradientCSS);
        link.click();
      });

      // Copy user gradient button functionality
      copyUserGradientBtn.addEventListener("click", () => {
        const gradientCSS = gradientPreview.style.backgroundImage;
        const copyText = `background: ${gradientCSS};`;
        copyTextarea.value = copyText;
        copyModal.style.display = "block";
      });