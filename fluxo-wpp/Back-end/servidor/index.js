const { Client } = require('whatsapp-web.js');
const estados = {};

const client = new Client({});

client.on('qr', qr => {
    console.log(qr);
});

client.on('ready', () => {
    console.log('Bot conectado!');
});

client.on('message', async msg => {
    const user = msg.from;
    const texto = msg.body.toLowerCase();

    if (!estados[user]) {
        estados[user] = { etapa: 'inicio' };
    }

    const etapa = estados[user].etapa;

    // INÍCIO
    if (texto.includes('menu')) {
        msg.reply("👋 Olá! Me chamo Diogo, sou programador e desenvolvedor de software.\nQual seu nome?");
        estados[user].etapa = 'nome';
    }

    // NOME
    else if (etapa === 'nome') {
        estados[user].nome = texto;
        msg.reply(`Prazer, ${texto}!\n Como posso ajudar?\n 1-Desenvolvimento de software\n2-Resolução de problemas\n3-Deixe Sua mensagem:`);
        estados[user].etapa = 'menu';
    }

    // MENU
    else if (etapa === 'menu') {
        if (texto === '1') {
            msg.reply("Descreva seu objetivo de software:");
            estados[user].etapa = 'serviços';
        } else if (texto === '2') {
            msg.reply("🧑‍💻 Descreva seu problema:");
            estados[user].etapa = 'serviços2';
        } else if( texto === '3'){
            msg.reply("Deixe sua mensagem. Em breve terá um retorno");
            estados[user].etapa = 'suporte';
        }
    }

    // TRATAMENTO PARA ERRO
    else if (etapa === 'serviços' && texto === '0') {
        msg.reply("🔙 Menu:\n1");
        estados[user].etapa = 'menu';
    }

    // SERVIÇOS E SUPORTE
    else if (etapa === 'serviços' || etapa === 'serviços2' || etapa === 'suporte') {
        msg.reply("✅ Sua mensagem foi recebida! Em breve terá um retorno.");
        estados[user].etapa = 'menu';
    }

});

client.initialize();