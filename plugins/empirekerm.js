const { cmd } = require("../command");

cmd({
    pattern: "family",
    desc: "Kerm Family",
    category: "fun",
    react: "👨‍👩‍👧‍👦",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `
         *[ • 𝖪𝖤𝖱𝖬 𝖥𝖠𝖬𝖨𝖫𝖸 • ]*

    [ • 𝖣𝖠𝖬𝖤 𝖪𝖤𝖱𝖬: 𝖢𝖠𝖱𝖬𝖤𝖭👸 ]
       *•────────────•⟢*
                *𝖥𝖱𝖨𝖤𝖭𝖣’𝖲*
      *╭┈───────────────•*
      *│  ◦* *▢➠ 𝖲𝖤𝖡𝖠𝖲𝖳𝖨𝖤𝖭*
      *│  ◦* *▢➠ 𝖦𝖠𝖬𝖠𝖫𝖨𝖤𝖫*
      *│  ◦* *▢➠ 𝖥𝖱𝖠𝖭𝖢𝖪*
      *│  ◦* *▢➠ 𝖧𝖤𝖭𝖱𝖸*
      *│  ◦* *▢➠ 𝖫𝖤𝖠*
      *│  ◦* *▢➠ 𝖬𝖠𝖱𝖨𝖫𝖸𝖭*
      *│  ◦* *▢➠ 𝖤𝖬𝖨𝖤*
      *│  ◦* *▢➠ 𝖲𝖯𝖨𝖣𝖨𝖳*
      *│  ◦* *▢➠ 𝖱𝖠𝖯𝖧𝖠𝖤̈𝖫*
      *│  ◦* *▢➠ 𝖢𝖠𝖲𝖲𝖠𝖭𝖣𝖱𝖠*
      *│  ◦* *▢➠ 𝖥𝖠𝖭𝖭𝖸*
      *│  ◦* *▢➠ 𝖱𝖸𝖠𝖭*
      *│  ◦* *▢➠ 𝖢𝖧𝖱𝖨𝖲*
      *│  ◦* *▢➠ 𝖦𝖱𝖤𝖸*
      *│  ◦* *▢➠ 𝖲𝖠𝖨̈𝖣𝖠*
      *│  ◦* *▢➠ 𝖲𝖴𝖪𝖴𝖭𝖠*
      *│  ◦* *▢➠ 𝖱𝖮𝖸*
      *│  ◦* *▢➠ 𝖥𝖤𝖱𝖭𝖠𝖭𝖣*
      *│  ◦* *▢➠ 𝖮𝖡𝖨𝖠𝖭𝖦*
      *╰┈───────────────•*
        *•────────────•⟢*
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://files.catbox.moe/7pa8tx.jpeg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});