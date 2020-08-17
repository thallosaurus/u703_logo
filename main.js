window.onload = function() {
    let logo = insert_u703("U", "703");

    document.querySelectorAll(".preview").forEach((e) => {
        //label
        let label = document.createElement("p");
        label.innerText = "Size: " + e.dataset.size;
        e.appendChild(label);
        e.appendChild(insert_u703(e.dataset.pre, e.dataset.brand, e.onclick, e.dataset.size));
    });
}