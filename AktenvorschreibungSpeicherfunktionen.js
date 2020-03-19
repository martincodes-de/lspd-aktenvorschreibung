// Variablendeklaration

  // Strafsacheakte

  var $input_schwerstestraftatStrafsacheakte;
  var $input_einsatzortStrafsacheakte;
  var $input_datumStrafsacheakte;
  var $input_uhrzeitStrafsacheakte;
  var $input_straftatenStrafsacheakte;
  var $input_aussehenStrafsacheakte;
  var $input_geschehenStrafsacheakte;
  var $input_zeugenStrafsacheakte;
  var $input_beweismittelStrafsacheakte;

  // Bußgeldakte

  var $input_einsatzortBussgeldakte;
  var $input_datumBussgeldakte;
  var $input_uhrzeitBussgeldakte;
  var $input_bussgeldBussgeldakte;
  var $input_geschehenBussgeldakte;
  var $input_strafeBussgeldakte;
  var $input_kommentarBussgeldakte;

// Cookiefunktionen

  // Cookie erstellen

  function setCookie(cookiename, cookiewertdurchVAR) {

    // Variablen - Datum

    var $datumHeute = new Date();
    var $datumAbgelaufen = new Date($datumHeute.getTime() + 30 * 24 * 3600 * 1000);

    document.cookie = cookiename + "=" + cookiewertdurchVAR + ";" + "expires=" + $datumAbgelaufen + ";path=/";

  }

  // Cookie auslesen

  function getCookie(cookiename) {

    var name = cookiename + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";

  }

  // Cookie löschen

  function delCookie(cookiename) {

    // Variablen - Datum

    var $datumHeute = new Date();

    document.cookie = cookiename + "=" + "" + ";" + "expires=" + $datumHeute + ";path=/";

  }

// Speicherfunktionen

  // Speicherfunktion: Strafsacheakte

  function speichernStrafsacheakte() {

    // Wertsetzung

    $input_schwerstestraftatStrafsacheakte = document.getElementById("schwerstestraftatStrafsacheakte").value;
    $input_einsatzortStrafsacheakte = document.getElementById("einsatzortStrafsacheakte").value;
    $input_datumStrafsacheakte = document.getElementById("datumStrafsacheakte").value;
    $input_uhrzeitStrafsacheakte = document.getElementById("uhrzeitStrafsacheakte").value;
    $input_straftatenStrafsacheakte = document.getElementById("straftatenStrafsacheakte").value;
    $input_aussehenStrafsacheakte = document.getElementById("aussehenStrafsacheakte").value;
    $input_geschehenStrafsacheakte = document.getElementById("geschehenStrafsacheakte").value;
    $input_zeugenStrafsacheakte = document.getElementById("zeugenStrafsacheakte").value;
    $input_beweismittelStrafsacheakte = document.getElementById("beweismittelStrafsacheakte").value;

    // Cookiesetzung

    setCookie("schwerstestraftatStrafsacheakte", $input_schwerstestraftatStrafsacheakte);
    setCookie("einsatzortStrafsacheakte", $input_einsatzortStrafsacheakte);
    setCookie("datumStrafsacheakte", $input_datumStrafsacheakte);
    setCookie("uhrzeitStrafsacheakte", $input_uhrzeitStrafsacheakte);
    setCookie("straftatenStrafsacheakte", $input_straftatenStrafsacheakte);
    setCookie("aussehenStrafsacheakte", $input_aussehenStrafsacheakte);
    setCookie("geschehenStrafsacheakte", $input_geschehenStrafsacheakte);
    setCookie("zeugenStrafsacheakte", $input_zeugenStrafsacheakte);
    setCookie("beweismittelStrafsacheakte", $input_beweismittelStrafsacheakte);

    // Alert

    alert("Strafsacheakte erfolgreich im Browsercache gespeichert.");

  }

  // Speichern Bußgeldakte

  function speichernBussgeldakte() {

    // Wertsetzung

    $input_einsatzortBussgeldakte = document.getElementById("einsatzortBussgeldakte").value;
    $input_datumBussgeldakte = document.getElementById("datumBussgeldakte").value;
    $input_uhrzeitBussgeldakte = document.getElementById("uhrzeitBussgeldakte").value;
    $input_bussgeldBussgeldakte = document.getElementById("bussgeldBussgeldakte").value;
    $input_geschehenBussgeldakte = document.getElementById("geschehenBussgeldakte").value;
    $input_strafeBussgeldakte = document.getElementById("strafeBussgeldakte").value;
    $input_kommentarBussgeldakte = document.getElementById("kommentarBussgeldakte").value;

    // Cookiesetzung

    setCookie("einsatzortBussgeldakte", $input_einsatzortBussgeldakte);
    setCookie("datumBussgeldakte", $input_datumBussgeldakte);
    setCookie("uhrzeitBussgeldakte", $input_uhrzeitBussgeldakte);
    setCookie("bussgeldBussgeldakte", $input_bussgeldBussgeldakte);
    setCookie("geschehenBussgeldakte", $input_geschehenBussgeldakte);
    setCookie("strafeBussgeldakte", $input_strafeBussgeldakte);
    setCookie("kommentarBussgeldakte", $input_kommentarBussgeldakte);
    // Alert

    alert("Bußgeldakte erfolgreich im Browsercache gespeichert.");

  }

// Löschfunktionen

  // Löschfunktion: Strafsacheakte

  function loeschenStrafsacheakte() {

    if (confirm("Strafakte löschen? Sie ist für immer weg!")) {

        delCookie("schwerstestraftatStrafsacheakte");
        delCookie("einsatzortStrafsacheakte");
        delCookie("datumStrafsacheakte");
        delCookie("uhrzeitStrafsacheakte");
        delCookie("straftatenStrafsacheakte");
        delCookie("aussehenStrafsacheakte");
        delCookie("geschehenStrafsacheakte");
        delCookie("zeugenStrafsacheakte");
        delCookie("beweismittelStrafsacheakte");
        alert("Löschvorgang erfolgreich durchgeführt. Tool wird neugeladen.");
        location.reload();

    } else {

        alert("Löschvorgang abgebrochen.");

    }

  }

  // Löschfunktion: Bußgeldakte

  function loeschenBussgeldakte() {

    if (confirm("Bußgeldakte löschen? Sie ist für immer weg!")) {

        delCookie("einsatzortBussgeldakte");
        delCookie("datumBussgeldakte");
        delCookie("uhrzeitBussgeldakte");
        delCookie("bussgeldBussgeldakte");
        delCookie("geschehenBussgeldakte");
        delCookie("strafeBussgeldakte");
        delCookie("kommentarBussgeldakte");
        alert("Löschvorgang erfolgreich durchgeführt. Tool wird neugeladen.");
        location.reload();

    } else {

        alert("Löschvorgang abgebrochen.");

    }

  }


// Auto-Aktenladefunktionen

  function ladenAlles() {

    function ladenStrafsacheakte() {

      document.getElementById("schwerstestraftatStrafsacheakte").value = getCookie("schwerstestraftatStrafsacheakte");
      document.getElementById("einsatzortStrafsacheakte").value = getCookie("einsatzortStrafsacheakte");
      document.getElementById("datumStrafsacheakte").value = getCookie("datumStrafsacheakte");
      document.getElementById("uhrzeitStrafsacheakte").value = getCookie("uhrzeitStrafsacheakte");
      document.getElementById("straftatenStrafsacheakte").value = getCookie("straftatenStrafsacheakte");
      document.getElementById("aussehenStrafsacheakte").value = getCookie("aussehenStrafsacheakte");
      document.getElementById("geschehenStrafsacheakte").value = getCookie("geschehenStrafsacheakte");
      document.getElementById("zeugenStrafsacheakte").value = getCookie("zeugenStrafsacheakte");
      document.getElementById("beweismittelStrafsacheakte").value = getCookie("beweismittelStrafsacheakte");

    }

    function ladenBussgeldakte() {

      document.getElementById("einsatzortBussgeldakte").value = getCookie("einsatzortBussgeldakte");
      document.getElementById("datumBussgeldakte").value = getCookie("datumBussgeldakte");
      document.getElementById("uhrzeitBussgeldakte").value = getCookie("uhrzeitBussgeldakte");
      document.getElementById("bussgeldBussgeldakte").value = getCookie("bussgeldBussgeldakte");
      document.getElementById("geschehenBussgeldakte").value = getCookie("geschehenBussgeldakte");
      document.getElementById("strafeBussgeldakte").value = getCookie("strafeBussgeldakte");
      document.getElementById("kommentarBussgeldakte").value = getCookie("kommentarBussgeldakte");

    }

    ladenStrafsacheakte();
    ladenBussgeldakte();

  }

console.log("Console gefunden, sehr gut.");
