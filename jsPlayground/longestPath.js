const obj = {
	a: {
		b: 1
	},
	c: 12,
}

// ["a", "a.b", "c"];

// longest chain is a, b

let strArray = [];
let str = "";
function longestChain(obj, str) {
	let height = 0;
	// base condition
	Object.keys(obj).forEach(child => {
		// logic to add to local string
		// str += child;
		console.log(child);
		if (typeof obj[child] === "object") {
			height += longestChain(child, str+child);
		}
		else {
			// add to str array
			strArray.push(str);
			return 1;

		}
	});
	// console.log(str);
	return height;
}

longestChain(obj, str);

// console.log(longestChain(o, str));
