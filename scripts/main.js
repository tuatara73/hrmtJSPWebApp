import list from "./list.js";

function main() {
  const containerEl = document.querySelector("#leaders");

  const fragment = document.createDocumentFragment();

  list.forEach((leader) => {
    const listItem = document.createElement("li");
    listItem.style.backgroundImage = `url(${leader.image})`;
    listItem.className = "leader";

    listItem.setAttribute("title", `${leader.name} (${leader.country})`);
    if (leader.denounced) {
      listItem.dataset.denounced = "1";
    }

    const leaderName = document.createElement("span");
    leaderName.innerHTML = `${leader.name}<br />(${leader.country})`;
    leaderName.className = "leader-name";

    listItem.appendChild(leaderName);
    fragment.appendChild(listItem);
  });

  containerEl.appendChild(fragment);
}

main();
N;
