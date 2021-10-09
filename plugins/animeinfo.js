let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *Title:* ${title}
🎆️ *Episodios:* ${episodes}
➡️ *fecha de emision:* ${start_date}
🔚 *fecha de finalizacion:* ${end_date}
💬 *Show Type:* ${type}
💌️ *ranking:* ${rated}
❤️ *Puntuacion:* ${score}
👥 *Miembros:* ${members}
💚️ *Sipnopsis:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <judul>']
handler.tags = ['internet']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler
