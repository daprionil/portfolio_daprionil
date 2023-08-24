const serverApp = require('./src/server/server');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT_SERVER || 3000;

//? Up server with express
serverApp.listen(PORT, () => {
    console.log('Up server in ' + PORT);
});