function loadData() {
  const cases = document.querySelectorAll(".tracking-case");
  const map_cases = document.querySelectorAll(".tracker-map-case");

  const [positive_case_text, recover_case_text, death_case_text] = [...cases];
  const [positive_case_map, recover_case_map, death_case_map] = [...map_cases];

  const search_btn = document.querySelector(".search-btn");
  const search_input = document.querySelector(".form-control");
  search_btn.addEventListener("click", function () {
    fetch(
      "https://opendata.arcgis.com/datasets/0c0f4558f1e548b68a1c82112744bad3_0.geojson"
    )
      .then((data) => data.json())
      .then((data) => {
        const dataCovid = data.features;
        dataCovid.forEach((allData) => {
          const [positive_case, recover_case, death_case] = [
            allData.properties.Kasus_Posi,
            allData.properties.Kasus_Semb,
            allData.properties.Kasus_Meni,
          ];
          if (search_input.value == allData.properties.Provinsi) {
            positive_case_text.lastElementChild.lastElementChild.innerHTML = positive_case;
            recover_case_text.lastElementChild.lastElementChild.innerHTML = recover_case;
            death_case_text.lastElementChild.lastElementChild.innerHTML = death_case;

            positive_case_map.lastElementChild.innerHTML = positive_case;
            recover_case_map.lastElementChild.innerHTML = recover_case;
            death_case_map.lastElementChild.innerHTML = death_case;
          }
        });
      });
  });
}

loadData();
