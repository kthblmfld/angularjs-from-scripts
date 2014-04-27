app
    .directive('wpProduct', function () {

        /*
          Reads the retailItem attribute from the element, adds additional text,
          and applies the result into the element.
         */
        return function(scope, element, attrs){
            // Use jqlite to set the text in the element
            element.text("Daily deal: " + attrs.retailItem);
        }
    });