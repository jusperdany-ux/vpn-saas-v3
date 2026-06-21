const axios = require("axios");

const cache = new Map();

async function getIPInfo(ip, configId) {
  const key = `${configId}-${ip}`;

  if (cache.has(key)) return cache.get(key);

  const res = await axios.get(`https://ipapi.co/${ip}/json/`);

  const data = {
    ip,
    country: res.data.country_name,
    isp: res.data.org,
    region: res.data.region,
    timezone: res.data.timezone
  };

  cache.set(key, data);

  return data;
}

module.exports = { getIPInfo };