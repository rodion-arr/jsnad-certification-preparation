'use strict';

const fs = require('fs').promises;
const path = require('path');

(async () => {
    try {
        // read file
        const pathCustomer = path.join(__dirname, 'customers.json');
        const fileContent = await fs.readFile(pathCustomer, 'utf-8');
        const json = JSON.parse(fileContent);

        // update values
        json.order_count++;

        // write file
        fs.writeFile(pathCustomer+1, JSON.stringify(json));
    } catch (e) {
        console.error(e.message);
    }
})();
