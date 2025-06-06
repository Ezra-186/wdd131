const products = [
    { id: "fc-1889", name: "f1u1 capacitor", averagerating: 4.5 },
    { id: "fc-2959", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2860", name: "low voltage reactor", averagerating: 3.8 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.8 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(({ id, name }) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = name;
        productSelect.append(option);
    });

    const form = document.getElementById("review-form");
    const requiredFields = [
        document.getElementById("product"),
        document.getElementById("installation")
    ];
    const starInputs = Array.from(
        document.querySelectorAll('input[name="rating"]')
    );
    const starContainer = document.querySelector(".star-rating");

    form.addEventListener("submit", (e) => {
        let valid = true;
        requiredFields.forEach((el) => el.classList.remove("error"));
        starContainer.classList.remove("invalid");

        requiredFields.forEach((el) => {
            if (!el.value) {
                el.classList.add("error");
                valid = false;
            }
        });

        const starChecked = starInputs.some((input) => input.checked);
        if (!starChecked) {
            starContainer.classList.add("invalid");
            valid = false;
        }

        if (!valid) e.preventDefault();
    });

    requiredFields.forEach((el) => {
        el.addEventListener("input", () => el.classList.remove("error"));
    });

    starInputs.forEach((input) => {
        input.addEventListener("change", () => {
            starContainer.classList.remove("invalid");
        });
    });
});
  