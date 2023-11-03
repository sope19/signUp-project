const bcryt = require("bcrypt");

const userUtil = {
  passwordEncryption: async (pwd) => {
    const encryptedPassword = await bcryt.hashSync(pwd, 10);
    return encryptedPassword;
  },
};

module.exports = userUtil;