document.querySelector("html").className="custom-theme-background full-motion theme-dark platform-web font-size-16";const style=document.createElement("style");style.setAttribute("data-client-themes","true"),style.setAttribute("data-rh","true"),style.textContent="\n  .custom-theme-background {\n      --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-citrus-sherbert-1) 31.1%, var(--bg-gradient-citrus-sherbert-2) 67.09%);\n    }\n",document.head.appendChild(style),setInterval((function(){document.querySelector("html").className="custom-theme-background full-motion theme-light platform-web font-size-16";const t=document.createElement("style");t.setAttribute("data-client-themes","true"),t.setAttribute("data-rh","true"),t.textContent="\n    .custom-theme-background {\n      --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-citrus-sherbert-1) 31.1%, var(--bg-gradient-citrus-sherbert-2) 67.09%);\n    }\n  ",document.head.appendChild(t)}),500);
