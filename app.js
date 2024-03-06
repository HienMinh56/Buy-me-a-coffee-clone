/**
 * @license Apache-2.0
 * @copyright 2024 Fancy
 */

'use strict';

/**
 * Node modules
 */
const express = require('express');
const helmet = require('helmet');

require('dotenv').config();

/**
 * Custom modules
 */
const home = require('./src/routes/home.route');
const checkout = require('./src/routes/checkout.route');

/**
 * Initial express app
 */
const app = express();

/**
 * Setting ejs view engine
 */
app.set('view engine', 'ejs');

/**
 * Setting public folder
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Setting HTTP response secure headers
 */
app.use(helmet());

/**
 * Parse request body
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Home page
 */
app.use('/', home);

/**
 * Checkout
 */
app.use('/checkout', checkout);

app.listen(process.env.PORT, () => {
    console.log(`App listening on http://localhost:${process.env.PORT}`);
});