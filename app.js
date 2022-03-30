import data from "./data.json" assert { type: "json" };

// Selectors
const main = document.querySelector(".main");

// Functions
const cardComponent = (array) => {
  array.forEach((job) => {
    // Cards
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    main.appendChild(cardDiv);
    // Card Logo
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = job.logo;
    cardDiv.appendChild(logo);
    // Card Info
    const info = document.createElement("div");
    info.classList.add("info");
    cardDiv.appendChild(info);
    // Card Info Company Name / New / Featured
    const company = document.createElement("div");
    company.classList.add("company");
    info.appendChild(company);
    // Card Info Company Name
    const companyName = document.createElement("h5");
    companyName.classList.add("company-name");
    companyName.textContent = job.company;
    company.appendChild(companyName);
    // Card Info Company New
    const newBadge = document.createElement("div");
    newBadge.classList.add("new-badge");
    newBadge.textContent = job.new ? "NEW!" : "";
    if (job.new) {
      company.appendChild(newBadge);
    }
    // Card Info Company Featured
    const featuredBadge = document.createElement("div");
    featuredBadge.classList.add("featured-badge");
    featuredBadge.textContent = job.featured ? "FEATURED" : "";
    if (job.featured) {
      company.appendChild(featuredBadge);
    }
    // Card Info Position
    const position = document.createElement("h3");
    position.classList.add("position");
    position.textContent = job.position;
    info.appendChild(position);
    // Card Info Details
    const details = document.createElement("div");
    details.classList.add("details");
    info.appendChild(details);
    // Card Info Details Posted At
    const timePosted = document.createElement("div");
    timePosted.classList.add("timePosted");
    timePosted.textContent = job.postedAt;
    details.appendChild(timePosted);
    // Card Info Details divider
    const divider = document.createElement("div");
    divider.classList.add("divider");
    divider.textContent = "•";
    details.appendChild(divider);
    // Card Info Details contract
    const contractDiv = document.createElement("div");
    contractDiv.classList.add("contract-div");
    contractDiv.textContent = job.contract;
    details.appendChild(contractDiv);
    // Card Info Details divider2
    const divider2 = document.createElement("div");
    divider2.classList.add("divider");
    divider2.textContent = "•";
    details.appendChild(divider2);
    // Card Info Details location
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
    locationDiv.textContent = job.location;
    details.appendChild(locationDiv);
  });
};

const filteredData = data.filter((job) => job);

cardComponent(filteredData);

// EventListeners
