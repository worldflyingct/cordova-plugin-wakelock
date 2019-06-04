# nativecode
这是沃航科技项目过程中所需要的cordova相关插件。

使用方法为：

cordova.plugins.wakelock.acquire (timeout, flags, tag)

timeout为0则不设置超时,flags为android电源管理的设置位，tag为任意字符串。

---
cordova.plugins.wakelock.release (tag)

tag为任意字符串。

#### 简单例子

`cordova.plugins.wakelock.acquire(0, wakelock.PARTIAL_WAKE_LOCK|wakelock.ON_AFTER_RELEASE, 'wfmqtttest')`

`cordova.plugins.wakelock.release('wfmqtttest')`
