/**
 * @license Apache-2.0
 * @copyright 2024 Fancy
 */

'use strict';

const home = async (req, res) => {
    res.render('./pages/home')
}

module.exports = { home }