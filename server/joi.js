const JoiBase = require("@hapi/joi");
const JoiDate = require("@hapi/joi-date");

module.exports = JoiBase.extend(JoiDate);