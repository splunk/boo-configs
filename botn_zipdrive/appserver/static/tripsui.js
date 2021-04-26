/*
 ____   ___ _____ _   _                             __ _  ___
| __ ) / _ \_   _| \ | |            ___ ___  _ __  / _/ |/ _ \
|  _ \| | | || | |  \| |  _____    / __/ _ \| '_ \| |_| | (_) |
| |_) | |_| || | | |\  | |_____|  | (_| (_) | | | |  _| |\__, |
|____/ \___/ |_| |_| \_|         (_)___\___/|_| |_|_| |_|  /_/

                        __        __    _   _
 _ __ ___   __ _ _   _ / /   _ _ _\ \  | |_| |__   ___
| '_ ` _ \ / _` | | | | | | | | '__| | | __| '_ \ / _ \
| | | | | | (_| | |_| | | |_| | |  | | | |_| | | |  __/
|_| |_| |_|\__,_|\__, | |\__,_|_|  | |  \__|_| |_|\___|
                 |___/ \_\        /_/
  __                      _                     _ _   _
 / _| ___  _ __ ___ ___  | |__   ___  __      _(_) |_| |__
| |_ / _ \| '__/ __/ _ \ | '_ \ / _ \ \ \ /\ / / | __| '_ \
|  _| (_) | | | (_|  __/ | |_) |  __/  \ V  V /| | |_| | | |
|_|  \___/|_|  \___\___| |_.__/ \___|   \_/\_/ |_|\__|_| |_|


 _   _  ___  _   _
| | | |/ _ \| | | |
| |_| | (_) | |_| |
 \__, |\___/ \__,_|
 |___/

*/

require([
  "jquery",
  "splunkjs/mvc",
  "splunkjs/mvc/simplexml/ready!"
        ],
    function($,mvc) {
        setInterval( updateRoute, 2100);
        function updateRoute(){
            if ($("#showme").html().includes('&gt')){
                parseHTMLContent = $("#showme").text().replace(/\,/g,'.<br><br>').replace(/right/g,'<b>right</b> ↱').replace(/left/g,'↰ <b>left</b>').replace(/exit/g,'<b>exit</b>').replace(/ramp/g,'<b>ramp</b>')
                console.log(parseHTMLContent);
                $("#showme").html(parseHTMLContent);
                $('body').css({"cursor": "cell"});
            }
        }
    }
);


