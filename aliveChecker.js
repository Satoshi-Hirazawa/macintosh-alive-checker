
var INTERVAL = 5;
var app;
var se;

function run(argv){
    if(argv.length < 1) {
        console.log("アプリケーション名(bundle identifier)を指定してください.");
        return;
    }

    app = Application(argv[0]);
    se = Application("System Events");

    while(1){

        delay(INTERVAL);
        if (!app.running()){
            console.log("wakeup : " + argv[0]);
            app.activate();

            // delay(INTERVAL);
            // console.log("full screen of : " + argv[0]);
            // se.keystroke("f", {using:["control down", "command down"]});
        }
    }
}


// 実行方法
// osascript -l JavaScript aliveChecker.js "Google Chrome"  