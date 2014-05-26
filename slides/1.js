 ▄▄▄       ███▄    █   ▄████  █    ██  ██▓    ▄▄▄       ██▀███
▒████▄     ██ ▀█   █  ██▒ ▀█▒ ██  ▓██▒▓██▒   ▒████▄    ▓██ ▒ ██▒
▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▓██  ▒██░▒██░   ▒██  ▀█▄  ▓██ ░▄█ ▒
░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▓▓█  ░██░▒██░   ░██▄▄▄▄██ ▒██▀▀█▄
 ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒▒▒█████▓ ░██████▒▓█   ▓██▒░██▓ ▒██▒
 ▒▒   ▓▒█░░ ▒░   ▒ ▒  ░▒   ▒ ░▒▓▒ ▒ ▒ ░ ▒░▓  ░▒▒   ▓▒█░░ ▒▓ ░▒▓░
  ▒   ▒▒ ░░ ░░   ░ ▒░  ░   ░ ░░▒░ ░ ░ ░ ░ ▒  ░ ▒   ▒▒ ░  ░▒ ░ ▒░
  ░   ▒      ░   ░ ░ ░ ░   ░  ░░░ ░ ░   ░ ░    ░   ▒     ░░   ░
      ░  ░         ░       ░    ░         ░  ░     ░  ░   ░

AngularJS - Manual Bootstrap

- You can have as many angular apps in a page as you want (i have tried 2)
- Be careful with the URL (i have tried it without using the router)
- Angular looks for the ng-app directive which designates your application root
- If the ng-app directive is found then Angular will load the app

<html ng-app>
  <body>
    ...
    <script src="angular.js">
  </body>
</html>

#1
