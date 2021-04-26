
require([
  "jquery",
  "splunkjs/mvc",
  "splunkjs/mvc/simplexml/ready!"
        ],
    function($,mvc) {
        
        let cursor = 0;
        const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        document.addEventListener('keydown', (e) => {
        cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
        if (cursor == KONAMI_CODE.length) activate();
        });

        function activate(){
                parseHTMLContent = "Tada! pat yourself on the back! <pre>Easter Egg Question 3! Answer=31337</pre>"
                console.log(parseHTMLContent);
                $("body").html(parseHTMLContent);
                $('html').css({"cursor": "cell"});
        }
    }
);


