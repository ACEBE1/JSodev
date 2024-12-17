let name = prompt("Adınız nedir?"); 
let nameDOM = document.querySelector("#myName");

// Boş veya iptal durumu kontrolü
if (name) {
  nameDOM.innerHTML = name;
} else {
  nameDOM.innerHTML = "Misafir";
}

// Tarih ve saati sürekli güncelle
function showTime() {
  let date = new Date();

  // Tarih ve saat formatlama
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");

  let day = date.toLocaleDateString("tr-TR", { weekday: "long" });
  let fullDate = `${day}, ${hours}:${minutes}:${seconds}`;

  let dateDOM = document.querySelector("#myClock");
  dateDOM.innerHTML = fullDate;
}

// Zamanı sürekli güncelle
setInterval(showTime, 1000);
showTime(); // Sayfa yüklendiğinde hemen göster
