function layoutVerticalTabs() {
  document.querySelectorAll(".sd-tab-set.vertical-part-tabs").forEach((tabSet) => {
    const labels = tabSet.querySelectorAll(":scope > label.sd-tab-label");
    const panels = tabSet.querySelectorAll(":scope > .sd-tab-content");
    const count = labels.length;

    tabSet.style.gridTemplateRows = `repeat(${count}, auto)`;

    labels.forEach((label, index) => {
      label.style.gridColumn = "1";
      label.style.gridRow = String(index + 1);
    });

    panels.forEach((panel) => {
      panel.style.gridColumn = "2";
      panel.style.gridRow = `1 / span ${count}`;
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", layoutVerticalTabs);
} else {
  layoutVerticalTabs();
}