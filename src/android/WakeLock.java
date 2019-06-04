package cn.worldflying.cordovaplugin;

import android.content.Context;
import android.os.PowerManager;

import java.util.HashMap;
import java.util.Map;
import java.util.Timer;

public class WakeLock {

    static Map<String, PowerManager.WakeLock> map = new HashMap<String, PowerManager.WakeLock>();

    public static boolean Lock(int timeout, int flags, String tag, Context context) {
        PowerManager.WakeLock wl = map.get(tag);
        if (wl != null) {
            return false;
        }
        PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
        PowerManager.WakeLock wl2 = pm.newWakeLock(flags, tag);
        if (timeout != 0) {
            wl2.acquire(timeout);
            new Timer().schedule(new TimeWorker(tag) {
                @Override
                public void task(String tag) {
                    map.remove(tag);
                }
            }, timeout);
        } else {
            wl2.acquire();
        }
        map.put(tag, wl2);
        return true;
    }

    public static boolean UnLock(String tag, Context context) {
        PowerManager.WakeLock wl = map.get(tag);
        if (wl == null) {
            return false;
        }
        wl.release();
        map.remove(tag);
        return true;
    }
}
