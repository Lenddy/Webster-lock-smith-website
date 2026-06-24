const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "A-Z_Folders"); // Change if needed

// Function to create folders recursively
const createFolders = (parentPath, level) => {
	for (let i = 65; i <= 90; i++) {
		const folderName = String.fromCharCode(i) + (level > 0 ? `_Sub${"_Child".repeat(level - 1)}` : "");
		const folderPath = path.join(parentPath, folderName);

		if (!fs.existsSync(folderPath)) {
			fs.mkdirSync(folderPath);
			console.log(`Created folder: ${folderPath}`);
		}

		// Create the next level if needed
		if (level < 2) {
			createFolders(folderPath, level + 1);
		}
	}
};

// Ensure base directory exists
if (!fs.existsSync(baseDir)) {
	fs.mkdirSync(baseDir);
}

// Start the folder creation
createFolders(baseDir, 0);

console.log("All folders created!");
