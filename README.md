## Run frontend in dev mode
```yarn dev```

*The id of the div inside the body of /public/index.html has to be the same as ELEMENT_ID in index.tsx*

## Build frontend
```yarn build```

## Run server to serve fragment
After you have built the frontend run ```yarn serve-fragment```

#### incl. hot reload if either the React files or fragment.ts change
```yarn watch-fragment``` (No need to build the frontend before running this command)

## Now tailor can find the fragment at localhost:5000

## Setting Port
To set a port other than the default one (5000) simply add ```PORT=YOUR_PORT_NUMBER``` before ```yarn serve-fragment```

e.g. ```PORT=3000 yarn serve-fragment```

## You have to change the ELEMENT_ID constant in index.tsx accordingly to the id of the div in your tailor host template
