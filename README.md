## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

# Install it and run:

```
  npm install
  npm run dev
  # or
  yarn
  yarn dev
```


# The game:
A simple browser based game points system that calculates the total
points awarded to a player for a number of items they have collected in a game.

We’ll use individual letters of the alphabet to identify the items (A, B, C, and so on). Our items
are scored individually. Some items are worth more if collected in multiples: collect n of them,
and you’ll get y points. For example, item ‘A’ might be worth 50 points individually, but this
week we have a special bonus: collect three ‘A’s and they’ll be worth 200 points instead of
150. In fact this weeks rewards are:

Item  |  Unit Points  |  Bonus<br>
A     |  50           |  200 for 3<br>
B     |  30           |  90 for 2<br>
