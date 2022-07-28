const FARMING_TOOLS = [
    "Euclid's Wheat Hoe",
    "Gauss Carrot Hoe",
    "Pythagorean Potato Hoe",
    "Turing Sugar Cane Hoe"
    "Newton Nether Warts Hoe",
    "Coco Chopper",
    "Melon Dicer",
    "Pumpkin Dicer",
    "Fungi Cutter",
    "Cactus Knife"
];

const LAG_TIMEOUT = 1000;

const time = Time.time();
const lastRegrow = GlobalVars.getDouble('LAST_REGROW');
const throttled = GlobalVars.getBoolean('IS_THROTTLED');

try {
    const inv = Player.openInventory();
    const heldItem = inv.getSlot(inv.getSelectedHotbarSlotIndex() + 36);
    const toolHeld = FARMING_TOOLS.find(a => heldItem.getName().includes(a));
    
    if (!throttled && (time - lastRegrow) > LAG_TIMEOUT && toolHeld) {
        const builder = Chat.createTextBuilder();
        const throttleMsg = builder.append("PACKET THROTTLE!").withColor(0xc).withFormatting(false, true, false, false, false).build();

        const subBuilder = Chat.createTextBuilder();
        const subThrottleMsg = subBuilder.append("Stop breaking or get kicked idiot").withColor(0xc).build();

        Chat.title(throttleMsg, subThrottleMsg, 0, 60, 10);
        GlobalVars.putBoolean('IS_THROTTLED', true);
    }
} catch(e) {
    // oops whatever
}
