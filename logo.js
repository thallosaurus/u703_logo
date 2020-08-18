/**
 * Main function that creates the logo. Gives back the complete logo as HTMLElement.
 *
 * @param {string} [pre="U"] The text that belongs in the first square
 * @param {string} [brand="703"] The text that belongs in the second square
 * @param {function} [onclick=null] Optional: Function that gets called when the logo receives an onclick-Event
 * @param {string} [font="default"] Optional: Set the css selector prefixed with font
 * @param {string} [size="tiny"] Optional: Set the size with CSS-Classes
 * @param {boolean} [dm=false] Optional: If true, it overrides the Darkmode setting
 * @returns HTMLElement
 */
function insert_u703(pre = "U", brand = "703", onclick = null, font = "default", size = "tiny", dm = false) {
    console.assert(brand != undefined, "Brand cannot be undefined");
    console.assert(pre != undefined, "pre cannot be undefined");

    let outer_span = document.createElement("span");
    outer_span.className = `logo logo-size-${size} font-${font}`;
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

function insert_logo(obj) {

    //data-size="xl" data-pre="U" data-brand="PRiSMFLUX" onclick="document.location = 'https://prismflux.de'"></span>

    let defaults = {
        pre: "U",
        brand: "703",
        onclick: null,
        font: "default",
        size: "tiny",
        dm: false
    }

    Object.assign(defaults, obj);

    return insert_u703(obj.pre,
        obj.brand,
        obj.onclick,
        obj.font,
        obj.size,
        obj.dm);
}

/* Object */
function LogoFactory(obj = {}) {
    let defaults = {
        pre: "U",
        brand: "703",
        onclick: null,
        font: "default",
        size: "tiny",
        dm: false
    }

    Object.assign(defaults, obj);

    return this.create(obj.pre,
        obj.brand,
        obj.onclick,
        obj.font,
        obj.size,
        obj.dm);
}

/**
 * Main function that creates the logo. Gives back the complete logo as HTMLElement.
 *
 * @param {string} [pre="U"] The text that belongs in the first square
 * @param {string} [brand="703"] The text that belongs in the second square
 * @param {function} [onclick=null] Optional: Function that gets called when the logo receives an onclick-Event
 * @param {string} [font="default"] Optional: Set the css selector prefixed with font
 * @param {string} [size="tiny"] Optional: Set the size with CSS-Classes
 * @param {boolean} [dm=false] Optional: If true, it overrides the Darkmode setting
 * @returns HTMLElement
 */
LogoFactory.prototype.create = function(pre = "U", brand = "703", onclick = null, font = "default", size = "tiny", dm = false) {
    console.assert(brand != undefined, "Brand cannot be undefined");
    console.assert(pre != undefined, "pre cannot be undefined");

    let outer_span = document.createElement("span");
    outer_span.className = `logo logo-size-${size} font-${font}`;
    if (dm) outer_span.className += " logo-colors-override"

    let black_span = document.createElement("span");
    black_span.className = "logo-blacked";
    black_span.innerText = pre;

    let white_span = document.createElement("span");
    white_span.className = "logo-whited";
    white_span.innerText = brand;

    outer_span.appendChild(black_span);
    outer_span.appendChild(white_span);

    console.log(onclick);

    if (typeof onclick === "function") {
        outer_span.onclick = onclick;
        outer_span.classList.add("pointer");
    }

    return outer_span;
}