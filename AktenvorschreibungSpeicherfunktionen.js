// Verison ohne Cookies

// Variablendeklaration

// Strafsacheakte

var $input_personenidentifikationStrafsacheakte;
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

var $input_personenidentifikationBussgeldakte;
var $input_einsatzortBussgeldakte;
var $input_datumBussgeldakte;
var $input_uhrzeitBussgeldakte;
var $input_bussgeldBussgeldakte;
var $input_geschehenBussgeldakte;
var $input_strafeBussgeldakte;
var $input_kommentarBussgeldakte;

// Speicherfunktionen

// Speicherfunktion: Strafsacheakte

function speichernStrafsacheakte() {

  // Wertsetzung

  $input_personenidentifikationStrafsacheakte = document.getElementById("personenindentifikationStrafsacheakte").value;
  $input_schwerstestraftatStrafsacheakte = document.getElementById("schwerstestraftatStrafsacheakte").value;
  $input_einsatzortStrafsacheakte = document.getElementById("einsatzortStrafsacheakte").value;
  $input_datumStrafsacheakte = document.getElementById("datumStrafsacheakte").value;
  $input_uhrzeitStrafsacheakte = document.getElementById("uhrzeitStrafsacheakte").value;
  $input_straftatenStrafsacheakte = document.getElementById("straftatenStrafsacheakte").value;
  $input_aussehenStrafsacheakte = document.getElementById("aussehenStrafsacheakte").value;
  $input_geschehenStrafsacheakte = document.getElementById("geschehenStrafsacheakte").value;
  $input_zeugenStrafsacheakte = document.getElementById("zeugenStrafsacheakte").value;
  $input_beweismittelStrafsacheakte = document.getElementById("beweismittelStrafsacheakte").value;

  // Speichersetzung

  localStorage.setItem("personenindentifikationStrafsacheakte", $input_personenidentifikationStrafsacheakte);
  localStorage.setItem("schwerstestraftatStrafsacheakte", $input_schwerstestraftatStrafsacheakte);
  localStorage.setItem("einsatzortStrafsacheakte", $input_einsatzortStrafsacheakte);
  localStorage.setItem("datumStrafsacheakte", $input_datumStrafsacheakte);
  localStorage.setItem("uhrzeitStrafsacheakte", $input_uhrzeitStrafsacheakte);
  localStorage.setItem("straftatenStrafsacheakte", $input_straftatenStrafsacheakte);
  localStorage.setItem("aussehenStrafsacheakte", $input_aussehenStrafsacheakte);
  localStorage.setItem("geschehenStrafsacheakte", $input_geschehenStrafsacheakte);
  localStorage.setItem("zeugenStrafsacheakte", $input_zeugenStrafsacheakte);
  localStorage.setItem("beweismittelStrafsacheakte", $input_beweismittelStrafsacheakte);

  // Alert

  alert("Strafsacheakte erfolgreich im Browsercache gespeichert.");

}

// Speichern Bußgeldakte

function speichernBussgeldakte() {

  // Wertsetzung

  $input_personenidentifikationBussgeldakte = document.getElementById("personenindentifikationBussgeldakte").value;
  $input_einsatzortBussgeldakte = document.getElementById("einsatzortBussgeldakte").value;
  $input_datumBussgeldakte = document.getElementById("datumBussgeldakte").value;
  $input_uhrzeitBussgeldakte = document.getElementById("uhrzeitBussgeldakte").value;
  $input_bussgeldBussgeldakte = document.getElementById("bussgeldBussgeldakte").value;
  $input_geschehenBussgeldakte = document.getElementById("geschehenBussgeldakte").value;
  $input_strafeBussgeldakte = document.getElementById("strafeBussgeldakte").value;
  $input_kommentarBussgeldakte = document.getElementById("kommentarBussgeldakte").value;

  // Speichersetzung

  localStorage.setItem("personenindentifikationBussgeldakte", $input_personenidentifikationBussgeldakte);
  localStorage.setItem("einsatzortBussgeldakte", $input_einsatzortBussgeldakte);
  localStorage.setItem("datumBussgeldakte", $input_datumBussgeldakte);
  localStorage.setItem("uhrzeitBussgeldakte", $input_uhrzeitBussgeldakte);
  localStorage.setItem("bussgeldBussgeldakte", $input_bussgeldBussgeldakte);
  localStorage.setItem("geschehenBussgeldakte", $input_geschehenBussgeldakte);
  localStorage.setItem("strafeBussgeldakte", $input_strafeBussgeldakte);
  localStorage.setItem("kommentarBussgeldakte", $input_kommentarBussgeldakte);

  // Alert

  alert("Bußgeldakte erfolgreich im Browsercache gespeichert.");

}

// Löschfunktionen

// Löschfunktion: Strafsacheakte

function loeschenStrafsacheakte() {
  localStorage.removeItem("personenindentifikationStrafsacheakte");
  localStorage.removeItem("schwerstestraftatStrafsacheakte");
  localStorage.removeItem("einsatzortStrafsacheakte");
  localStorage.removeItem("datumStrafsacheakte");
  localStorage.removeItem("uhrzeitStrafsacheakte");
  localStorage.removeItem("straftatenStrafsacheakte");
  localStorage.removeItem("aussehenStrafsacheakte");
  localStorage.removeItem("geschehenStrafsacheakte");
  localStorage.removeItem("zeugenStrafsacheakte");
  localStorage.removeItem("beweismittelStrafsacheakte");
  location.reload();
}

// Löschfunktion: Bußgeldakte

function loeschenBussgeldakte() {
  localStorage.removeItem("personenindentifikationBussgeldakte");
  localStorage.removeItem("einsatzortBussgeldakte");
  localStorage.removeItem("datumBussgeldakte");
  localStorage.removeItem("uhrzeitBussgeldakte");
  localStorage.removeItem("bussgeldBussgeldakte");
  localStorage.removeItem("geschehenBussgeldakte");
  localStorage.removeItem("strafeBussgeldakte");
  localStorage.removeItem("kommentarBussgeldakte");
  location.reload();
}


// Auto-Aktenladefunktionen

function ladenAlles() {

  function ladenStrafsacheakte() {

    document.getElementById("personenindentifikationStrafsacheakte").value = localStorage.getItem("personenindentifikationStrafsacheakte");
    document.getElementById("schwerstestraftatStrafsacheakte").value = localStorage.getItem("schwerstestraftatStrafsacheakte");
    document.getElementById("einsatzortStrafsacheakte").value = localStorage.getItem("einsatzortStrafsacheakte");
    document.getElementById("datumStrafsacheakte").value = localStorage.getItem("datumStrafsacheakte");
    document.getElementById("uhrzeitStrafsacheakte").value = localStorage.getItem("uhrzeitStrafsacheakte");
    document.getElementById("straftatenStrafsacheakte").value = localStorage.getItem("straftatenStrafsacheakte");
    document.getElementById("aussehenStrafsacheakte").value = localStorage.getItem("aussehenStrafsacheakte");
    document.getElementById("geschehenStrafsacheakte").value = localStorage.getItem("geschehenStrafsacheakte");
    document.getElementById("zeugenStrafsacheakte").value = localStorage.getItem("zeugenStrafsacheakte");
    document.getElementById("beweismittelStrafsacheakte").value = localStorage.getItem("beweismittelStrafsacheakte");

  }

  function ladenBussgeldakte() {

    document.getElementById("personenindentifikationBussgeldakte").value = localStorage.getItem("personenindentifikationBussgeldakte");
    document.getElementById("einsatzortBussgeldakte").value = localStorage.getItem("einsatzortBussgeldakte");
    document.getElementById("datumBussgeldakte").value = localStorage.getItem("datumBussgeldakte");
    document.getElementById("uhrzeitBussgeldakte").value = localStorage.getItem("uhrzeitBussgeldakte");
    document.getElementById("bussgeldBussgeldakte").value = localStorage.getItem("bussgeldBussgeldakte");
    document.getElementById("geschehenBussgeldakte").value = localStorage.getItem("geschehenBussgeldakte");
    document.getElementById("strafeBussgeldakte").value = localStorage.getItem("strafeBussgeldakte");
    document.getElementById("kommentarBussgeldakte").value = localStorage.getItem("kommentarBussgeldakte");

  }

  ladenStrafsacheakte();
  ladenBussgeldakte();

}

console.log("Console gefunden, sehr gut.");