const path = require('path');
// EITHER
// module.exports = path.dirname(process.mainModule.filename);

//OR
module.exports = path.dirname(require.main.filename);
