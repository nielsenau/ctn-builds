
// this script fixes funky decimal rounding


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

// grab calc inputs
const inputs = document.querySelectorAll("[name='qty']");
// eval inputs
inputs.forEach(function(input) {
    //inputs listen for change 
    input.addEventListener("change", function(e) {
        const this_input = e.target; 
        const qty = parseFloat(e.target.value);
        const this_row = this_input.closest(".row");
        // call prices 
        const amazon = this_row.querySelector(".amazon");
        const amazon_span = amazon.querySelector("span");
        const amazon_price = parseFloat(amazon.dataset.price);
            // calc cost 
            const amazon_cost = qty * amazon_price; 
        
            amazon_span.innerHTML = round_number(amazon_cost); // output values by updating span within 'amazon' div with amazon_cost value
            amazon.classList.add("active");

        // call prices
        const freshdirect = this_row.querySelector(".freshdirect");
        const freshdirect_span = freshdirect.querySelector("span");
        const freshdirect_price = parseFloat(freshdirect.dataset.price);
            // calc cost 
            const freshdirect_cost = qty * freshdirect_price;
            
            freshdirect_span.innerHTML = round_number(freshdirect_cost); //output values 
            freshdirect.classList.add("active");

        // call prices
        const peapod = this_row.querySelector(".peapod");
        const peapod_span = peapod.querySelector("span");
        const peapod_price = parseFloat(peapod.dataset.price); 
            // calc cost 
            const peapod_cost = qty * peapod_price;
            peapod_span.innerHTML = round_number(peapod_cost); //output values 
            peapod.classList.add("active");

    // compare prices and pick least expensive vendor, defaulting to amazon

    let cheap = false; 

    // if freshdirect or peapod are cheaper than amazon or each other, update them to cheapest
    if (freshdirect_cost < amazon_cost && freshdirect_cost < peapod_cost) {
        cheap = freshdirect;
    }
    if (amazon_cost < freshdirect_cost && amazon_cost < peapod_cost) {
        cheap = amazon;
    }

    if (peapod_cost < amazon_cost && peapod_cost < freshdirect_cost) {
        cheap = peapod;
    }
    // add cheap class to 'winner' 
    const current_cheap = this_row.querySelector(".cheap");
       /*
        *  if current_cheap exists
        */ 

        if (current_cheap) {
            current_cheap.classList.remove("cheap");
        }
if (cheap) {
    cheap.classList.add("cheap");
    }
    });
});