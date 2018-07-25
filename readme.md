# Google Cloud Day Malta - July 2018
A demo web app demo that demonstrates frontend performance improvements.

## Usage
- Run `npm install` to install all the required dependencies
- Run `npm run dev` to build the project using dev configurations.
- Run `npm start` to start a node server on `localhost:3000`

## Branches
The source code is organised in multiple branches:
- `master` contains the baseline implementation
- `inline-css` adds inline CSS and loads remaining CSS asynchronously
- `preload` adds web font preloading
- `codesplitting` adds code splitting using the `CommonsChunkPlugin` & `WebPackBundleAnalyzer`

## Technology
Built using JavaScript (ES2015), running on ExpressJS on the server-side and vanilla JavaScript on the client-side.

## Disclaimer
The application is not production ready and only for demo purposes. The main pitfalls are the lack of server-side rendering and possible lack of cross-browser support.