// THEME TOGGLE
let themeChange = () => {
	document.querySelector(".theme").classList.toggle("light-card");
	document.querySelector("nav").classList.toggle("light-card");
	document.querySelector(".question").classList.toggle("light-card");
	document.querySelector("body").classList.toggle("light");
	document
		.querySelectorAll(".map-desc")
		.forEach((el) => el.classList.toggle("light-desc"));
	document
		.querySelectorAll(".agent-bg")
		.forEach((el) => el.classList.toggle("light-card"));
	document
		.querySelectorAll(".agent-img")
		.forEach((el) => el.classList.toggle("agent-shadow"));
	document
		.querySelectorAll(".agent-desc")
		.forEach((el) => el.classList.toggle("light-hover"));
};

let themeBtn = document.querySelector(".theme");
themeBtn.addEventListener("click", themeChange);

// INFO BUTTON
let pageInfo = () => {
	alert(
		`This page is an ongoing project and is likely to change as I expand my skillset! Enjoy information about the Valorant agents in the meantime. 🥳`
	);
};

let infoBtn = document.querySelector(".question");
infoBtn.addEventListener("click", pageInfo);

// AGENT MATCH
let agentMatch = () => {
	let name = prompt("What is your name?");
	let preference = prompt("Do you enjoy playing on a team?");
	let role = prompt(
		"Of the four options, which best describes you: aggressive, strategic, defensive, or supportive?"
	);

	preference = preference.toLowerCase().trim();
	role = role.toLowerCase().trim();

	if (preference === "yes" && role === "aggressive") {
		alert(
			`${name}, you'd be a great fit as a Duelist. Aggressive players are needed for entry and protecting teammates to allow them to complete the objective. They are especially important during attack-related tactics.`
		);
		alert(`Try playing Phoenix, Jett, Reyna, Yoru, or Neon!`);
	} else if (preference === "yes" && role === "strategic") {
		alert(
			`${name}, you'd be a great fit as an Initiator. It's important that the initiator is levelheaded and strategic in order to help your teammates to complete the objective.`
		);
		alert(`Try playing Sova, Breach, Skye, KAY/O, or Fade!`);
	} else if (preference === "yes" && role === "defensive") {
		alert(
			`${name}, you'd be a great fit as a Controller. Controllers are imperative as their abilities regulate match dynamics.`
		);
		alert(`Try playing Brimstone, Viper, Omen, Astra or Harbor!`);
	} else if (preference === "yes" && role === "supportive") {
		alert(
			`${name}, you'd be a great fit as a Sentinel. Sentinels are known for their supportive abilities that help their team survive and are especially strong for defensive tactics.`
		);
		alert(`Try playing Killjoy, Cypher, Sage or Chamber!`);
	} else {
		alert(
			"Valorant is a team-based game that requires each team member to play a specific role to complete the overall match objective. It's important that you enjoy playing as a team and also, individually in your role!"
		);
	}
};

let matchHeroBtn = document.querySelector("#hero-match");
matchHeroBtn.addEventListener("click", agentMatch);

let matchFooterBtn = document.querySelector("#footer-match");
matchFooterBtn.addEventListener("click", agentMatch);
