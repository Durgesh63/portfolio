export const THEME_KEY = "theme";

// Runs in <head> before the page paints, so there's no light-to-dark flash.
// Uses the saved choice if there is one, otherwise the system setting.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;
