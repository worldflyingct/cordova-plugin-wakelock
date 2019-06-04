package cn.worldflying.wakelock;

import java.util.TimerTask;

public abstract class TimeWorker extends TimerTask {

    String tag = null;

    public TimeWorker (String tag) {
        this.tag = tag;
    }

    @Override
    public void run() {
        task (tag);
    }

    public abstract void task (String tag);
}
