// pull filter value on dropdown click
const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_diagnosis = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_diagnosis}`);

// remove active class  

    currently_visible.forEach(function (diagnosis) {
        diagnosis.classList.remove("active");
    });

// add active class  

    make_visible.forEach(function (diagnosis) {
        diagnosis.classList.add("active");
    });

});

