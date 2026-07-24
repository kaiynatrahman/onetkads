const clients = [
  { name: "Canva", type: "Design tools", site: "https://www.canva.com/", icon: "https://cdn.simpleicons.org/canva/F97316", color: "#F97316" },
  { name: "Shopify", type: "E-commerce", site: "https://www.shopify.com/", icon: "https://cdn.simpleicons.org/shopify/556DCB", color: "#556DCB" },
  { name: "Notion", type: "Productivity", site: "https://www.notion.so/", icon: "https://cdn.simpleicons.org/notion/171A27", color: "#171A27" },
  { name: "Figma", type: "Design tools", site: "https://www.figma.com/", icon: "https://cdn.simpleicons.org/figma/F97316", color: "#F97316" },
  { name: "Slack", type: "Team chat", site: "https://slack.com/", icon: "https://cdn.simpleicons.org/slack/556DCB", color: "#556DCB" },
  { name: "Stripe", type: "Payments", site: "https://stripe.com/", icon: "https://cdn.simpleicons.org/stripe/556DCB", color: "#556DCB" },
  { name: "Duolingo", type: "Learning", site: "https://www.duolingo.com/", icon: "https://cdn.simpleicons.org/duolingo/F97316", color: "#F97316" },
  { name: "GitHub", type: "Developer tools", site: "https://github.com/", icon: "https://cdn.simpleicons.org/github/171A27", color: "#171A27" },
  { name: "Loom", type: "Video messaging", site: "https://www.loom.com/", icon: "https://cdn.simpleicons.org/loom/F97316", color: "#F97316" },
  { name: "Linear", type: "Project management", site: "https://linear.app/", icon: "https://cdn.simpleicons.org/linear/556DCB", color: "#556DCB" },
  { name: "Webflow", type: "Web creation", site: "https://webflow.com/", icon: "https://cdn.simpleicons.org/webflow/171A27", color: "#171A27" },
  { name: "Vercel", type: "Cloud platform", site: "https://vercel.com/", icon: "https://cdn.simpleicons.org/vercel/171A27", color: "#171A27" },
  { name: "Zoom", type: "Video meetings", site: "https://zoom.us/", icon: "https://cdn.simpleicons.org/zoom/556DCB", color: "#556DCB" },
  { name: "Dropbox", type: "Cloud storage", site: "https://www.dropbox.com/", icon: "https://cdn.simpleicons.org/dropbox/F97316", color: "#F97316" },
  { name: "Medium", type: "Publishing", site: "https://medium.com/", icon: "https://cdn.simpleicons.org/medium/171A27", color: "#171A27" },
  { name: "Airbnb", type: "Travel", site: "https://www.airbnb.com/", icon: "https://cdn.simpleicons.org/airbnb/F97316", color: "#F97316" },
  { name: "Spotify", type: "Music", site: "https://www.spotify.com/", icon: "https://cdn.simpleicons.org/spotify/556DCB", color: "#556DCB" },
  { name: "Pinterest", type: "Inspiration", site: "https://www.pinterest.com/", icon: "https://cdn.simpleicons.org/pinterest/F97316", color: "#F97316" },
  { name: "Mailchimp", type: "Marketing", site: "https://mailchimp.com/", icon: "https://cdn.simpleicons.org/mailchimp/171A27", color: "#171A27" },
  { name: "Discord", type: "Community", site: "https://discord.com/", icon: "https://cdn.simpleicons.org/discord/556DCB", color: "#556DCB" },
  { name: "OpenAI", type: "Artificial intelligence", site: "https://openai.com/", icon: "https://cdn.simpleicons.org/openai/171A27", color: "#171A27" },
  { name: "Framer", type: "Web design", site: "https://www.framer.com/", icon: "https://cdn.simpleicons.org/framer/F97316", color: "#F97316" },
  { name: "Asana", type: "Team planning", site: "https://asana.com/", icon: "https://cdn.simpleicons.org/asana/556DCB", color: "#556DCB" },
  { name: "Behance", type: "Creative network", site: "https://www.behance.net/", icon: "https://cdn.simpleicons.org/behance/171A27", color: "#171A27" },
  { name: "Unsplash", type: "Photography", site: "https://unsplash.com/", icon: "https://cdn.simpleicons.org/unsplash/F97316", color: "#F97316" }
];

const grid = document.querySelector("#ad-grid");
if (grid) {
  clients.forEach((client) => {
    const card = document.createElement("a");
    card.className = "ad-card";
    card.href = client.site;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.style.setProperty("--accent", client.color);
    card.setAttribute("aria-label", `Visit ${client.name} website`);
    card.innerHTML = `<span class="ad-card__logo"><img src="${client.icon}" alt="" /><span>${client.name}</span></span><span class="ad-card__type">${client.type}</span>`;
    grid.appendChild(card);
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
