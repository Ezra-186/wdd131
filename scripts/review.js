document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product") || "";
    const rating = params.get("rating") || "";
    const installation = params.get("installation") || "";
    const reviewText = params.get("review") || "";
    const userName = params.get("username") || "";
    const featuresSelected = params.getAll("features");

    const products = [
        { id: "fc-1889", name: "f1u1 capacitor", averagerating: 4.5 },
        { id: "fc-2959", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2860", name: "low voltage reactor", averagerating: 3.8 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.8 },
    ];
    const chosenProduct = products.find((p) => p.id === productId);
    const productName = chosenProduct ? chosenProduct.name : "Unknown product";

    function formatDate(iso) {
        if (!iso) return "—";
        const d = new Date(iso);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    const ul = document.getElementById("review-details");
    function addDetail(label, value) {
        const li = document.createElement("li");
        li.textContent = `${label}: ${value}`;
        ul.appendChild(li);
    }

    addDetail("Product", productName);
    addDetail("Rating", rating);
    addDetail("Date of Installation", formatDate(installation));
    addDetail(
        "Useful Features",
        featuresSelected.length ? featuresSelected.join(", ") : "None selected"
    );
    addDetail(
        "Written Review",
        reviewText.trim() ? reviewText.trim() : "No written review provided"
    );
    addDetail("Reviewer Name", userName.trim() ? userName.trim() : "Anonymous");

    const ref = document.referrer;
    const searchKey = window.location.search;
    const lastQuery = sessionStorage.getItem("lastQuery") || "";
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;
    if (ref.includes("form.html") && lastQuery !== searchKey) {
        count += 1;
        localStorage.setItem("reviewCount", count);
        sessionStorage.setItem("lastQuery", searchKey);
    }

    document.getElementById("review-count").textContent = count;
    document.getElementById("plural").textContent = count === 1 ? "" : "s";

    document.getElementById("last-modified").textContent =
        new Date(document.lastModified).toLocaleString("en-US");
});
  