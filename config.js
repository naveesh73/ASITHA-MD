const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=vzIHDIZb#9UQWN4l5qF68oD-rwCuXDETsi1c8ftZ47rjFDwoQKdk",
MONGODB: process.env.MONGODB || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=vzIHDIZb#9UQWN4l5qF68oD-rwCuXDETsi1c8ftZ47rjFDwoQKdk",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
