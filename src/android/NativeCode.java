package cn.worldflying.cordovaplugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.Manifest;
import android.content.Context;

/*
import android.widget.Toast;

Context Activity = this.cordova.getActivity().getApplicationContext();
Toast.makeText(Activity, "I am debug message", Toast.LENGTH_LONG).show();
*/

/**
 * This class echoes a string called from JavaScript.
 */
public class NativeCode extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        } else if (action.equals("acquire")) {
            if (this.cordova.hasPermission(Manifest.permission.WAKE_LOCK)) {
                int timeout = args.getInt(0);
                int flags = args.getInt(1);
                String tag = args.getString(2);
                Context context = this.cordova.getActivity();
                boolean b = WakeLock.Lock (timeout, flags, tag, context);
                if (b) {
                    JSONObject obj = new JSONObject();
                    obj.put("errcode", 0);
                    callbackContext.success(obj);
                } else {
                    JSONObject obj = new JSONObject();
                    obj.put("errcode", -1);
                    callbackContext.error(obj);
                }
            } else {
                this.cordova.requestPermission(this, 0, Manifest.permission.WAKE_LOCK);
            }
            return true;
        } else if (action.equals("release")) {
            boolean b = WakeLock.UnLock (tag);
            if (b) {
                JSONObject obj = new JSONObject();
                obj.put("errcode", 0);
                callbackContext.success(obj);
            } else {
                JSONObject obj = new JSONObject();
                obj.put("errcode", -1);
                callbackContext.error(obj);
            }
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

}
