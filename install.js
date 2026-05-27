// JS knows Shell? I don't know how!
#!/usr/bin/env node

// Function to handle the custom installer animation
function startInstallation() {
    console.log("⚠️  WARNING: FLASHING LIGHTS / INTENSE FLICKER");
    console.log("The following installation uses a high-speed terminal animation (1ms refresh rate).");
    console.log("If you are sensitive to flashing lights, please close this terminal now (Ctrl + C).\n");
    console.log("Starting installation in 3 seconds...");

    // Give the user 3 seconds to read the warning before the fast loop kicks off
    setTimeout(() => {
        const frames = ["\\", "&", "/", ".", "\\"];
        let index = 0;

        console.log("\n📥 Installing acmodule: *ComputerManage...\n");

        // Start the infinite loop changing every 1 millisecond
        const loadingLoop = setInterval(() => {
            // \r overwrites the current line
            process.stdout.write(`\r[ Installing ] ${frames[index]}`);
            index = (index + 1) % frames.length;
        }, 1);
      
        setTimeout(() => {
            clearInterval(loadingLoop); // Stop the infinite loop safely
            
            process.stdout.write("\r\n\n"); 
            console.log("// ////////////////////////////////////////////////////////////////////////////////// //");
            console.log("Welcome to ComputerManage by AC/AhmedAC                                               //");
            console.log("// ////////////////////////////////////////////////////////////////////////////////// //\n");
            console.log("🟢 Installation complete! You can now use *ComputerManage functions.");
        }, 3000); 

    }, 3000); // 3-second delay for the warning screen
}

// Run the setup script
startInstallation();
