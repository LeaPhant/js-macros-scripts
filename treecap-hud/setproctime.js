const lastProc = GlobalVars.getDouble('LAST_PROC') || 0;
const lastBreak = GlobalVars.getDouble('LAST_LOG_BREAK') || 0;
const currentBreak = Time.time();

if(event.block.getName() == 'Air' && event.updateType == 'STATE') {
    if (currentBreak - lastBreak < 50 && currentBreak - lastProc > 2000 / 1.5) {
        GlobalVars.putDouble('LAST_PROC', currentBreak);
    }

    GlobalVars.putDouble('LAST_LOG_BREAK', currentBreak);
}
