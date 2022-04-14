const COOLDOWN = 1350;

const inv = Player.openInventory();
const heldItem = inv.getSlot(inv.getSelectedHotbarSlotIndex() + 36);
let hud = GlobalVars.getObject('TREECAP_HUD');
const timeSinceProc = Time.time() - GlobalVars.getDouble('LAST_PROC');

const treeCapHeld =
heldItem != null
&& (
    heldItem.getName().includes('Treecapitator')
    || heldItem.getName().includes('Jungle Axe')
);

const lastProcRecent = timeSinceProc < 5000;

if (treeCapHeld || lastProcRecent) {
    if (hud == null) {
        hud = Hud.createDraw2D();
        Hud.registerDraw2D(hud);
        GlobalVars.putObject('TREECAP_HUD', hud);
    }

    const timeLeft = Math.max(0, COOLDOWN - timeSinceProc);

    const timeText = timeLeft > 0
    ? (timeLeft / 1000).toFixed(1) + 's'
    : 'Ready';

    const color = timeLeft > 0
    ? 0xff5454
    : 0x55FF55;

    for (const e of hud.getElements()) {
        hud.removeElement(e);
    }

    hud.addRect(0, 0, hud.getWidth(), hud.getHeight(), color, 30);

    const text = hud.addText(timeText, 0, 0, color, true, 4, 0);
    const x = Math.round(hud.getWidth() / 2 - text.getWidth() * 2);
    text.setPos(x, Math.round(hud.getHeight() / 2) + 15);
} else if (hud != null) {
    for (const e of hud.getElements()) {
        hud.removeElement(e);
    }
}
