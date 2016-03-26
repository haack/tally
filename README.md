# React-sandbox
> Single page real-time polling app, using React.js and Firebase.
[![Code Climate](https://codeclimate.com/github/haack/tallyapp/badges/gpa.svg)](https://codeclimate.com/github/haack/tallyapp)

Yeoman generator used: https://github.com/randylien/generator-react-gulp-browserify

## 1. Install

```bash
$ npm install -g gulp 
$ npm install -g firebase-tools
$ npm install
```

## 2. Run

### Build and watch with browsersync
```
$ gulp watch 
```

### Deploy stuff
```
$ gulp build
$ firebase deploy
$ firebase open
```

# Todo

## Current

1. Add indexes to firebase
1. Show poll results on vote
1. Basic dashboard
1. Remove denormalised counts (firebase does it for you?)
1. Welcome page on first login
1. Make feed tab look respectable

## Backlog

1. Cleaner login checks for each page (wrap componentWillMountCheck into function?)

1. Move poll date code (and refresh) into component

1. Finalise app structure (routes)

1. Poll post throttling

1. Poll add client validation
1. Poll add firebase rules

1. Write register function for user
1. Update user's last logged in on login

1. Disable/enable certain header tabs if not logged in/out

1. HTML5 location API integration

1. Feed ordering
1. Pagination

1. Loading gif
1. Paginate results

## Issues

1. Firebase feed ref being readded each time component is mounted
1. Adding poll updates unmounted Feed
1. Bootstrap css and js not being imported properly (see yo generator)
1. Logging in same user on different multiple devices doesn't work
1. Navigation sometimes requires refresh
