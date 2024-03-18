// Function to convert minutes to wecs
function convertToWecs(minutes) {
    return (minutes * 100.0) / 60.0;
}

async function printTimeInWecs() {
    while (true) {
        // Get the current time in IST
        let currentTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
        currentTime = new Date(currentTime);
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        // Convert minutes to wecs
        let wecs = convertToWecs(minutes);
        // Clear the console
        console.clear();
        // Print the time in hours:wecs format
        console.log(`The current time in hours:wecs format is ${hours.toString().padStart(2, '0')}:${wecs.toFixed(2)}`);
        // Wait for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

printTimeInWecs();
