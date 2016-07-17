# Another weather forecast app

## Prerequisite

Node version: >4
Npm version: >3


## How to

- npm run build - to build an optimized version of your application in /dist
- npm run serve - to launch a browser sync server on your source files
- npm run serve:dist - to launch a server on your optimized application
- npm run test - to launch your unit tests with Karma
- npm run test:auto - to launch your unit tests with Karma in watch mode


## Deploy

Heroku will listen to any commit to master branch on https://github.com/7im/weather.git

On successful build, the latest code will be deployed to production site - http://weather-app-test.herokuapp.com/


## Nice to have
- Add forecast detail view
- Use addtional API to display forecast in different views: current, daily, map
- Replace city selector with city search input with autocomplete
- Use geo location api to locate user
- Web responsive layout
- Add charting for weather trend
- Add git pre-commit hook to capture build failures
- Use protractor for e2e tests
- Cache API request results on server
- Create mongodb and endpoint to query entire city list json
