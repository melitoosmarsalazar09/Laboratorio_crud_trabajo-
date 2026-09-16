const app = require('./src/app');
const env = require('./src/config/env');
const logger = require('./src/startup/seedAdmin');

async function start () {
    await seedAdmin();

    app.listen(env.port,() => {
        console.log(`Laboratorio API CRUD ejecutandose en http://localhost:${env.port}`);
    });
}

start();
