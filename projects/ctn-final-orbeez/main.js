// ANNOTATED IMAGE JS 

const boxs = document.querySelectorAll(".box");

boxs.forEach(function(box) {
    box.addEventListener("click", function(e) {
        e.preventDefault();
        const clicked_box = e.target.closest(".box");
        if (clicked_box.classList.contains("active")) {
            clicked_box.classList.remove("active");
        } else {
            clicked_box.classList.add("active");
        }
    });
});

// FILTER JS 

// pull filter value on dropdown click
const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_diagram = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_diagram}`);

// remove active class  

    currently_visible.forEach(function (diagram) {
        diagram.classList.remove("active");
    });

// add active class  

    make_visible.forEach(function (diagram) {
        diagram.classList.add("active");
    });

});

