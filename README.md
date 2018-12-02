# Pokédex - Front End Project

A web app containing information about Pokémon, inspired by the Pokédex from the Pokémon series.

Created with [React](https://reactjs.org/).

## Table of Contents

- [Setup](#setup)
- [Scripts](#scripts)
- [File Structure](#file-structure)
- [Tests](#tests)
- [Contributing](#contributing)
- [Resources](#resources)
- [Authors](#authors)


## Setup

Development requires Node.js version 8.10.0 or later for development.

Clone this repo by running `git clone https://github.com/Hovspian/pokedex-front.git` from the terminal or fork it and follow the instructions there. If you're interested in contributing check out [this section](#contributing).

Install dependencies by running `npm install` from the terminal.


## Scripts

### `npm install`

Install the project's dependencies

### `npm start`

Run the application in development mode.

View it in your browser at http://localhost:3000/.

The page will reload when you makes changes. Lint errors are shown in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the [tests section](#test) for more info

### `npm run lint`

Checks for lint errors within the project.


## File Structure

The `src` folder contains all of our code. With a few exceptions, all files will go into a subfolder.

The file structure for `__tests__`, `js`, and `styles` folders should match the other two folders.

The `js` folder contains all of our JavaScript code that gets used by the web app. Every file here needs to have a matching file in the `__tests__` folder, and can optionally have a matching file in the `styles` folder. We avoid using inline styles as much as possible, so files with React components generally need their own style file.

 Each major component of the project goes into its own subfolder. Anything that can be used within multiple sections are put into the `core` folder. Because we have the `core` folder, each file should only reference files other files within the same subfolder or in `core`.


## Tests

All tests go in the `src/__tests__` folder. We use [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to run our tests.

Run tests from the command line using `npm test`.

You can also see the test coverage by running `npm test -- --coverage`. Note that tests run slower this way. It is better to use `npm test` during development.

#### Debugging tests in Chrome

This section is taken from the [Create React App docs](https://facebook.github.io/create-react-app/docs/debugging-tests#debugging-tests-in-chrome).

Place `debugger;` statements in any test and run: `npm run test:debug` in the terminal.
This will start running your Jest tests, but pause before executing to allow a debugger to attach to the process.

Go to `about:inspect` in Chrome. Then click `inspect` on the remote target that matches the project (there should be a remote target with the same filepath as this project).

After opening that page, the Chrome Developer Tools will be displayed and a breakpoint will be set at the first line of the react script (this is done simply to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.


## Contributing

Want to contribute? We'd love your help! It's just a few easy steps:

#### Step 1:

Set up the project. Follow the instructions [here](#setup) if you need help.

#### Step 2:

Make changes.

#### Step 3:

Submit a [pull request](https://github.com/Hovspian/pokedex-front/compare). Note that all tests need to pass and there should be no lint errors (unless there's a good reason) for the pull request to be accepted. We have [scripts available](#scripts) to easily check these from the command line.


## Resources

See the application in action [here](https://pokedex-e972f.firebaseapp.com/).

Check out the [back end repo](https://github.com/DryWaters/pokedex-back).

Or read our [API documentation](https://documenter.getpostman.com/view/5517807/RzZFBvca).

Special thanks to all of the packages that made this project possible. Just to name a few:

- [React](https://reactjs.org/)

- [Create React App](https://github.com/facebookincubator/create-react-app) (technically not a package, but crucial nonetheless)

- [Reactstrap](https://github.com/reactstrap/reactstrap)

- [React Infinite Scroller](https://github.com/CassetteRocks/react-infinite-scroller)

- [Jest](https://jestjs.io/)

- [Enzyme](https://airbnb.io/enzyme/)

And last but not least, thank you to the Pokémon Company for creating the outstanding series.


## Authors

[Hovsep Lalikian](https://github.com/Hovspian)

[Daniel Waters](https://www.watersjournal.com)
