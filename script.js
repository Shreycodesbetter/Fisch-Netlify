let fishList = [
  "Flimsy Fish", "Training Fish", "Plastic Fish", "Carbon Fish", "Fast Fish",
  "Lucky Fish", "Long Fish", "Steady Fish", "Nocturnal Fish", "Fortune Fish",
  "Rapid Fish", "Magnet Fish", "Midas Fish", "Mythical Fish", "Kings Fish",
  "Destiny Fish", "Magma Fish", "Fungal Fish", "Haunted Fish", "Sockeye Salmon",
  "Pearl Fish", "Glassfish", "Magma Tang", "Golden Fish", "Cursed Fish",
  "Kingfish", "Jellyfish", "Blubberfish", "Shimmering Fish", "Goldfin Fish",
  "Pearl Cichlid", "Dragon Fish", "Titanfish", "Whirlpool Fish", "Moonlit Fish",
  "Sunfish", "Stardust Fish", "Frostbite Fish", "Fishy Fish", "Flamefish",
  "Spiked Fish", "Razorfin Fish", "Vortex Fish", "Tornado Fish", "Seafury Fish",
  "Mantis Fish", "Glimmer Fish", "Neon Fish", "Crystal Fish", "Sandfish",
  "Obsidian Swordfish", "Oceanic Fish", "Megalodon", "The Bloop", "Fishy Fishity Fishing Fished Fish"
];

let rods = [
  "Flimsy Rod", "Training Rod", "Plastic Rod", "Carbon Rod", "Fast Rod", "Lucky Rod",
  "Long Rod", "Steady Rod", "Nocturnal Rod", "Fortune Rod", "Rapid Rod", "Magnet Rod",
  "Midas Rod", "Mythical Rod", "Kings Rod", "Destiny Rod", "Magma Rod", "Fungal Rod",
  "Haunted Rod", "Executive Rod", "Golden Rod", "Legendary Rod", "Inferno Rod", "Aqua Rod",
  "Celestial Rod", "Thunder Rod", "Frost Rod", "Solar Rod", "Lunar Rod", "Crystal Rod",
  "Phantom Rod", "Diamond Rod"
];

let inventory = {};
let fishCredit = 550;
let rodBoost = 10;
let caughtFish = '';
let caughtFishInventoryAddon = '';

// Initialize inventory
rods.forEach(rod => inventory[rod] = 0);
fishList.forEach(fish => inventory[fish] = 0);

function showMessage(message) {
  document.getElementById("message").textContent = message;
}

function showInventory() {
  let inventoryText = JSON.stringify(inventory, null, 2);
  showMessage(`Inventory: ${inventoryText}\nCredit: ${fishCredit}💰`);
}

function showShopMenu() {
  let shopText = rods.map((rod, index) => `${rod}: ${index * 1250}💰`).join('\n');
  showMessage(`Shop: \n${shopText}\nCredit: ${fishCredit}💰`);
}

function showFishMenu() {
  let randomFish = fishList[Math.floor(Math.random() * fishList.length)];
  let randomChance = Math.random();
  
  // Simulate fishing logic
  if (randomChance > 0.5) {
    caughtFish = `${randomFish} 🐟`;
    caughtFishInventoryAddon = randomFish;
    fishCredit += 100;
    showMessage(`You caught: ${caughtFish}\nCredit: ${fishCredit}💰`);
    inventory[caughtFishInventoryAddon] += 1;
  } else {
    showMessage("You caught nothing ❌");
  }
}

function showSettingsMenu() {
  let settingsMessage = `Settings:
  - Music: Off
  - Difficulty: Normal
  - Reset: Coming soon
  - Quit: Exit Settings`;
  showMessage(settingsMessage);
}

document.addEventListener("DOMContentLoaded", () => {
  showMessage("Welcome to the Fishing Game 🐟! Select an option from the menu.");
});
