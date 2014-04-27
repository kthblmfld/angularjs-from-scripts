app
    .directive("wpWrapWith", function($templateCache){
        return{
            transclude: 'element',
            link: function(scope, element, attrs, ctrl, transclude){
                var template = $templateCache.get(attrs.wpWrapWith);
                var templateElement = angular.element(template);

                transclude(scope, function(clonedElement){
                    element.after(templateElement.append(clonedElement));
                })
            }
        }
    });