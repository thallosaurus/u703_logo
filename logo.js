/**
 * Main function that creates the logo. Gives back the complete logo as HTMLElement.
 *
 * @param {*} pre The text that belongs in the first square
 * @param {*} brand The text that belongs in the second square
 * @param {*} [onclick=null] Optional: Function that gets called when the logo receives an onclick-Event
 * @param {string} [size="tiny"] Optional: Set the size with CSS-Classes
 * @param {boolean} [dm=false] Optional: If true, it overrides the Darkmode setting
 * @returns HTMLElement
 */
function insert_u703(pre, brand, onclick = null, size = "tiny", dm = false) {
    console.assert(brand != undefined, "Brand cant be undefined");
    console.assert(pre != undefined, "pre cannot be undefined");

    let outer_span = document.createElement("span");
    outer_span.className = "logo logo-size-" + size;
    if (dm) outer_span.className += " logo-colors-override"

    let black_span = document.createElement("span");
    black_span.className = "logo-blacked";
    black_span.innerText = pre;

    let white_span = document.createElement("span");
    white_span.className = "logo-whited";
    white_span.innerText = brand;

    outer_span.appendChild(black_span);
    outer_span.appendChild(white_span);

    if (typeof onclick === "function") {
        outer_span.onclick = onclick;
        outer_span.classList.add("pointer");
    }

    return outer_span;
}

/*
Files for Logo:
logo.css
logo.js
colors.css
*/