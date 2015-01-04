(function () {
    /**
     * We do not need scripts, styles
     * and links.
     */
    var selector = ":not(script):not(style):not(link)";
    var pageNodes = Array.prototype.slice.call(document.querySelectorAll(selector));

    if (pageNodes.length == 0) {
        return;
    }

    /**
     * The idea here is to make replacement
     * asynchronously.
     */
    (function replaceNames(domNode) {

        realNames.forEach(function (item) {
            var re = new RegExp(item.name, "gi");
            domNode.innerHTML = domNode.innerHTML.replace(re, item.realName);
        });

        if (pageNodes.length != 0) {
            setTimeout(function () {
                replaceNames(pageNodes.shift());
            }, 0);
        }
    }(pageNodes.shift()));

}());