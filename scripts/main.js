import list from "./list.js";
import { setCountdown } from "./countdown.js";

function main() {
  const containerEl = document.querySelector("#orgs");

  const fragment = document.createDocumentFragment();

  list.forEach((org) => {
    const listItem = document.createElement("li");
    listItem.style.backgroundImage = `url(${org.image})`;
    listItem.className = "org";

    listItem.setAttribute("title", `${org.name} (${org.country})`);
    if (org.denounced) {
      listItem.dataset.denounced = "1";
    }

    const orgName = document.createElement("span");
    orgName.innerHTML = `${org.name}<br />(${org.country})`;
    orgName.className = "org-name";

    listItem.appendChild(orgName);
    fragment.appendChild(listItem);
  });

  containerEl.appendChild(fragment);

  setCountdown();
}

main();
