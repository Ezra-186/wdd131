const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "images/Nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "images/Manti.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "images/Payson.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "images/Guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "images/Washington.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "images/Peru.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "images/Mexico.webp"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "1966-04-17",
        area: 14000,
        imageUrl: "images/Italy.webp"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980-11-27",
        area: 10230,
        imageUrl: "images/Tokyo.webp"
    },
    {
        templeName: "Sydney Australia",
        location: "Sydney, Australia",
        dedicated: "1984-09-20",
        area: 21400,
        imageUrl: "images/Sydney.webp"
    }
];

function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const suffix = (d => {
        if (d > 3 && d < 21) return "th";
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    })(day);
    return `${month} ${day}${suffix}, ${year}`;
}

function displayTemples(list) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    list.forEach(t => {
        const fig = document.createElement("figure");
        fig.innerHTML = `
        <img
          src="${t.imageUrl}"
          alt="Photo of ${t.templeName}"
          loading="lazy"
          width="400"
          height="300"
        >
        <figcaption>
          <h3>${t.templeName}</h3>
          <p>${t.location}</p>
          <p>Dedicated: ${formatDate(t.dedicated)}</p>
          <p>Size: ${t.area.toLocaleString()} ft²</p>
        </figcaption>`;
        gallery.append(fig);
    });
}

function filterTemples(type) {
    switch (type) {
        case "old":
            displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
            break;
        case "new":
            displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
            break;
        case "large":
            displayTemples(temples.filter(t => t.area > 90000));
            break;
        case "small":
            displayTemples(temples.filter(t => t.area < 10000));
            break;
        default:
            displayTemples(temples);
    }
}

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        filterTemples(link.dataset.filter);
    });
});

const btn = document.getElementById("hamburger");
const nav = document.querySelector(".navigation");
btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

displayTemples(temples);
  