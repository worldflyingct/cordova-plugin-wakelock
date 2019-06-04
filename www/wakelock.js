var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'NativeCode', 'coolMethod', [arg0]);
};

exports.wakelock = {
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
    }
};
