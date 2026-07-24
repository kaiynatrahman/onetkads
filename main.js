const clients = [
  { name: "Canva", type: "Design tools", color: "#F97316" },
  { name: "Shopify", type: "E-commerce", color: "#556DCB" },
  { name: "Notion", type: "Productivity", color: "#171A27" },
  { name: "Figma", type: "Design tools", color: "#F97316" },
  { name: "Slack", type: "Team chat", color: "#556DCB" },
  { name: "Stripe", type: "Payments", color: "#556DCB" },
  { name: "Duolingo", type: "Learning", color: "#F97316" },
  { name: "GitHub", type: "Developer tools", color: "#171A27" },
  { name: "Loom", type: "Video messaging", color: "#F97316" },
  { name: "Linear", type: "Project management", color: "#556DCB" },
  { name: "Webflow", type: "Web creation", color: "#171A27" },
  { name: "Vercel", type: "Cloud platform", color: "#171A27" },
  { name: "Zoom", type: "Video meetings", color: "#556DCB" },
  { name: "Dropbox", type: "Cloud storage", color: "#F97316" },
  { name: "Medium", type: "Publishing", color: "#171A27" },
  { name: "Airbnb", type: "Travel", color: "#F97316" },
  { name: "Spotify", type: "Music", color: "#556DCB" },
  { name: "Pinterest", type: "Inspiration", color: "#F97316" },
  { name: "Mailchimp", type: "Marketing", color: "#171A27" },
  { name: "Discord", type: "Community", color: "#556DCB" },
  { name: "OpenAI", type: "Artificial intelligence", color: "#171A27" },
  { name: "Framer", type: "Web design", color: "#F97316" },
  { name: "Asana", type: "Team planning", color: "#556DCB" },
  { name: "Behance", type: "Creative network", color: "#171A27" },
  { name: "Unsplash", type: "Photography", color: "#F97316" },
  { name: "Dribbble", type: "Creative community", color: "#F97316" },
  { name: "GitLab", type: "Code collaboration", color: "#556DCB" },
  { name: "Trello", type: "Team planning", color: "#171A27" },
  { name: "Miro", type: "Visual collaboration", color: "#F97316" },
  { name: "Reddit", type: "Online community", color: "#556DCB" },
  { name: "Telegram", type: "Messaging", color: "#556DCB" },
  { name: "WordPress", type: "Website platform", color: "#171A27" },
  { name: "Khan Academy", type: "Online learning", color: "#F97316" },
  { name: "Product Hunt", type: "Product discovery", color: "#F97316" },
  { name: "Coursera", type: "Online courses", color: "#556DCB" },
  { name: "WhatsApp", type: "Messaging", color: "#556DCB" },
  { name: "Google", type: "Search & cloud", color: "#556DCB" },
  { name: "Microsoft", type: "Software", color: "#F97316" },
  { name: "Apple", type: "Technology", color: "#171A27" },
  { name: "Netflix", type: "Entertainment", color: "#F97316" },
  { name: "Nike", type: "Sportswear", color: "#171A27" },
  { name: "Coca-Cola", type: "Beverages", color: "#F97316" },
  { name: "Samsung", type: "Electronics", color: "#556DCB" },
  { name: "Adobe", type: "Creative software", color: "#F97316" },
  { name: "LinkedIn", type: "Professional network", color: "#556DCB" },
  { name: "X", type: "Social network", color: "#171A27" },
  { name: "Amazon", type: "Online retail", color: "#F97316" },
  { name: "Etsy", type: "Marketplace", color: "#556DCB" }
];

const sizePattern = ["size-feature", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-tall", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-tall", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-tall", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-small", "size-small", "size-medium", "size-small", "size-small", "size-medium"];
sizePattern.push("size-wide-row", "size-medium-row", "size-double-row", "size-double-row", "size-double-row", "size-small-row", "size-small-row", "size-small-row", "size-small-row", "size-small-row", "size-small-row", "size-small-row");
const cardPalette = clients.map((_, index) => {
  const hue = (index * 47) % 360;
  return { bg: `hsl(${hue} 82% 84%)`, text: "#171A27", muted: `hsl(${hue} 48% 32%)` };
});

const brandTooltip = document.createElement("div");
brandTooltip.className = "brand-tooltip";
brandTooltip.setAttribute("role", "tooltip");
brandTooltip.setAttribute("aria-hidden", "true");
document.body.appendChild(brandTooltip);
const mobileBatches = ["first", "second", "third"].map((name) => {
  const batch = document.createElement("div");
  batch.className = `ad-batch ad-batch--${name}`;
  return batch;
});
const mobileSizeShuffle = ["mobile-short", "mobile-tall", "mobile-short", "mobile-medium", "mobile-short", "mobile-feature", "mobile-medium", "mobile-short"];const grid = document.querySelector("#ad-grid");
if (grid) {
  mobileBatches.forEach((batch) => grid.appendChild(batch));
  clients.forEach((client, index) => {
    const card = document.createElement("div");
    const tone = cardPalette[index % cardPalette.length];
    card.className = `ad-card ${sizePattern[index]}`;
    card.classList.add(mobileSizeShuffle[(index * 5 + 2) % mobileSizeShuffle.length]);
    card.dataset.brand = client.name;

    card.style.setProperty("--accent", client.color);
    card.style.setProperty("--card-bg", tone.bg);
    card.style.setProperty("--card-text", tone.text);
    card.style.setProperty("--card-muted", tone.muted);
    card.setAttribute("role", "group");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", client.name);
    card.innerHTML = `<span class="ad-card__index">${String(index + 1).padStart(2, "0")}</span><span class="ad-card__type">${client.type}</span>`;
    const showBrandTooltip = () => {
      const rect = card.getBoundingClientRect();
      brandTooltip.textContent = client.name;
      brandTooltip.style.left = `${Math.min(Math.max(rect.left + rect.width / 2, 90), window.innerWidth - 90)}px`;
      brandTooltip.style.top = `${Math.max(rect.top - 10, 8)}px`;
      brandTooltip.classList.add("is-visible");
      brandTooltip.setAttribute("aria-hidden", "false");
    };
    const hideBrandTooltip = () => {
      brandTooltip.classList.remove("is-visible");
      brandTooltip.setAttribute("aria-hidden", "true");
    };
    card.addEventListener("mouseenter", showBrandTooltip);
    card.addEventListener("mouseleave", hideBrandTooltip);
    card.addEventListener("focus", showBrandTooltip);
    card.addEventListener("blur", hideBrandTooltip);
    const batchIndex = index < 9 ? 0 : index < 17 ? 1 : 2;
    mobileBatches[batchIndex].appendChild(card);
  });
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.querySelector("span").textContent = open ? "×" : "+";
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
  if (toggle) toggle.querySelector("span").textContent = "+";
}));









