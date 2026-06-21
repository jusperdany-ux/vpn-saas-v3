const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Cloudflare API Token را ارسال کن");
});

bot.on("message", async (msg) => {
  const token = msg.text;

  if (!token || !token.startsWith("ey")) return;

  try {
    const res = await axios.get(
      "https://api.cloudflare.com/client/v4/user/tokens/verify",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!res.data.success) {
      return bot.sendMessage(msg.chat.id, "❌ Token invalid");
    }

    const panelId = Math.random().toString(36).substring(2, 10);

    bot.sendMessage(
      msg.chat.id,
      `✅ Panel ساخته شد:\nhttps://your-domain.com/panel/${panelId}`
    );

  } catch (e) {
    bot.sendMessage(msg.chat.id, "❌ خطا در بررسی توکن");
  }
});