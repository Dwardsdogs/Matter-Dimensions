function openTab(tabName, btn) {
	document.querySelectorAll(".tab-content").forEach(tab => {
		tab.style.display = "none";
  });

  const target = document.getElementById(tabName);
	if (target) {
		target.style.display = "flex";
	}
	const group = btn.closest(".tab-group");
	if (btn.classList.contains("small")) {
		const container = btn.closest(".sub-tabs");
		container.querySelectorAll(".tab-btn.small").forEach(b => {
		b.classList.remove("active");
		});
		btn.classList.add("active");
		document.querySelectorAll(".tab-group").forEach(g => {
		g.classList.remove("selected-tab");
		});
		group.classList.add("selected-tab");
	}
	else {
		document.querySelectorAll(".tab-group").forEach(g => {
		g.classList.remove("selected-tab");
		});
		group.classList.add("selected-tab");
		const activeSmall = group.querySelector(".tab-btn.small.active");
		if (activeSmall) {
		openTab(activeSmall.getAttribute("onclick").match(/'(.*?)'/)[1], activeSmall);
		return;
		}
	}
}

openTab('main', document.getElementById("open-dimensions-tab"));