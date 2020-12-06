import { dropdown } from "./dropdown.js";

// function createProvince(allData) {
//   const ul = document.querySelector("ul");
//   for (const allDatas of allData) {
//     const province_name = document.createElement("li");
//     province_name.setAttribute("class", "province-name");
//     province_name.innerHTML = allDatas;
//     ul.appendChild(province_name);
//   }
// }
function loadData() {
  const cases = document.querySelectorAll(".tracking-case");
  const map_cases = document.querySelectorAll(".tracker-map-case");

  const [positive_case_text, recover_case_text, death_case_text] = [...cases];
  const [positive_case_map, recover_case_map, death_case_map] = [...map_cases];

  // * Mengambil Data dari API
  fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((response) => response.json())
    .then((data) => {
      const allData = data.data;
      const ul = document.querySelector("ul");
      for (const allDatas of allData) {
        const province_name = document.createElement("li");
        province_name.setAttribute("class", "province-name");
        province_name.innerHTML = allDatas.provinsi;
        ul.appendChild(province_name);
        // * Ketika Provinsi pada dropdown dipilih/di click maka lakukan ini
        province_name.addEventListener("click", (e) => {
          setTimeout(() => {
            province_name.parentElement.previousElementSibling.firstElementChild.innerHTML =
              e.target.innerHTML;
            // * Mengisi jumlah kasus Positif
            positive_case_text.lastElementChild.lastElementChild.innerHTML =
              allDatas.kasusPosi;
            // * Mengisi Jumlah Kasus Sembuh
            recover_case_text.lastElementChild.lastElementChild.innerHTML =
              allDatas.kasusSemb;
            // * Mengisi Jumlah Kasus Meninggal
            death_case_text.lastElementChild.lastElementChild.innerHTML =
              allDatas.kasusMeni;
            //?===========================================================================
            // * Mengisi Jumlah Kasus Positif (Pada bagian Map)
            positive_case_map.lastElementChild.innerHTML = allDatas.kasusPosi;
            // * Mengisi Jumlah Kasus Sembuh (Pada bagian Map)
            recover_case_map.lastElementChild.innerHTML = allDatas.kasusSemb;
            // * Mengisi Jumlah Kasus Meninggal (Pada bagian Map)
            death_case_map.lastElementChild.innerHTML = allDatas.kasusMeni;
          }, 2000);
        });
      }
    });
}
dropdown();

loadData();
