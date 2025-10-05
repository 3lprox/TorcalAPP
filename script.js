// Lista de apps con sus URLs de descarga
const apps = [
  { name: "Appod - Astrology app (For MobileProyect)", url: "apps/appod.apk" },
  { name: "Mi App 2", url: "apps/app2.apk" },
];

const appListEl = document.getElementById("appList");

// Renderiza la lista de apps
apps.forEach(app => {
  const li = document.createElement("li");
  li.textContent = app.name;
  li.addEventListener("click", () => {
    window.location.href = app.url; // descarga directa del APK
  });
  appListEl.appendChild(li);
});
