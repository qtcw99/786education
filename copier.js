var btns = document.querySelectorAll('button');
    var clipboard = new ClipboardJS(btns);

    clipboard.on('success', function(e) {
        console.log(e);
var x1 = document.getElementById("myDIV1");
var x2 = document.getElementById("myDIV2");
if (x1.style.display === "block") {
	x1.style.display = "none";
x2.style.display = "block";
}
		
    });

    clipboard.on('error', function(e) {
        console.log(e);
		
    });
