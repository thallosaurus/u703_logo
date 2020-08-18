window.onload = function() {
    var q = document.querySelectorAll(".preview").forEach(function(e) {
        //label
        let label = document.createElement("p");
        label.innerText = "Size: " + e.dataset.size;
        e.appendChild(label);
        e.appendChild(new LogoFactory(e.dataset));
    });
}