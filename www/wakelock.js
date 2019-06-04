var exec = require('cordova/exec');

exports = {
  coolMethod: function (arg0, success, error) {
    // exec(success, error, 'NativeCode', 'coolMethod', [arg0]);
    if (arg0.length > 0) {
      success (arg0)
    } else {
      error ('arg0 is null')
    }
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
  UNIMPORTANT_FOR_LOGGING: 0x40000000,
  RELEASE_FLAG_WAIT_FOR_NO_PROXIMITY: 1 << 0,
  RELEASE_FLAG_TIMEOUT: 1 << 16,
  BRIGHTNESS_ON: 255,
  BRIGHTNESS_OFF: 0,
  BRIGHTNESS_DEFAULT: -1,
  USER_ACTIVITY_EVENT_OTHER: 0,
  USER_ACTIVITY_EVENT_BUTTON: 1,
  USER_ACTIVITY_EVENT_TOUCH: 2,
  USER_ACTIVITY_EVENT_ACCESSIBILITY: 3,
  USER_ACTIVITY_FLAG_NO_CHANGE_LIGHTS: 1 << 0,
  USER_ACTIVITY_FLAG_INDIRECT: 1 << 1,
  GO_TO_SLEEP_REASON_APPLICATION: 0,
  GO_TO_SLEEP_REASON_DEVICE_ADMIN: 1,
  GO_TO_SLEEP_REASON_TIMEOUT: 2  
}
  
