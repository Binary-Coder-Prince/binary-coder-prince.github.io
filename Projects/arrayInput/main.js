// Taking elements from index.html:

const arr = [];
let i = 0;
let inputBox = document.getElementById("cityInp");
let adder = document.getElementById("adder");
let removerBtn = document.getElementById("remover");
let retriever = document.getElementById("retriever");
let logFile = document.getElementById("log");
let logedConsole = document.getElementById("loged");
let clearBtn = document.getElementById('clearOut');

// Creating function for clearing the output after a certain time:
function outputClearer() {
	setTimeout(() => {
		logedConsole.innerHTML = "";
		logFile.innerHTML = "";
	}, 2500);
}

// Creating functions for 'storing data for analytics' by elements:

function addingDatas() {
	let textInp = inputBox.value;
	if (arr.includes(textInp) === true) {
		logFile.innerHTML = `Name ( ${textInp} ) is already in the list please choose another one!`;
		outputClearer();
	} else {
		logFile.innerHTML = `Adding the name of city ( ${textInp} )...`;
		arr[i] = textInp;
		if (logFile.innerHTML !== "") {
			setTimeout(() => {
				logedConsole.innerHTML = "Added the name of city into data.";
				outputClearer();
			}, 500);
		}
		i++;
	}
}

// Creating function for removing arrays items from the array:
function remover() {
	let textInp = inputBox.value;
	if (arr.includes(textInp)) {
		let index = arr.indexOf(textInp);
		arr.splice(index, 1);
		logFile.innerHTML = `Removed the element ( ${textInp} ) from the data.`;
		outputClearer();
	} else {
		logFile.innerHTML = `City ( ${textInp} ) is not in the list.`;
		setTimeout(() => {
			logedConsole.innerHTML = `If you want to add it then press add button.`;
			outputClearer();
		}, 500);
	}
}

// Creating function for retreiving the value of array:
function retrieving() {
	if (arr.length === 0) {
		logFile.innerHTML = "Sorry there is no data loaded.";
		logedConsole.innerHTML = "To add data in the data base click on the add button!";
		clearBtn.style.display = 'block'
	} else {
		logFile.innerHTML = `The values you added in the data are:-`;
		logedConsole.innerHTML = `( ${arr.join(", ")} )`;
		clearBtn.style.display = 'block'
	}
}

// Adding events to the elements:
adder.addEventListener("click", () => {
	addingDatas();
});

removerBtn.addEventListener("click", () => {
	remover();
});

retriever.addEventListener("click", () => {
	retrieving();
});

clearBtn.addEventListener('click', () => {
	logFile.innerHTML = '';
	logedConsole.innerHTML = '';
})