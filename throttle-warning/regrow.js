const throttled = GlobalVars.getBoolean('IS_THROTTLED');

if (throttled) {
    GlobalVars.putBoolean('IS_THROTTLED', false);
}

GlobalVars.putDouble('LAST_REGROW', Time.time());
