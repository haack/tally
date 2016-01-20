# React-sandbox
Single page polling app, using React.js and Firebase

## 1. Install

```bash
$ npm install
```

## 2. Run

### Build and watch with browsersync
```
$ gulp watch 
```

### Deploy stuff
```
$ gulp
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
1. Feed tabs

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

## Issues

1. Firebase feed ref being readded each time component is mounted
1. Adding poll updates unmounted Feed
1. Bootstrap css and js not being imported properly (see yo generator)