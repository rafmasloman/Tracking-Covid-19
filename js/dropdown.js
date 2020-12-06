function dropdown() {
  const province_list = document.querySelector("ul");
  const dropdown_btn = document.querySelector(".dropdown-btn");
  console.log(dropdown_btn);
  dropdown_btn.addEventListener("click", (e) => {
    e.preventDefault();
    province_list.classList.toggle("show");
    dropdown_btn.classList.toggle("dropdown-btn-change");
  });
}
export { dropdown };
