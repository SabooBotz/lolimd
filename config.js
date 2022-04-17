/**
* Thanks To
* Allah S.W.T
* Ortu
* BOT INDO
* Dika Ardnt
* Sanzy Kawaii
* FIRAA
* Guntur
* Dhika Ardiant
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6282145203493']
global.premium = ['6282145203493']
global.packname = 'Createf By'
global.author = 'Sabo'
global.sessionName = 'lolibot'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Ini Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    eror: 'Yah Eror kak',
    owner: 'Fitur Ini Khusus Owner Bot',
    group: 'Fitur Ini Hanya Bisa Digunakan Di Group!',
    private: 'Fitur Ini Hanya Bisa Digunakan Di Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/apri.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
