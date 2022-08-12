
// this script fixes funky decimal rounding
// snippet pulled from fruit price calc exercise 


function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

// this script runs calculations 
// there is definitely a way to make this repeat so it isn't this long incorporating my low and high values for the pay range, but I'm not remembering it easily, so this is every step drawn out 

// grab calc inputs
const inputs = document.querySelectorAll("[name='hours']");
// eval inputs
inputs.forEach(function(input) {
    //inputs listen for change 
    input.addEventListener("change", function(e) {
        const this_input = e.target; 
        const hours = parseFloat(e.target.value);
        const this_row = this_input.closest(".row");
        // call hourly rate and calculate total earnings for NJ, CT, and NY low-end of payrate 
        const nj = this_row.querySelector(".nj");
        const nj_span = nj.querySelector("span");
        const nj_price = parseFloat(nj.dataset.price);
            const nj_cost = hours * nj_price; 
            nj_span.innerHTML = round_number(nj_cost); // output values by updating span within 'nj' div with nj_cost value
            nj.classList.add("active");

        const ny = this_row.querySelector(".ny");
        const ny_span = ny.querySelector("span");
        const ny_price = parseFloat(ny.dataset.price);
            const ny_cost = hours * ny_price;
            ny_span.innerHTML = round_number(ny_cost); //output values 
            ny.classList.add("active");
        const ct = this_row.querySelector(".ct");
        const ct_span = ct.querySelector("span");
        const ct_price = parseFloat(ct.dataset.price); 
            const ct_cost = hours * ct_price;
            ct_span.innerHTML = round_number(ct_cost); //output values 
            ct.classList.add("active");

        //repeat above with higer end of payrate for each state 
        const nj_high = this_row.querySelector(".nj_high");
        const nj_high_span = nj_high.querySelector("span");
        const nj_high_price = parseFloat(nj_high.dataset.price);
            const nj_high_cost = hours * nj_high_price; 
            nj_high_span.innerHTML = round_number(nj_high_cost); // output values
            nj_high.classList.add("active");

        const ct_high = this_row.querySelector(".ct_high");
        const ct_high_span = ct_high.querySelector("span");
        const ct_high_price = parseFloat(ct_high.dataset.price);
            const ct_high_cost = hours * ct_high_price; 
            ct_high_span.innerHTML = round_number(ct_high_cost); // output values
            ct_high.classList.add("active");

        const ny_high = this_row.querySelector(".ny_high");
        const ny_high_span = ny_high.querySelector("span");
        const ny_high_price = parseFloat(ny_high.dataset.price);
            const ny_high_cost = hours * ny_high_price; 
            ny_high_span.innerHTML = round_number(ny_high_cost); // output values
            ny_high.classList.add("active");

    });
});