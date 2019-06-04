var exec = require('cordova/exec');

exports = {
  coolMethod: function (arg0, success, error) {
      exec(success, error, 'NativeCode', 'coolMethod', [arg0]);
  },
  acquire: function (timeout, flags, tag) {
    return new Promise (function (resolve, reject) {
        exec(function (res) {
            resolve (res)
        }, function (err) {
            reject (err)
        }, 'NativeCode', 'acquire', [timeout, flags, tag]);
    })
  },
  release: function (tag) {
    return new Promise (function (resolve, reject) {
        exec(function (res) {
            resolve (res)
        }, function (err) {
            reject (err)
        }, 'NativeCode', 'release', [tag]);
    })
  },
  PARTIAL_WAKE_LOCK: 0x00000001,
  SCREEN_DIM_WAKE_LOCK: 0x00000006,
  SCREEN_BRIGHT_WAKE_LOCK: 0x0000000a,
  FULL_WAKE_LOCK: 0x0000001a,
  PROXIMITY_SCREEN_OFF_WAKE_LOCK: 0x00000020,
  DOZE_WAKE_LOCK: 0x00000040,
  DRAW_WAKE_LOCK: 0x00000080,
  WAKE_LOCK_LEVEL_MASK: 0x0000ffff,
  ACQUIRE_CAUSES_WAKEUP: 0x10000000,
  ON_AFTER_RELEASE: 0x20000000,
  UNIMPORTANT_FOR_LOGGING: 0x40000000
}
  
