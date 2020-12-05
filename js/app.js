function warningInput(search_input) {
  // const col_lg_4 = document.querySelector(".col-lg-4");
  // const warningInput = document.createElement("p");
  // col_lg_4.appendChild(warningInput);
  // return (warningInput.innerHTML = "Mohon masukkan nama Provinsi lengkap");
}

function loadData(warningInput) {
  const cases = document.querySelectorAll(".tracking-case");
  const map_cases = document.querySelectorAll(".tracker-map-case");

  const [positive_case_text, recover_case_text, death_case_text] = [...cases];
  const [positive_case_map, recover_case_map, death_case_map] = [...map_cases];

  const search_btn = document.querySelector(".search-btn");
  const search_input = document.querySelector(".form-control");
  search_btn.addEventListener("click", function () {
    fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((data) => data.json())
      .then((data) => {
        const dataCovid = data.data;
        dataCovid.forEach((allData) => {
          const [positive_case, recover_case, death_case] = [
            allData.kasusPosi,
            allData.kasusSemb,
            allData.kasusMeni,
          ];
          if (search_input.value == allData.provinsi) {
            positive_case_text.lastElementChild.lastElementChild.innerHTML = positive_case;
            recover_case_text.lastElementChild.lastElementChild.innerHTML = recover_case;
            death_case_text.lastElementChild.lastElementChild.innerHTML = death_case;

            positive_case_map.lastElementChild.innerHTML = positive_case;
            recover_case_map.lastElementChild.innerHTML = recover_case;
            death_case_map.lastElementChild.innerHTML = death_case;
          } else {
          }
        });
      });
  });
}

loadData();
