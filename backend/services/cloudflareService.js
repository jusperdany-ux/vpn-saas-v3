const axios = require("axios");

async function verifyToken(token) {
  try {
    const res = await axios.get(
      "https://api.cloudflare.com/client/v4/user/tokens/verify",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data.success;
  } catch {
    return false;
  }
}

module.exports = { verifyToken };