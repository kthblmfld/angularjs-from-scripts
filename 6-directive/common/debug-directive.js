app
    .directive("wpDebug", function ($compile) {
        return{
            terminal: true, // halt directive processing after this directive
            priority: 10000,  // run this directive before others (lower-priority)
            link: function (scope, element) {
                var clone = element.clone();
                element.attr("style","color:red");
                clone.removeAttr("wp-debug");
                var clonedElement = $compile(clone)(scope);
                element.after(clonedElement);
            }
        }
    });