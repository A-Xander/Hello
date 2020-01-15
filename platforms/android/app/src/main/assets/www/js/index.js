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
  console.log("Starting framework7 app...");
  var app = new Framework7({
    root: "#app",
    name: "My App",
    id: "com.myapp.test",
    panel: {
      swipe: "left"
    }
  });

  if (window.usingCordova) {
  } else {
  }

  var mainView = app.views.create(".view-main");
}

document.addEventListener("deviceready", initApp, false);
