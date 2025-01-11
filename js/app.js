document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.querySelector(
      '#theme-switch input[type="checkbox"]'
    );
  
    const cardImage = document.querySelector(".card-image");
    const modeText = document.querySelector(".mode-text");

    /* fonction centrale */
    const detectColorScheme = () => {
      let theme = "dark";
    
    /* Local storage pour memoriser le theme et le synchroniser avec celui de la machine utilisateur */
      if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme") === "light" ? "light" : "dark";
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }
  
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        switchToDark();
      } else {
        switchToLight();
      }
    };
  
    const switchTheme = (e) => {
      if (e.target.checked) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        switchToDark();
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        switchToLight();
      }
    };
  
    const switchToLight = () => {
      toggleSwitch.checked = false;
      cardImage.src = "https://images.unsplash.com/photo-1601907560526-d679c8ed95ce?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      modeText.innerHTML = "Light Mode";
    };
  
    const switchToDark = () => {
      toggleSwitch.checked = true;
      cardImage.src ="https://images.pexels.com/photos/5707110/pexels-photo-5707110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      modeText.innerHTML = "Dark Mode";
    };
  
    detectColorScheme();
  
    toggleSwitch.addEventListener("change", switchTheme, false);
  
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      switchToDark();
    } else {
      switchToLight();
    }
  });
  