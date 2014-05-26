AngularJS Manual Bootstrap

- If you want to bootstrap an angular app in a legacy JSP/Struts page just
  - angular.bootstrap(document.getElementById("myApp"), ['myApp']);

<html>
  <head>
    <script src="angular.js"></script>
  </head>
  <body>
    <div id="myApp">
    </div>
    <script>
       angular.element(document).ready(function() {
         angular.bootstrap(document.getElementById("myApp"), ['myApp']);
       });
    </script>
  </body>
</html>


#2
