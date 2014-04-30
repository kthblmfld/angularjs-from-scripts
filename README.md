angularjs-from-scripts
======================

AngularJs examples from simple inclusion of javascript files. No Npm, Grunt, Bower, Yeoman...
 just bottom-up AngularJs.

Each numbered directory is a self-contained AngularJs demo. The demos progressively grow in
complexity with every iteration focusing on a different aspect of the framework.

For each section, open index.html to load the app.


1-data-binding
--------------

This is a tiny example of data binding using the ng-model directives and a data binding
(handlebars, mustache) expression.

2-inline-controller-and-filter
------------------------------

A simple controller example demonstrating how to return json from a controller then render
and filter it in a template.

3-ui-router
-----------

View management using ui-router's $stateProvider. Simple example of nested states in
ingredients section.

**Lots of additional ui-router features not covered: Multiple (named) views,
resolve + promises, etc.**

4-ui-router-2
-------------

Deeper spread of states and nesting down the path of Walt's passion

5-scope
-------

Data sharing between different controllers using a shared service.
### Home view example
Demonstrates scope sharing between controllers using 3 controllers, each
having a reference to a shared service.

### History section - sibling vs. nested scopes
Illustrates the relationship between scope, controllers, the dom, and scope inheritance.
'waltevents' are set on WaltsHistoryController and MonthEventsController, but not on DayEventsController.
The waltHistory view renders out all of the waltevents in sibling and nested dom elements.

6-directive
-----------

Some sample directives. Also: Grouping of modules/refactoring around features.

### Directives in this version:

**product-directive (wp-product)**

Applied as an attribute in header.html, this is a basic example
of decorating attributes supplied via the dom element.

**wrap-with-directive (wp-wrap-with)**

Applied as an attribute in directions.html, this directive
uses transclusion to wrap the target element with the template assigned to the directive (both
templates defined in directions.html in this case).

**debug-directive (wp-debug)**

Example in the menu view. When applied to an element with attribute 'wp-debug', this directive renders
both the initial expression and its output. AngularJs provides something similar with the
'ng-non-bindable' directive, however, it only renders the unevaluated expression.

**draggable-directive (wp-debug)**

Used in the storehours page, this directive applies drag and
drop to the applied element.