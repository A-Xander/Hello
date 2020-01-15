function locationupdaten() {
  console.log("test");
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      let card = document.getElementById("locationcard");
      card.innerText =
        "lat = " + pos.coords.latitude + "long = " + pos.coords.longitude;
    },
    function(err) {
      alert("Activate position!");
    },
    { timeout: 2000 }
  );
}

function bodyGeladen() {
  if (window.usingCordova) {
    console.log("Native");
  } else {
    console.log("Browser");
    initApp();
  }
}

function initApp() {
  main();
  console.log("Starting framework7 app...");
  var app = new Framework7({
    root: "#app",
    name: "My App",
    id: "com.myapp.test",
    panel: {
      swipe: "left"
    }
  });

  var mainView = app.views.create(".view-main");
}

//Prüfen ob Service Worker und Push API unterstützt werden
const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};

//Den Service Worker im Browser unter Application --> Service Workers registrieren
const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register("sw.js");
  return swRegistration;
};

//Erlaubnis erfragen vom Benutzer, ob Push Nachrichten angezeigt werden dürfen.
const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

//Funktion der Schaltfläche um die obrigen Funktionen aufzurufen
const main = async () => {
  check();
  const swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();
};

document.addEventListener("deviceready", initApp, false);
