
var INTERVAL = 5;
var app;

function run(argv){
    if(argv.length < 1) {
        console.log("アプリケーション名(bundle identifier)を指定してください.");
        return;
    }

    app = Application(argv[0]);

    while(1){

        delay(INTERVAL);
        if (!app.running()){
            // console.log("wakeup : " + argv[0]);
            // app.launch();
            app.activate();
        }
    }
}


// 実行方法
// osascript -l JavaScript aliveChecker.js "Google Chrome"  