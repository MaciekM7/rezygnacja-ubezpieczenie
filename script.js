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
