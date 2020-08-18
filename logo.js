/* Object */
function LogoFactory(obj = {}) {
    let defaults = {
        pre: "U",
        brand: "703",
        font: "barlow",
        size: "tiny",
        dm: false,
        borders: false
    }

    Object.assign(defaults, obj);
    console.log(defaults);

    return this.create(
        defaults.pre,
        defaults.brand,
        defaults.font,
        defaults.size,
        defaults.dm,
        defaults.borders);
}

/**
 * Main function that creates the logo. Gives back the complete logo as HTMLElement.
 *
 * @param {string} pre The text that belongs in the first square
 * @param {string} brand The text that belongs in the second square
 * @param {function} onclick Optional: Function that gets called when the logo receives an onclick-Event
 * @param {string} font Optional: Set the css selector prefixed with font
 * @param {string} size Optional: Set the size with CSS-Classes
 * @param {boolean} dm Optional: If true, it overrides the Darkmode setting
 * @returns HTMLElement
 */
LogoFactory.prototype.create = function(pre, brand, font, size, dm, borders) {
    console.assert(brand != undefined, "Brand cannot be undefined");
    console.assert(pre != undefined, "pre cannot be undefined");
    console.assert(font != undefined, "Font can't be undefined");
    console.assert(size != undefined, "Size can't be undefined");

    let outer_span = document.createElement("span");
    outer_span.className = `logo logo-size-${size} font-${font}`;
    if (dm) outer_span.classList.add("logo-colors-override");
    if (borders) outer_span.classList.add("logo-border");

    let black_span = document.createElement("span");
    black_span.className = "logo-blacked";
    black_span.innerText = pre;

    let white_span = document.createElement("span");
    white_span.className = "logo-whited";
    white_span.innerText = brand;

    outer_span.appendChild(black_span);
    outer_span.appendChild(white_span);

    console.log(onclick);

    return outer_span;
}

function initLogo(domSelector = ".preview") {
    document.querySelectorAll(domSelector).forEach(function(e) {
        //label
        let label = document.createElement("p");
        label.innerText = "Size: " + e.dataset.size;
        e.appendChild(label);
        e.appendChild(new LogoFactory(e.dataset));
    });
}