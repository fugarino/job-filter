import data from "./data.json" assert { type: "json" };

// Selectors
const main = document.querySelector(".main");

// Functions
const mappedData = data.map((job) => {
  // Cards
  const card = document.createElement("div");
  card.classList.add("card");
  main.appendChild(card);
  // Card Logo
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = job.logo;
  card.appendChild(logo);
  console.log(job.logo);
  // Card Info
  const info = document.createElement("div");
  info.classList.add("info");
  card.appendChild(info);
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
});
