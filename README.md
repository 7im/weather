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

On successful build, the latest code will be deployed to production site - https://weather-app-test.herokuapp.com/


## TODO

- Add detail view
- unit switch
- Display data in different views: now, hourly, daily

## Nice to have
- add city search input with autocomplete
- geo location api to locate user
- web responsive layout
- localisation
- charting for weather trend
- git pre-commit hook to capture build failures
- protractor for e2e tests
- cache endpoint request result on middleware server
- create mongodb and endpoint for whole city list json
