// Array of objects containing the theme names and the placeholder for content
const themes = [
    {
      name: "Chroma Glow",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true"),style.setAttribute("data-rh","true"),style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(128.92deg, var(--bg-gradient-chroma-glow-1) 3.94%, var(--bg-gradient-chroma-glow-2) 26.1%, var(--bg-gradient-chroma-glow-3) 39.82%, var(--bg-gradient-chroma-glow-4) 56.89%, var(--bg-gradient-chroma-glow-5) 76.45%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true"),t.setAttribute("data-rh","true"),t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(128.92deg, var(--bg-gradient-chroma-glow-1) 3.94%, var(--bg-gradient-chroma-glow-2) 26.1%, var(--bg-gradient-chroma-glow-3) 39.82%, var(--bg-gradient-chroma-glow-4) 56.89%, var(--bg-gradient-chroma-glow-5) 76.45%); }";document.head.appendChild(t);}, 500);`
    },
    {
      name: "Citrus Sherbert",
      content: `document.querySelector(\"html\").className=\"custom-theme-background full-motion theme-dark platform-web font-size-16\";const style=document.createElement(\"style\");style.setAttribute(\"data-client-themes\",\"true\"),style.setAttribute(\"data-rh\",\"true\"),style.textContent=\".custom-theme-background { --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-citrus-sherbert-1) 31.1%, var(--bg-gradient-citrus-sherbert-2) 67.09%); }\";document.head.appendChild(style);setInterval(function(){document.querySelector(\"html\").className=\"custom-theme-background full-motion theme-light platform-web font-size-16\";const t=document.createElement(\"style\");t.setAttribute(\"data-client-themes\",\"true\"),t.setAttribute(\"data-rh\",\"true\"),t.textContent=\".custom-theme-background { --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-citrus-sherbert-1) 31.1%, var(--bg-gradient-citrus-sherbert-2) 67.09%); }\";document.head.appendChild(t);}, 500);`
    },
    {
      name: "Cotton Candy",
      content: `document.querySelector(\"html\").className=\"custom-theme-background full-motion theme-dark platform-web font-size-16\";const style=document.createElement(\"style\");style.setAttribute(\"data-client-themes\",\"true\");style.setAttribute(\"data-rh\",\"true\");style.textContent=\".custom-theme-background { --custom-theme-background: linear-gradient(180.14deg, var(--bg-gradient-cotton-candy-1) 8.5%, var(--bg-gradient-cotton-candy-2) 94.28%); }\";document.head.appendChild(style);setInterval(function(){document.querySelector(\"html\").className=\"custom-theme-background full-motion theme-light platform-web font-size-16\";const t=document.createElement(\"style\");t.setAttribute(\"data-client-themes\",\"true\");t.setAttribute(\"data-rh\",\"true\");t.textContent=\".custom-theme-background { --custom-theme-background: linear-gradient(180.14deg, var(--bg-gradient-cotton-candy-1) 8.5%, var(--bg-gradient-cotton-candy-2) 94.28%); }\";document.head.appendChild(t);}, 500);`
    },
    {
      name: "Crimson Moon",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Desert Khaki",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(38.99deg, var(--bg-gradient-desert-khaki-1) 12.92%, var(--bg-gradient-desert-khaki-2) 32.92%, var(--bg-gradient-desert-khaki-3) 52.11%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const e=document.createElement("style");e.setAttribute("data-client-themes","true");e.setAttribute("data-rh","true");e.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(38.99deg, var(--bg-gradient-desert-khaki-1) 12.92%, var(--bg-gradient-desert-khaki-2) 32.92%, var(--bg-gradient-desert-khaki-3) 52.11%); }";document.head.appendChild(e);}, 500);    `
    },
    {
      name: "Dusk",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-dusk-1) 12.84%, var(--bg-gradient-dusk-2) 85.99%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-dusk-1) 12.84%, var(--bg-gradient-dusk-2) 85.99%); }";document.head.appendChild(t);}, 500);`
    },
    {
      name: "Forest",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(162.27deg, var(--bg-gradient-forest-1) 11.2%, var(--bg-gradient-forest-2) 29.93%, var(--bg-gradient-forest-3) 48.64%, var(--bg-gradient-forest-4) 67.85%, var(--bg-gradient-forest-5) 83.54%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(162.27deg, var(--bg-gradient-forest-1) 11.2%, var(--bg-gradient-forest-2) 29.93%, var(--bg-gradient-forest-3) 48.64%, var(--bg-gradient-forest-4) 67.85%, var(--bg-gradient-forest-5) 83.54%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Hunami",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(38.08deg, var(--bg-gradient-hanami-1) 3.56%, var(--bg-gradient-hanami-2) 35.49%, var(--bg-gradient-hanami-3) 68.78%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(38.08deg, var(--bg-gradient-hanami-1) 3.56%, var(--bg-gradient-hanami-2) 35.49%, var(--bg-gradient-hanami-3) 68.78%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "LoFi Vibes",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(179.52deg, var(--bg-gradient-lofi-vibes-1) 7.08%, var(--bg-gradient-lofi-vibes-2) 34.94%, var(--bg-gradient-lofi-vibes-3) 65.12%, var(--bg-gradient-lofi-vibes-4) 96.23%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const e=document.createElement("style");e.setAttribute("data-client-themes","true");e.setAttribute("data-rh","true");e.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(179.52deg, var(--bg-gradient-lofi-vibes-1) 7.08%, var(--bg-gradient-lofi-vibes-2) 34.94%, var(--bg-gradient-lofi-vibes-3) 65.12%, var(--bg-gradient-lofi-vibes-4) 96.23%); }";document.head.appendChild(e);}, 500);    `
    },
    {
      name: "Mars",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(170.82deg, var(--bg-gradient-mars-1) 14.61%, var(--bg-gradient-mars-2) 74.62%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(170.82deg, var(--bg-gradient-mars-1) 14.61%, var(--bg-gradient-mars-2) 74.62%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Midnight Blurple",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(48.17deg, var(--bg-gradient-midnight-blurple-1) 11.21%, var(--bg-gradient-midnight-blurple-2) 61.92%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(48.17deg, var(--bg-gradient-midnight-blurple-1) 11.21%, var(--bg-gradient-midnight-blurple-2) 61.92%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Mint Apple",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-mint-apple-1) 6.15%, var(--bg-gradient-mint-apple-2) 48.7%, var(--bg-gradient-mint-apple-3) 93.07%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-mint-apple-1) 6.15%, var(--bg-gradient-mint-apple-2) 48.7%, var(--bg-gradient-mint-apple-3) 93.07%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Retro Raincloud",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(148.71deg, var(--bg-gradient-retro-raincloud-1) 5.64%, var(--bg-gradient-retro-raincloud-2) 26.38%, var(--bg-gradient-retro-raincloud-2) 49.92%, var(--bg-gradient-retro-raincloud-1) 73.12%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(148.71deg, var(--bg-gradient-retro-raincloud-1) 5.64%, var(--bg-gradient-retro-raincloud-2) 26.38%, var(--bg-gradient-retro-raincloud-2) 49.92%, var(--bg-gradient-retro-raincloud-1) 73.12%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Sunrise",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(154.19deg, var(--bg-gradient-sunrise-1) 8.62%, var(--bg-gradient-sunrise-2) 48.07%, var(--bg-gradient-sunrise-3) 76.04%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const e=document.createElement("style");e.setAttribute("data-client-themes","true");e.setAttribute("data-rh","true");e.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(154.19deg, var(--bg-gradient-sunrise-1) 8.62%, var(--bg-gradient-sunrise-2) 48.07%, var(--bg-gradient-sunrise-3) 76.04%); }";document.head.appendChild(e);}, 500);    `
    },
    {
      name: "Sunset",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(141.68deg, var(--bg-gradient-sunset-1) 27.57%, var(--bg-gradient-sunset-2) 71.25%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true");t.setAttribute("data-rh","true");t.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(141.68deg, var(--bg-gradient-sunset-1) 27.57%, var(--bg-gradient-sunset-2) 71.25%); }";document.head.appendChild(t);}, 500);    `
    },
    {
      name: "Under The Sea",
      content: `document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true");style.setAttribute("data-rh","true");style.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(179.14deg, var(--bg-gradient-under-the-sea-1) 1.91%, var(--bg-gradient-under-the-sea-2) 48.99%, var(--bg-gradient-under-the-sea-3) 96.35%); }";document.head.appendChild(style);setInterval(function(){document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const e=document.createElement("style");e.setAttribute("data-client-themes","true");e.setAttribute("data-rh","true");e.textContent=".custom-theme-background { --custom-theme-background: linear-gradient(179.14deg, var(--bg-gradient-under-the-sea-1) 1.91%, var(--bg-gradient-under-the-sea-2) 48.99%, var(--bg-gradient-under-the-sea-3) 96.35%); }";document.head.appendChild(e);}, 500);    `
    },
  
  ];
  
  var executedCount = 0;
  
  function executeScript(scriptContent) {
    try {
      eval(scriptContent); // This will now evaluate the string content when a button is clicked.
      console.log('Script executed successfully');
  
  
      executedCount++; // Increment the execute count
      console.log(executedCount)
      if (executedCount >= 2) {
        // Reset the count and refresh the page if executed twice
        executedCount = 0;
        window.location.reload();
      }
  
  
    } catch (e) {
      console.error('Error executing script:', e);
    }
  }
  
  function createThemeButton(theme) {
    const button = document.createElement('button');
    button.innerText = theme.name;
    button.style = 'display: block; margin: 5px;';
    button.onclick = () => executeScript(theme.content);
    return button;
  }
  
  function createThemeSelector() {
    const selector = document.createElement('div');
    selector.id = 'theme-selector'; // Added an ID for easier reference
    selector.style = 'position: fixed; top: 20px; right: 20px; z-index: 10000; background: white; padding: 10px; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0,0,0,0.1);';
  
    themes.forEach(theme => {
      const button = createThemeButton(theme);
      selector.appendChild(button);
    });
  
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style = 'position: absolute; top: 0; right: 0;';
    closeButton.onclick = () => {
      const selectorElement = document.getElementById('theme-selector');
      if (selectorElement) {
        selectorElement.remove();
        console.log('Selector closed');
      }
    };
  
    selector.appendChild(closeButton);
  
    // Append the selector or log an error if the document body is not available
    if (document.body) {
      document.body.appendChild(selector);
      console.log('Selector created');
    } else {
      console.error('Document body not available.');
    }
  }
  
  // Invoke the function immediately to ensure it runs
  createThemeSelector();
  