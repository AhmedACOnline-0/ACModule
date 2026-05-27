#!/usr/bin/env node
const fs = require('fs');
const https = require('https');

// Capture terminal inputs
const command = process.argv[2];
const moduleName = process.argv[3];

if (command === "install" && moduleName === "*ComputerManage") {
    
    // --- 1. FLASHING LIGHTS WARNING ---
    console.log("⚠️  WARNING: FLASHING LIGHTS / INTENSE FLICKER");
    console.log("The following installation uses a high-speed terminal animation (1ms refresh rate).");
    console.log("If you are sensitive to flashing lights, please close this terminal now (Ctrl + C).\n");
    console.log("Starting installation in 3 seconds...");

    setTimeout(() => {
        const frames = ["\\", "&", "/", ".", "\\"];
        let index = 0;

        console.log(`\n📥 Installing acmodule: ${moduleName}...\n`);

        // --- 2. THE 1MS INFINITE LOADING LOOP ---
        const loadingLoop = setInterval(() => {
            process.stdout.write(`\r[ Installing ] ${frames[index]}`);
            index = (index + 1) % frames.length;
        }, 1);

        // --- 3. THE LIVE WEB DOWNLOAD (PULLING THE PURE .JS FILE) ---
        // Replace this link with your actual GitHub Raw link when you upload it!
        const rawUrl = "https://raw.githubusercontent.com/AhmedAC/ComputerManage/main/ComputerManage.js";
        
        const fileStream = fs.createWriteStream('./ComputerManage.js');

        https.get(rawUrl, (response) => {
            // Check if the link actually worked (Status Code 200 means success)
            if (response.statusCode !== 200) {
                clearInterval(loadingLoop);
                console.log(`\n🔴 Download Failed! Server responded with status: ${response.statusCode}`);
                return;
            }

            // Pipe the web data stream directly into a brand new local .js file
            response.pipe(fileStream);
            
            fileStream.on('finish', () => {
                fileStream.close();
                
                // Stop the loading animation loop
                clearInterval(loadingLoop); 
                process.stdout.write("\r\n\n"); 
                
                // --- 4. WELCOME SCREEN ---
                console.log("// ////////////////////////////////////////////////////////////////////////////////// //");
                console.log("Welcome to ComputerManage by AC/AhmedAC                                               //");
                console.log("// ////////////////////////////////////////////////////////////////////////////////// //\n");
                console.log(`🟢 Success! ${moduleName}.js has been cleanly downloaded into your project folder.`);
            });
            
        }).on('error', (err) => {
            clearInterval(loadingLoop);
            console.log(`\nNetwork Error: ${err.message}`);
        });

    }, 3000); 

} else {
    console.log("Unknown command or module.");
    console.log("Usage: acmodule install *ComputerManage");
}
