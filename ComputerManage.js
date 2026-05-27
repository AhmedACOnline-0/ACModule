const fs = require('fs');
const path = require('path');

/**
 * FUNC: folder.pick(Disk:\folder\path)
 * Validates if the requested directory exists on the system.
 */
function folderPick(diskPath) {
    if (!diskPath) {
        console.log("Error: No path provided to folder.pick()");
        return null;
    }

    console.log(`Checking directory path: ${diskPath}`);
    
    // Check if the directory path exists on the machine
    if (fs.existsSync(diskPath)) {
        console.log(`Success: Valid folder location picked.`);
        return diskPath;
    } else {
        console.log(`Error: The folder path "${diskPath}" could not be found.`);
        return null;
    }
}

/**
 * FUNC: folder.picked(codeHere)
 * Executes custom Node.js automation logic inside a folder once validated.
 */
function folderPicked(targetPath, automationCallback) {
    // Guard clause: stop immediately if the path is invalid
    if (!targetPath) {
        console.log("Execution halted: folder.picked target path is invalid.");
        return;
    }
    
    console.log(`Target directory locked: ${targetPath}`);
    console.log("[ComputerManage Engine]: Injecting JS operational code block...\n");
    
    // Execute the custom block of code passed down from the user
    try {
        automationCallback(targetPath);
    } catch (error) {
        console.error("Runtime Error during folder.picked automation:", error.message);
    }
}

// REGISTER ALL FUNCTIONS FOR THE ECOSYSTEM EXPORTS
module.exports = {
    folderPick,
    folderPicked
};
