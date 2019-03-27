// ---------------------- To do ---------------------- \\

var consoleCss1 = "background: #222; color: #BADA55; margin-bottom: 0.3em;";
var consoleCss2 = "background: #0EE; color: #900;";

console.log("%c %s", consoleCss1, "---------------------------------------- ");
//console.log("");
console.log("%c %s", consoleCss1, "To do:");

// To do:
console.log(
     "%c %s",
     consoleCss1,
     "- Timer laten afgaan als de pagina niet open is."
);
console.log(
     "%c %s",
     consoleCss1,
     "---------- Gebruik notifications / Push API in combinatie Service Worker."
);
console.log(
     "%c %s",
     consoleCss1,
     "- Beschikbaar maken voor meerdere browsers."
);

// End to do
//console.log("");
console.log("%c %s", consoleCss1, "---------------------------------------- ");
console.log("");

// ---------------------- Some variables ---------------------- \\

// Eigen tijd opvragen.
var now = new Date().getTime();

// Definieert de dateoptions.
var dateOptions = {
     year: "numeric",
     month: "short",
     day: "numeric",
     hour12: false,
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit"
};

// ---------------------- Functions ---------------------- \\

// Vraag permissie om notificaties weer te geven.
Notification.requestPermission().then(function(result) {
  if (result === "denied") {
    console.log("Permission wasn't granted. Allow a retry.");
    return;
  }
  if (result === "default") {
    console.log("The permission request was dismissed.");
    return;
  }
  // Do something with the granted permission.
});

// Plaatst een lege teller in op de pagina om weer te geven dat er geen timer aan het aftellen is.
function importMainContent1() {
     document.getElementById("main").innerHTML =
          '<div class="active-counter"><div class="counter-2"><h2><span class="days2" id="days"></span><span class="day-hour2" id="days2"></span><br><span class="hours2" id="hours"></span><span class="hour-minutes2" id="hours2"></span><span class="hours2" id="minutes"></span><span class="hour-minutes2" id="minutes2"></span><span class="hours2" id="seconds"></span><span class="hour-minutes2" id="seconds2"></span></h2><h3 class="h3Kleiner">until release</h3></div><div class="set-counter"><h3>Set a timer for your release.</h3><form><input type="datetime-local" id="setTimer" name="timeSet"><input type="button" value="Start" id="calculateTime" class="random-timer"></form></div></div>';
}

// Plaatst een teller in de pagina die nog opgevuld moet worden met de resterende tijd.
function importMainContent2() {
     document.getElementById("main").innerHTML =
          '<div class="active-counter"><div class="counter-1"><h2><span class="days" id="days"></span><span class="day-hour" id="days2"></span><br><span class="hours" id="hours"></span><span class="hour-minutes" id="hours2"></span><span class="hours" id="minutes"></span><span class="hour-minutes" id="minutes2"></span><span class="hours" id="seconds"></span><span class="hour-minutes" id="seconds2"></span></h2><h3>until release</h3></div></div>';
}

// Zet de timer placeholder op 0.
function emptyTimeSetting() {
     document.getElementById("days").innerHTML = "0 ";
     document.getElementById("days2").innerHTML = "days,";
     document.getElementById("hours").innerHTML = "0 ";
     document.getElementById("hours2").innerHTML = "hours, ";
     document.getElementById("minutes").innerHTML = "0 ";
     document.getElementById("minutes2").innerHTML = "minutes and ";
     document.getElementById("seconds").innerHTML = "0 ";
     document.getElementById("seconds2").innerHTML = "seconds left";
}

// Geeft de resterende tijd weer in de nog-in-te-vullen timer.
function showTimeSetting() {
     document.getElementById("days").innerHTML = window.localStorage.getItem(
          "timerSettingDays"
     );
     document.getElementById("days2").innerHTML = " days,";
     document.getElementById("hours").innerHTML = window.localStorage.getItem(
          "timerSettingHours"
     );
     document.getElementById("hours2").innerHTML = " hours, ";
     document.getElementById("minutes").innerHTML = window.localStorage.getItem(
          "timerSettingMinutes"
     );
     document.getElementById("minutes2").innerHTML = " minutes and ";
     document.getElementById("seconds").innerHTML = window.localStorage.getItem(
          "timerSettingSeconds"
     );
     document.getElementById("seconds2").innerHTML = " seconds left";
}

// Bereken of de timer al afgelopen is.
function isItDoneYet() {
     // Parsed de ingestelde tijd om te kunnen gebruiken tijdens de bewerking.
     var countdownDate4 = Date.parse(window.localStorage.getItem("timerSetting"));
     // Berekenen hoeveel tijd er tussen de ingestelde- en de eigen tijd zit.
     var distance = countdownDate4 - now;

     console.log("Eigen tijd in nummers: " + now);
     console.log("Ingestelde tijd in nummers: " + countdownDate4);
     console.log("Verschil tussen de ingestelde- en de eigen tijd: " + distance);
     console.log("");

     // Resterende dagen berekenen.
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     // Resterende uren berekenen.
     var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     // Resterende minuten berekenen.
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     // Resterende seconden berekenen.
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Logged de resterende tijd in de console.
     console.log(
          "Resterende dagen: " + window.localStorage.getItem("timerSettingDays")
     );
     console.log(
          "Resterende uren: " + window.localStorage.getItem("timerSettingHours")
     );
     console.log(
          "Resterende minuten: " +
          window.localStorage.getItem("timerSettingMinutes")
     );
     console.log(
          "Resterende seconden: " +
          window.localStorage.getItem("timerSettingSeconds")
     );
     console.log("");

     // Controleert of de timer is afgelopen.
     if (distance < 0) {
          // Importeerd een lege timer.
          importMainContent1();
          // Zet de timer placeholder op 0.
          emptyTimeSetting();
          console.log("Time's up");
          console.log("");

          // Reset de timer.
          clearInterval(timer);

          // Plaatst de datum van vandaag in de form als placeholder.
          document.getElementById("setTimer").value = today;

          // Wist de localstorage.
          localStorage.removeItem("timerSetting");
          localStorage.removeItem("timerSettingDays");
          localStorage.removeItem("timerSettingHours");
          localStorage.removeItem("timerSettingMinutes");
          localStorage.removeItem("timerSettingSeconds");

          // Controleert of ik toestemming heb gegeven voor notificaties.
          if (window.Notification && Notification.permission !== "denied") {
               Notification.requestPermission(function(status) {
                    // status is "granted", if accepted by user
                    var n = new Notification("Time's up!", {
                         body: "The timer you set has run out.",
                         icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARkSURBVGhD3dpnqBxVGIfxq8YWYsdEDXaxRyGCIoKoiYgFjCAYYsEOfhJFUBMIIliQ2PIliopBUbBhAUFFEQQbGDVoMMWGJrYPsWuM0fg8kAPD8M7uObsz9974h9+Hu+yeM7N75sw579yRDrIIf2NjD+vxArbHuM5xiE6gyVUY1zkT0YE3uQ3jOv+7EzoS0YE3uRjjPtdiNaITSH7E/ZiAzSJzEJ1I0m+onY83sRCTfGGsM8wJnY1/kd67DIdi1LMljsc8vIPqCdStwk04Edsg5SD8hPr7f8UZGJXsA7/xNagfSI4fcAeOxoebXovYfqfZEzmrgrZ8h06yBa6AM1XUcVcuR+vZAU8h6rBL96H17IFeYzziBb4c7+FjfI/ofb28herE0Up2x0pEHVY5Gz2K87AXouyM03EPck7QL8UJo7V4Y1uKqLPE62kudkRJtobLn88QtZs4E+6PVvIEok6S5zAFw8R90QJUb6h172MihsoliBqXnd8Kb6htxRXGn4j6k8N04HjdrEXUsC5DF3G18TuiPjfgWAyUexE1qtvRZc5F0/B7A8VxFfAXogY/gfWAO+H7usrNiPrXTBRlPqKG1sFJIP39G7yOnIrbzrb4AtX+E4+hKJ8jauhunALHcvV1p+0bMPQsVIv7omo/iVWjycjKdESN+Os4UZjTEK3lvoGVnLbu7M6gDvF6P7oUWbkOUQNPo5pDsALRez+F324bU/qNiPp4HFl5BlEDUUFjF7yM6P1yhXEBLoIX8iC/3FGI2vayyIqLyKiBgxFlK3htRZ+p8wSPQEncrkS72H+QVXn9A/UPO4X3q9A4pr3O6p+tc5FbOnm8i6itw9AzftvRBy1L5eQE5KygXVKV5HlE7Vh67pmdEH0we7wSawwfIGonuQUleQxROyejZ5p+oa9REpf6UTvJlShJ9WZe5bqvb6JryGujdAp+BfV25JfjSCiJRceorcPRNxb2og8fiJJ4J69fzF+i77gPEq36XbxmVVWfRf3D8n5SGn/VGbgGszFIWdeZLDqer5AV12RRA16YYxGL/9HxWH3KStNTODddpWO/jTRVmrKf/jlMvHCjRkqn22FzDqLjcJUwFdmxVh015K/U5aauGlcmTSttZ9Ci7Av3HFFjT2I00rTq11kozoOIGtP16DKnor6JTCxnuWAtjmP0F0SN2pnju4s4TTc9CPDecxIGztWIGpYn5f2lzTTthJNHMFT8aV9E1HjyMHwqMUzc+LkzbRpmcttRWmoOsxt8hBh1kvh0zWdGpTtSvzAL+/3ad4M3Da1lPzTdm6q+xV1wnG+HKK7oj4HPYpum5SoXxlaaWs8B6PdNVvmo0mHyOl7Cq/gIObva5Gf03fMME1fQryHqvG3+ev5nSudxaeQFHO2b2uDU/ABG/R8u3B9Z8moqqg/ibViXGNM4+zyEqNSUwyWWW+ziAnzXsUY2C/5/zhJYyI9OwJKYu+LFuBC7YrOJK3MLlE7TLmn2htN2RxkZ+Q/SzoSi3hNZIQAAAABJRU5ErkJggg==" // optional
                    });
               });
          }
          // Herlaad de pagina om een nieuwe timer in te kunnen stellen.
          window.location.reload();
     } else {
          // Wordt uitgevoerd als er nog meer dan 1 seconde resteert.
          if (seconds >= 1) {
               // Importeerd een nog-in-te-vullen timer.
               importMainContent2();
               // Geeft de resterende tijd weer in de nog-in-te-vullen timer.
               showTimeSetting();
          }
     }
}

// Resterende tijd berekenen en opslaan in localstorage.
function calculateRestingTime() {
     // Eigen tijd opvragen.
     now = new Date().getTime();

     // Resterende dagen opslaan in localstorage.
     window.localStorage.setItem(
          "timerSettingDays",
          Math.floor(
               (Date.parse(window.localStorage.getItem("timerSetting")) - now) /
               (1000 * 60 * 60 * 24)
          )
     );
     // Resterende uren opslaan in localstorage.
     window.localStorage.setItem(
          "timerSettingHours",
          Math.floor(
               ((Date.parse(window.localStorage.getItem("timerSetting")) - now) %
                    (1000 * 60 * 60 * 24)) /
               (1000 * 60 * 60)
          )
     );
     // Resterende minuten opslaan in localstorage.
     window.localStorage.setItem(
          "timerSettingMinutes",
          Math.floor(
               ((Date.parse(window.localStorage.getItem("timerSetting")) - now) %
                    (1000 * 60 * 60)) /
               (1000 * 60)
          )
     );
     // Resterende seconden opslaan in localstorage.
     window.localStorage.setItem(
          "timerSettingSeconds",
          Math.floor(
               ((Date.parse(window.localStorage.getItem("timerSetting")) - now) %
                    (1000 * 60)) /
               1000
          )
     );
}

// ---------------------- Localstorage check ---------------------- \\

// Kijkt na welke items in de localstorage er leeg zijn. Rapporteert de resultaten in de console.
console.log("%c %s", consoleCss2, "Localstorage: ");
console.log("timerSetting: " + window.localStorage.getItem("timerSetting"));
console.log(
     "timerSettingDays: " + window.localStorage.getItem("timerSettingDays")
);
console.log(
     "timerSettingHours: " + window.localStorage.getItem("timerSettingHours")
);
console.log(
     "timerSettingMinutes: " + window.localStorage.getItem("timerSettingMinutes")
);
console.log(
     "timerSettingSeconds: " + window.localStorage.getItem("timerSettingSeconds")
);

console.log("");

// ---------------------- setTimer value placeholder ---------------------- \\

var datePlaceholder = new Date();
const months = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec"
];

// Geeft elke data een variable.
var currentDay = datePlaceholder.getDate();
var currentMonth = datePlaceholder.getMonth() + 1;
var currentMonth2 = months[datePlaceholder.getMonth()];
var currentYear = datePlaceholder.getFullYear();
var currentHour = datePlaceholder.getHours();
var currentMinute = datePlaceholder.getMinutes();
var currentSeconds = datePlaceholder.getSeconds();

// Plaatst een "0" voor een nummer dat kleiner is dan 10, anders is er een error.
if (currentMonth < 10) currentMonth = "0" + currentMonth;
if (currentDay < 10) currentDay = "0" + currentDay;
if (currentHour < 10) currentHour = "0" + currentHour;
if (currentMinute < 10) currentMinute = "0" + currentMinute;
if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;

// Dateformat aanpassen om in de form te kunnen plaatsen.
var today =
     currentYear +
     "-" +
     currentMonth +
     "-" +
     currentDay +
     "T" +
     currentHour +
     ":" +
     currentMinute;

// Plaatst de datum van vandaag in de form als placeholder.
document.getElementById("setTimer").value = today;

// ---------------------- Date format ---------------------- \\

console.log("%c %s", consoleCss2, "Date format: ");
console.log("Huidige datum niet geformatteerd: " + datePlaceholder);
console.log(
     "Huidige datum geformatteerd: " +
     datePlaceholder.toLocaleDateString("en-EN", dateOptions)
);
console.log(
     "Ingestelde datum in timerSetting: " +
     window.localStorage.getItem("timerSetting")
);
console.log("");

// ---------------------- Calculating countdown timer ---------------------- \\

// Variabele maken van submit button.
var calculateTime = document.getElementById("calculateTime");
// Variabele maken van date form.
var setTimer = document.getElementById("setTimer").value;

// Controleert in de localstorage of er een datum is ingesteld in "timersetting".
if (localStorage.getItem("timerSetting") === null) {
     // Zet de timer placeholder op 0.
     emptyTimeSetting();
} else {
     // Importeerd een nog-in-te-vullen timer.
     importMainContent2();

     var timer = setInterval(function() {
          // Resterende tijd berekenen en opslaan in localstorage.
          calculateRestingTime();
          // Geeft de resterende tijd weer in de nog-in-te-vullen timer.
          showTimeSetting();
          // Bereken of de timer al afgelopen is.
          isItDoneYet();
     }, 1000);
}

// Start de timer on click.
calculateTime.addEventListener("click", function() {
     // Vraagt de ingestelde tijd uit de form op.
     setTimer = document.getElementById("setTimer").value;
     console.log("%c %s", consoleCss2, "Ingestelde datum: ");
     console.log("Ingestelde datum on click, niet geformatteerd: " + setTimer);

     // Maakt een variabele van de ingestelde tijd in 1 nummer.
     var countdownDate = new Date(setTimer).getTime();
     // Formatteerd de ingestelde tijd (wat is omgezet naar 1 nummer) naar de correcte format.
     var countdownDate2 = new Date(setTimer).toLocaleDateString(
          "en-EN",
          dateOptions
     );

     // Plaatst de ingestelde tijd in de localstorage onder de naam "timerSetting".
     window.localStorage.setItem("timerSetting", countdownDate2);
     console.log(
          "Datum opgeslagen in localstorage: " +
          window.localStorage.getItem("timerSetting")
     );
     console.log("");

     // Parsed de ingestelde tijd om te kunnen gebruiken tijdens de bewerking.
     var countdownDate3 = Date.parse(countdownDate2);
     // Parsed de ingestelde tijd om te kunnen gebruiken tijdens de bewerking.
     var countdownDate4 = Date.parse(window.localStorage.getItem("timerSetting"));

     console.log("%c %s", consoleCss2, "Countdown calculating: ");
     // CD2 = CD3 & CD4 maar dan parsed in nummers zoals CD1
     console.log("countdownDate (setTimer.getTime()): " + countdownDate);
     console.log(
          "countdownDate2 (setTimer.toLocalDateString()): " + countdownDate2
     );
     console.log(
          "countdownDate3 (date.parse(countdownDate2)): " + countdownDate3
     );
     console.log("countdownDate4 (date.parse(timersetting)): " + countdownDate4);
     console.log("");

     timer = setInterval(function() {
          // Resterende tijd berekenen en opslaan in localstorage.
          calculateRestingTime();
          // Bereken of de timer al afgelopen is.
          isItDoneYet();
     }, 1000);
});


// ---------------------- Serviceworker ---------------------- \\

console.log("%c %s", consoleCss2, "ServiceWorker: ");
if ("serviceWorker" in navigator) {
     // Gebruik een absolute path als je gebruik maakt van Github, anders werkt het niet! Zie https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e voor meer info.
	navigator.serviceWorker
		.register("/Countdown-timer/scripts/service-worker.js", {scope: "/Countdown-timer/scripts/"})
		.then(function(registration) {
		console.log("[serviceWorker] Registered. ");
	})
	.catch(function(err) {
		console.log("[serviceWorker] Failed to register. ", err);
	});
}

// ---------------------- HTTP request ---------------------- \\

// Function to perform HTTP request
var get = function(url) {
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var result = xhr.responseText;
                result = JSON.parse(result);
                resolve(result);
            } else {
                reject(xhr);
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();

  });
};

// Hier kan je de externe link opvragen.
get('https://api.nasa.gov/planetary/earth/imagery?api_key=fWfSMcDzyHfMuH3BW6jiIUBYaj3hKRyKBRTBqgEQ')
  .then(function(response) {
    // There is an issue with the image being pulled from the API, so using a different one instead.
    document.getElementsByClassName('targetImage')[0].src = "https://api.nasa.gov/images/earth.png";

  })
  .catch(function(err) {
    console.log("Error", err);
});
