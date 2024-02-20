function addContainerVisibility() {
  const container = document.getElementById("my-container");
  container.classList.add("visible-container");
}

function osobaPrywatnaVisible() {
  document.getElementById("firma").classList.remove("input-visible");
  document.getElementById("regon").classList.remove("input-visible");
  document.getElementById("email").classList.remove("input-visible");
  document.getElementById("phone").classList.remove("input-visible");
  document.getElementById("polisa").classList.remove("input-visible");
  document.getElementById("imie").classList.add("input-visible");
  document.getElementById("nazwisko").classList.add("input-visible");
  document.getElementById("urodzenia").classList.add("input-visible");
  document.getElementById("email").classList.add("input-visible");
  document.getElementById("phone").classList.add("input-visible");
  document.getElementById("polisa").classList.add("input-visible");
  document
    .getElementById("info-container")
    .classList.remove("info-container-shorter");
}

function firmaVisible() {
  document.getElementById("imie").classList.remove("input-visible");
  document.getElementById("nazwisko").classList.remove("input-visible");
  document.getElementById("urodzenia").classList.remove("input-visible");
  document.getElementById("email").classList.remove("input-visible");
  document.getElementById("phone").classList.remove("input-visible");
  document.getElementById("polisa").classList.remove("input-visible");
  document.getElementById("firma").classList.add("input-visible");
  document.getElementById("regon").classList.add("input-visible");
  document.getElementById("email").classList.add("input-visible");
  document.getElementById("phone").classList.add("input-visible");
  document.getElementById("polisa").classList.add("input-visible");
  document
    .getElementById("info-container")
    .classList.add("info-container-shorter");
}

function validate() {
  const validationAlert = document.getElementById("validationAlert");
  const radioFirma = document.getElementById("firmaRadio").checked;
  const radioOsoba = document.getElementById("osobaRadio").checked;
  const imie = document.getElementById("imie");
  const nazwisko = document.getElementById("nazwisko");
  const firma = document.getElementById("firma");
  const regon = document.getElementById("regon");
  const urodzenia = document.getElementById("urodzenia");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email.value)) {
    if (radioOsoba) {
      if (imie.value != "" && nazwisko.value != "") {
        window.location.href = "success.html";
      } else {
        validationAlert.innerText = "Błąd w podanych danych.";
      }
    } else if (radioFirma) {
      if (firma.value != "" && regon.value != "") {
        window.location.href = "success.html";
      } else {
        validationAlert.innerText = "Błąd w podanych danych.";
      }
    }
  } else {
    document.getElementById("validationAlert").innerText =
      "Wpisany adres e-mail jest nieprawidłowy";
  }
}
