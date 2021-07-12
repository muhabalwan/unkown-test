## Documentation
This is a written example of my code

## Build it With

- [Webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Antd](https://ant.design/docs/react/introduce)
- [Styled-Components](https://styled-components.com/)

## Getting Started

### Prerequisites
Make sure you run the download the mock json file and set up the mocked server as mentioned in the test docs
```
# install the server (globally if wanted)
npm install -g json-server
# start the server with the provided db file
json-server --watch db.json
# or start the server on a different port (e.g. 1234)
json-server --watch db.json --port 1234
```
Install all required packages using
```
npm install
```
For development run:
```
 npm run dev
```
For Production build run:
```
npm run build
```
For testing
```
npm run test
```

## Possible improvements needed
 - Reduce production bundle size and optimize it
 - Extract Header and Content into separate files from App.tsx
 - Fix type check in webpack.dev.config
 - Create separate files for universes and stars API
 - Add Schema validation for API

