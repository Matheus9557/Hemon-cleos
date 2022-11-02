const req = require('express/lib/request');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
const Ponto = require('../models/ponto');

const addPonto = async (request, response) =>{

    const nome = request.body.nome;
    const rua = request.body.rua;
    const numero = request.body.numero;
    const bairro = request.body.bairro;
    const cidade = request.body.cidade;
    const uf = request.body.uf;
    const cep = request.body.cep;
    const geometria = {type: 'Point', coordinates:[request.body.lat, request.body.lng]}

    console.log(geometria);

    const ponto = Ponto.build({nome, rua, numero, bairro, cidade, uf, cep, geometria});
    ponto.save().then(()=>{
        response.status(200).send('Ponto salvo!');
    }).catch(err =>{
        response.status(400).send('Falha ao salvar');
    });

};

const listarPontos = async (request, response) => {
    try{
        const resultado = await Ponto.findAll();
        response.status(200).json(resultado);
    }catch{
        response.status(400).send('Erro');
    };
};


async function sincronizar(request, response) {
    await Ponto.sync();
    response.status(200).send('Sincronizado');
}

module.exports = {addPonto, sincronizar, listarPontos};