app
    .directive('wpProduct', function () {
        return function(scope, element, attrs){
            // Use jqlite to set the text in the element
            element.text("Today, we are selling " + attrs.retailItem);
        }
    });