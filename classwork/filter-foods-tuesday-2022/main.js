// pull filter value on dropdown click
const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_food = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_food}`);

// remove active class  

    currently_visible.forEach(function (food) {
        food.classList.remove("active");
    });

// add active class  

    make_visible.forEach(function (food) {
        food.classList.add("active");
    });

});

