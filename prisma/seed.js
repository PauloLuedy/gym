"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const chestData = [
    {
        id: 1,
        name: 'Crufixo declinado com halteres',
        img: 'https://gymvisual.com/img/p/5/0/4/0/5040.gif',
    },
    {
        id: 2,
        name: 'Crufixo com banco declinado na polia',
        img: 'https://gymvisual.com/img/p/1/1/6/7/2/11672.gif',
    },
    {
        id: 3,
        name: 'Crufixo deitado',
        img: 'https://gymvisual.com/img/p/2/1/5/4/1/21541.gif',
    },
    {
        id: 4,
        name: 'Crufixo inclinado',
        img: 'https://gymvisual.com/img/p/1/0/2/8/1/10281.gif',
    },
    {
        id: 6,
        name: 'Crufixo na polia alta',
        img: 'https://gymvisual.com/img/p/2/4/7/6/0/24760.gif',
    },
    {
        id: 7,
        name: 'Crufixo na polia baixa',
        img: 'https://gymvisual.com/img/p/8/9/4/4/8944.gif',
    },
    {
        id: 8,
        name: 'Crufixo plano com halteres',
        img: 'https://gymvisual.com/img/p/1/0/2/8/0/10280.gif',
    },
    {
        id: 9,
        name: 'Crufixo sentado na máquina',
        img: 'https://gymvisual.com/img/p/5/3/3/3/5333.gif',
    },
    {
        id: 10,
        name: 'Elevação frontal inclinada com halteres',
        img: 'https://gymvisual.com/img/p/2/7/4/5/5/27455.gif',
    },
    {
        id: 11,
        name: 'Flexão com joelhos apoiados',
        img: 'https://gymvisual.com/img/p/1/6/8/9/3/16893.gif',
    },
    {
        id: 12,
        name: 'Flexão de braço',
        img: 'https://gymvisual.com/img/p/1/8/4/9/8/18498.gif',
    },
    {
        id: 13,
        name: 'Flexão de braço fechada',
        img: 'https://gymvisual.com/img/p/2/1/7/7/6/21776.gif',
    },
    {
        id: 14,
        name: 'Mergulho',
        img: 'https://gymvisual.com/img/p/1/0/2/8/6/10286.gif',
    },
    {
        id: 15,
        name: 'Mergulho no graviton',
        img: 'https://gymvisual.com/img/p/1/0/7/0/1/10701.gif',
    },
    {
        id: 16,
        name: 'Pullover com halteres',
        img: 'https://gymvisual.com/img/p/8/9/3/3/8933.gif',
    },
    {
        id: 17,
        name: 'Supino com anilha prensafa em pé',
        img: 'https://gymvisual.com/img/p/5/5/7/8/5578.gif',
    },
    {
        id: 18,
        name: 'Supino declinado com barra',
        img: 'https://gymvisual.com/img/p/4/7/6/4/4764.gif',
    },
    {
        id: 19,
        name: 'Supino declinado com halteres',
        img: 'https://gymvisual.com/img/p/1/1/6/3/2/11632.gif',
    },
    {
        id: 20,
        name: 'Supino declinado na maquina',
        img: 'https://gymvisual.com/img/p/6/5/6/8/6568.gif',
    },
    {
        id: 21,
        name: 'Supino em pé na polia',
        img: 'https://gymvisual.com/img/p/1/6/8/4/3/16843.gif',
    },
    {
        id: 22,
        name: 'Supino inclinado com barra',
        img: 'https://gymvisual.com/img/p/4/7/7/8/4778.gif',
    },
    {
        id: 23,
        name: 'Supino inclinado com rotação',
        img: 'https://gymvisual.com/img/p/2/7/6/7/2/27672.gif',
    },
    {
        id: 24,
        name: 'Supino inclinado em 30° com halteres',
        img: 'https://gymvisual.com/img/p/5/9/0/5/5905.gif',
    },
    {
        id: 25,
        name: 'Supino inclinado na máquina',
        img: 'https://gymvisual.com/img/p/6/5/6/7/6567.gif',
    },
    {
        id: 26,
        name: 'Supino na maquina',
        img: 'https://gymvisual.com/img/p/9/4/0/8/9408.gif',
    },
    {
        id: 27,
        name: 'Supino plano com barra',
        img: 'https://gymvisual.com/img/p/2/1/8/8/9/21889.gif',
    },
    {
        id: 28,
        name: 'Supino plano com halteres',
        img: 'https://gymvisual.com/img/p/2/1/8/3/2/21832.gif',
    },
    {
        id: 29,
        name: 'Supino Svend com halteres deitado',
        img: 'https://gymvisual.com/img/p/1/8/3/5/3/18353.gif',
    },
    {
        id: 30,
        name: 'Supino unilateral inclinado com halteres',
        img: 'https://gymvisual.com/img/p/6/5/4/6/6546.gif',
    },
];
const backData = [
    {
        id: 101,
        name: 'Barra fixa com pegada supinada fechada',
        img: 'https://gymvisual.com/img/p/1/8/6/6/7/18667.gif',
    },
    {
        id: 102,
        name: 'Barra neutra lado a lado',
        img: 'https://gymvisual.com/img/p/2/0/3/0/3/20303.gif',
    },
    {
        id: 103,
        name: 'Encolhimento de ombros com barra na polia',
        img: 'https://gymvisual.com/img/p/1/1/6/8/8/11688.gif',
    },
    {
        id: 104,
        name: 'Encolhimento de ombros com barra pela frente',
        img: 'https://gymvisual.com/img/p/2/1/8/5/9/21859.gif',
    },
    {
        id: 105,
        name: 'Encolhimento de ombros com barra por trás',
        img: 'https://gymvisual.com/img/p/1/6/9/4/3/16943.gif',
    },
    {
        id: 106,
        name: 'Encolhimento de ombros com halteres',
        img: 'https://gymvisual.com/img/p/1/0/0/7/3/10073.gif',
    },
    {
        id: 107,
        name: 'Pullover com barra',
        img: 'https://gymvisual.com/img/p/2/0/9/7/2/20972.gif',
    },
    {
        id: 108,
        name: 'Pullover em pé com barra curta',
        img: 'https://gymvisual.com/img/p/5/9/1/7/5917.gif',
    },
    {
        id: 109,
        name: 'Puxada aberta no graviton',
        img: 'https://gymvisual.com/img/p/1/0/7/0/2/10702.gif',
    },
    {
        id: 110,
        name: 'Puxada aberta por trás na barra fixa',
        img: 'https://gymvisual.com/img/p/5/4/0/4/5404.gif',
    },
    {
        id: 111,
        name: 'Puxada ajoelhado na polia',
        img: 'https://gymvisual.com/img/p/1/6/8/4/2/16842.gif',
    },
    {
        id: 112,
        name: 'Puxada na máquina',
        img: 'https://gymvisual.com/img/p/1/2/5/7/7/12577.gif',
    },
    {
        id: 113,
        name: 'Puxada no banco inclinado com Barra',
        img: 'https://gymvisual.com/img/p/6/5/8/3/6583.gif',
    },
    {
        id: 114,
        name: 'Puxada por trás pegada aberta',
        img: 'https://gymvisual.com/img/p/2/4/5/2/1/24521.gif',
    },
    {
        id: 115,
        name: 'Remada alta na polia com corda',
        img: 'https://gymvisual.com/img/p/8/9/3/6/8936.gif',
    },
    {
        id: 116,
        name: 'Remada curvada com barra pegada invertida',
        img: 'https://gymvisual.com/img/p/1/0/6/1/9/10619.gif',
    },
    {
        id: 117,
        name: 'Remada cavalinho',
        img: 'https://gymvisual.com/img/p/5/3/1/1/5311.gif',
    },
    {
        id: 118,
        name: 'Remada curvada no Smith pegada pronada',
        img: 'https://gymvisual.com/img/p/6/6/2/3/6623.gif',
    },
    {
        id: 119,
        name: 'Remada curvada no Smith pegada supinada',
        img: 'https://gymvisual.com/img/p/2/0/9/9/8/20998.gif',
    },
    {
        id: 120,
        name: 'Remada fechada com halteres no banco inclinado',
        img: 'https://gymvisual.com/img/p/1/4/9/7/3/14973.gif',
    },
    {
        id: 121,
        name: 'Remada inclinada com barra',
        img: 'https://gymvisual.com/img/p/1/0/6/1/7/10617.gif',
    },
    {
        id: 122,
        name: 'Remada inclinada com halteres',
        img: 'https://gymvisual.com/img/p/6/6/0/9/6609.gif',
    },
    {
        id: 123,
        name: 'Remada inclinada em pé com halteres',
        img: 'https://gymvisual.com/img/p/1/0/1/7/1/10171.gif',
    },
    {
        id: 124,
        name: 'Ramada inclinado pgada aberta',
        img: 'https://gymvisual.com/img/p/1/4/8/2/8/14828.gif',
    },
    {
        id: 125,
        name: 'Remada inclinado pegada fechada',
        img: 'https://gymvisual.com/img/p/6/6/1/3/6613.gif',
    },
    {
        id: 126,
        name: 'Remada invertida com pegada neutra',
        img: 'https://gymvisual.com/img/p/4/9/1/3/4913.gif',
    },
    {
        id: 127,
        name: 'Remada no TRX',
        img: 'https://gymvisual.com/img/p/5/7/9/3/5793.gif',
    },
    {
        id: 128,
        name: 'Remada sentado na máquina',
        img: 'https://gymvisual.com/img/p/1/8/3/2/3/18323.gif',
    },
    {
        id: 129,
        name: 'Remada sentado na máquina',
        img: 'https://gymvisual.com/img/p/1/2/5/7/8/12578.gif',
    },
    {
        id: 130,
        name: 'Remada unilateral com haltere',
        img: 'https://gymvisual.com/img/p/1/6/9/5/8/16958.gif',
    },
    {
        id: 131,
        name: 'Remada unilateral na polia',
        img: 'https://gymvisual.com/img/p/5/8/9/6/5896.gif',
    },
    {
        id: 132,
        name: 'Remada unilateral sentado na máquina',
        img: 'https://gymvisual.com/img/p/1/4/9/3/9/14939.gif',
    },
];
const legData = [
    {
        id: 201,
        name: 'Agachamento livre',
        img: 'https://gymvisual.com/img/p/1/7/3/1/3/17313.gif',
    },
    {
        id: 202,
        name: 'Abertura de pernas deitado',
        img: 'https://gymvisual.com/img/p/2/1/7/4/5/21745.gif',
    },
    {
        id: 203,
        name: 'Afundo',
        img: 'https://gymvisual.com/img/p/1/6/9/0/0/16900.gif',
    },
    {
        id: 204,
        name: 'Afundo smith',
        img: 'https://gymvisual.com/img/p/1/1/7/6/0/11760.gif',
    },
    {
        id: 205,
        name: 'Agachamento com barra',
        img: 'https://gymvisual.com/img/p/2/0/2/6/8/20268.gif',
    },
    {
        id: 206,
        name: 'Agachamento com barra pela frente',
        img: 'https://gymvisual.com/img/p/1/1/6/6/2/11662.gif',
    },
    {
        id: 207,
        name: 'Agachamento com braços estendidos na barra',
        img: 'https://gymvisual.com/img/p/2/0/8/3/1/20831.gif',
    },
    {
        id: 208,
        name: 'Agachamento com halteres',
        img: 'https://gymvisual.com/img/p/2/0/2/7/4/20274.gif',
    },
    {
        id: 209,
        name: 'Agachamento com salto',
        img: 'https://gymvisual.com/img/p/1/7/3/1/3/17313.gif',
    },
    {
        id: 210,
        name: 'Agachamento goblet',
        img: 'https://gymvisual.com/img/p/1/8/3/6/4/18364.gif',
    },
    {
        id: 211,
        name: 'Agachamento hack invertido',
        img: 'https://gymvisual.com/img/p/2/4/3/2/6/24326.gif',
    },
    {
        id: 212,
        name: 'Agachamento lateral',
        img: 'https://gymvisual.com/img/p/1/2/2/9/9/12299.gif',
    },
    {
        id: 213,
        name: 'Agachamento livre',
        img: 'https://gymvisual.com/img/p/1/9/8/8/5/19885.gif',
    },
    {
        id: 214,
        name: 'Agachamento smith',
        img: 'https://gymvisual.com/img/p/2/9/8/3/2/29832.gif',
    },
    {
        id: 215,
        name: 'Cadeira adutora',
        img: 'https://gymvisual.com/img/p/1/8/3/2/0/18320.gif',
    },
    {
        id: 216,
        name: 'Cadeira extensora',
        img: 'https://media.tenor.com/fNeMiJuGmEcAAAAC/cadeira-extensora-extensora.gif',
    },
    {
        id: 217,
        name: 'Cadeira flexora',
        img: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/lever-seated-leg-curl-1.gif',
    },
    {
        id: 218,
        name: 'Elevação de gêmeos em pé com barra',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Elevacao-de-panturrilha-com-barra.gif',
    },
    {
        id: 219,
        name: 'Elevação de gêmeos sentado maquina',
        img: 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/lever-seated-calf-raise-.gif',
    },
    {
        id: 220,
        name: 'Agachamento hack',
        img: 'https://gymvisual.com/img/p/1/0/7/2/7/10727.gif',
    },
    {
        id: 221,
        name: 'Flexora unilateral de pernas em pé',
        img: 'https://gymvisual.com/img/p/2/1/6/1/3/21613.gif',
    },
    {
        id: 222,
        name: 'Leg press aberto',
        img: 'https://gymvisual.com/img/p/1/8/3/2/5/18325.gif',
    },
    {
        id: 223,
        name: 'Leg press fechado',
        img: 'https://gymvisual.com/img/p/1/8/3/2/4/18324.gif',
    },
    {
        id: 224,
        name: 'Leg press sentado',
        img: 'https://gymvisual.com/img/p/9/4/0/4/9404.gif',
    },
    {
        id: 225,
        name: 'Leg press unilateral',
        img: 'https://gymvisual.com/img/p/2/9/5/5/1/29551.gif',
    },
    {
        id: 226,
        name: 'Leg press vertical',
        img: 'https://gymvisual.com/img/p/1/8/3/2/7/18327.gif',
    },
    {
        id: 227,
        name: 'Levantamento terra com barra',
        img: 'https://gymvisual.com/img/p/1/2/6/0/4/12604.gif',
    },
    {
        id: 228,
        name: 'Levantamento terra sumô',
        img: 'https://gymvisual.com/img/p/1/8/5/8/7/18587.gif',
    },
    {
        id: 229,
        name: 'Subida no Banco com halteres',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/step-up-com-halteres.gif',
    },
    {
        id: 230,
        name: 'Salto no caixote',
        img: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/box-jump.gif',
    },
    {
        id: 231,
        name: 'Passada com peso',
        img: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-lunges.gif',
    },
    {
        id: 232,
        name: 'Panturrilha no leg press',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Panturrilha-no-leg-press.gif',
    },
    {
        id: 233,
        name: 'Mesa Flexora',
        img: 'https://gymvisual.com/img/p/1/3/0/9/5/13095.gif',
    },
    {
        id: 234,
        name: 'Mesa flexora unilateral',
        img: 'https://gymvisual.com/img/p/2/1/6/8/3/21683.gif',
    },
    {
        id: 235,
        name: 'Meio agachamento',
        img: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/frog-squat.gif',
    },
];
const bicepsData = [
    {
        id: 301,
        name: 'Puxada na barra fixa com pegada invertida',
        img: 'https://gymvisual.com/img/p/2/1/6/7/7/21677.gif',
    },
    {
        id: 302,
        name: 'Puxada no graviton',
        img: 'https://gymvisual.com/img/p/6/3/3/5/6335.gif',
    },
    {
        id: 303,
        name: 'Rosca alternada com haltere',
        img: 'https://gymvisual.com/img/p/5/0/1/8/5018.gif',
    },
    {
        id: 304,
        name: 'Rosca alternada com rotação',
        img: 'https://gymvisual.com/img/p/7/2/8/1/7281.gif',
    },
    {
        id: 305,
        name: 'Rosca alternada inclinada com haltere',
        img: 'https://gymvisual.com/img/p/5/0/4/8/5048.gif',
    },
    {
        id: 306,
        name: 'Rosca com barra',
        img: 'https://gymvisual.com/img/p/2/2/6/4/6/22646.gif',
    },
    {
        id: 307,
        name: 'Rosca com barra no banco inclinado',
        img: 'https://gymvisual.com/img/p/4/8/0/3/4803.gif',
    },
    {
        id: 308,
        name: 'Rosca com barra W pegada fechada',
        img: 'https://gymvisual.com/img/p/2/1/6/7/8/21678.gif',
    },
    {
        id: 309,
        name: 'Rosca com corda na polia',
        img: 'https://gymvisual.com/img/p/2/0/8/2/1/20821.gif',
    },
    {
        id: 310,
        name: 'Rosca concentrada',
        img: 'https://gymvisual.com/img/p/2/6/2/1/9/26219.gif',
    },
    {
        id: 311,
        name: 'Rosca em pé com halteres',
        img: 'https://gymvisual.com/img/p/2/1/5/4/4/21544.gif',
    },
    {
        id: 312,
        name: 'Rosca em pé com rotação',
        img: 'https://gymvisual.com/img/p/5/0/1/8/5018.gif',
    },
    {
        id: 313,
        name: 'Rosca em pé na polia',
        img: 'https://gymvisual.com/img/p/7/2/4/3/7243.gif',
    },
    {
        id: 314,
        name: 'Rosca fechada na polia deitado',
        img: 'https://gymvisual.com/img/p/2/0/4/6/9/20469.gif',
    },
    {
        id: 315,
        name: 'Rosca inclinada com halteres',
        img: 'https://gymvisual.com/img/p/5/0/6/3/5063.gif',
    },
    {
        id: 316,
        name: 'Rosca inversa com barra',
        img: 'https://gymvisual.com/img/p/2/4/7/5/8/24758.gif',
    },
    {
        id: 317,
        name: 'Rosca invertida com rotação',
        img: 'https://gymvisual.com/img/p/7/2/7/0/7270.gif',
    },
    {
        id: 318,
        name: '',
        img: 'https://gymvisual.com/img/p/7/2/8/1/7281.gif',
    },
    {
        id: 319,
        name: 'Rosca martelo com banco Scott na polia',
        img: 'https://gymvisual.com/img/p/7/2/5/2/7252.gif',
    },
    {
        id: 320,
        name: 'Rosca martelo em pé',
        img: 'https://gymvisual.com/img/p/5/0/4/6/5046.gif',
    },
    {
        id: 321,
        name: 'Rosca na polia alta',
        img: 'https://gymvisual.com/img/p/4/9/6/2/4962.gif',
    },
    {
        id: 322,
        name: 'Rosca na polia com banco Scott',
        img: 'https://gymvisual.com/img/p/2/1/9/2/8/21928.gif',
    },
    {
        id: 323,
        name: 'Rosca Scott com barra W',
        img: 'https://gymvisual.com/img/p/2/8/4/1/0/28410.gif',
    },
    {
        id: 324,
        name: 'Rosca Scott na máquina',
        img: 'https://gymvisual.com/img/p/1/4/9/4/6/14946.gif',
    },
    {
        id: 325,
        name: 'Rosca unilateral máquina',
        img: 'https://gymvisual.com/img/p/2/1/9/2/7/21927.gif',
    },
    {
        id: 326,
        name: 'Rosca unilateral na polia (sem puxador)',
        img: 'https://gymvisual.com/img/p/2/3/1/2/6/23126.gif',
    },
];
const shoulderData = [
    {
        id: 401,
        name: 'Crufixo invertido inclinado com haltere',
        img: 'https://gymvisual.com/img/p/1/8/3/6/6/18366.gif',
    },
    {
        id: 402,
        name: 'Crufixo invertido na máquina',
        img: 'https://gymvisual.com/img/p/5/3/3/9/5339.gif',
    },
    {
        id: 403,
        name: 'Crufixo invertido na máquina',
        img: 'https://gymvisual.com/img/p/5/3/3/9/5339.gif',
    },
    {
        id: 404,
        name: 'Cruzamento de cabos com inversão',
        img: 'https://gymvisual.com/img/p/2/4/8/0/6/24806.gif',
    },
    {
        id: 405,
        name: 'Desenvolvimento Arnold',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-desenvolvimento-arnold-para-ombros.gif',
    },
    {
        id: 406,
        name: 'Desenvolvimento de ombros por trás com barra',
        img: 'https://gymvisual.com/img/p/4/8/2/0/4820.gif',
    },
    {
        id: 407,
        name: 'Desenvolvimento de ombros em pé com halteres',
        img: 'https://gymvisual.com/img/p/5/1/6/7/5167.gif',
    },
    {
        id: 408,
        name: 'Desenvolvimento de ombros militar',
        img: 'https://gymvisual.com/img/p/1/6/8/0/3/16803.gif',
    },
    {
        id: 409,
        name: 'Desenvolvimento de ombros na máquina',
        img: 'https://gymvisual.com/img/p/1/4/8/5/0/14850.gif',
    },
    {
        id: 410,
        name: 'Desenvolvimento de ombros no Smith',
        img: 'https://gymvisual.com/img/p/1/8/3/2/8/18328.gif',
    },
    {
        id: 411,
        name: 'Desenvolvimento de ombros por trás no Smith',
        img: 'https://gymvisual.com/img/p/5/4/7/1/5471.gif',
    },
    {
        id: 412,
        name: 'Desenvolvimento sentado com halteres',
        img: 'https://gymvisual.com/img/p/2/4/9/3/8/24938.gif',
    },
    {
        id: 413,
        name: 'Elevação de deltoide posterior com haltere de lado no banco',
        img: 'https://gymvisual.com/img/p/5/0/8/2/5082.gif',
    },
    {
        id: 414,
        name: 'Elevação frontal com barra',
        img: 'https://gymvisual.com/img/p/4/7/7/2/4772.gif',
    },
    {
        id: 415,
        name: 'Elevação frontal com corda',
        img: 'https://gymvisual.com/img/p/4/8/9/5/4895.gif',
    },
    {
        id: 416,
        name: 'Elevação frontal com halteres',
        img: 'https://gymvisual.com/img/p/2/4/9/4/0/24940.gif',
    },
    {
        id: 417,
        name: 'Elevação frontal com halteres alternada',
        img: 'https://gymvisual.com/img/p/2/1/6/0/8/21608.gif',
    },
    {
        id: 418,
        name: 'Elevação frontal com halteres,sentado com braços estendidos',
        img: 'https://gymvisual.com/img/p/5/1/3/3/5133.gif',
    },
    {
        id: 419,
        name: 'Elevação frontal de anilha com rotação',
        img: 'https://gymvisual.com/img/p/5/5/6/6/5566.gif',
    },
    {
        id: 420,
        name: 'Elevação frontal e lateral com halteres',
        img: 'https://gymvisual.com/img/p/5/0/7/6/5076.gif',
    },
    {
        id: 421,
        name: 'Elevação unilateral na polia',
        img: 'https://gymvisual.com/img/p/1/8/4/3/4/18434.gif',
    },
    {
        id: 422,
        name: 'Remada alta com barra',
        img: 'https://gymvisual.com/img/p/2/4/9/6/2/24962.gif',
    },
    {
        id: 423,
        name: 'Remada alta com halteres',
        img: 'https://gymvisual.com/img/p/2/4/9/6/0/24960.gif',
    },
    {
        id: 424,
        name: 'Remada alta na polia',
        img: 'https://gymvisual.com/img/p/2/4/9/3/6/24936.gif',
    },
    {
        id: 425,
        name: 'Remada com halteres no banco inclinado',
        img: 'https://gymvisual.com/img/p/2/7/6/3/2/27632.gif',
    },
    {
        id: 426,
        name: 'Remada curvada no Smith',
        img: 'https://gymvisual.com/img/p/2/4/4/6/9/24469.gif',
    },
    {
        id: 427,
        name: 'Remada pronada com corda',
        img: 'https://gymvisual.com/img/p/2/4/9/7/4/24974.gif',
    },
    {
        id: 428,
        name: 'Rotação externa de ombro',
        img: 'https://gymvisual.com/img/p/3/3/3/4/6/33346.gif',
    },
    {
        id: 429,
        name: 'Remada aberta no cross',
        img: 'https://gymvisual.com/img/p/2/8/3/3/3/28333.gif',
    },
];
const upper_armsData = [
    {
        id: 501,
        name: 'Puxada no graviton',
        img: 'https://gymvisual.com/img/p/4/7/5/0/4750.gif',
    },
    {
        id: 502,
        name: 'Rosca alternada com haltere em pé',
        img: 'https://gymvisual.com/img/p/5/0/1/8/5018.gif',
    },
    {
        id: 503,
        name: 'Rosca com barra',
        img: 'https://gymvisual.com/img/p/1/0/4/7/4/10474.gif',
    },
    {
        id: 504,
        name: 'Rosca com barra no banco inclinado',
        img: 'https://gymvisual.com/img/p/4/8/0/3/4803.gif',
    },
    {
        id: 505,
        name: 'Rosca com barra W pegada fechada',
        img: 'https://gymvisual.com/img/p/4/8/4/4/4844.gif',
    },
    {
        id: 507,
        name: 'Rosca com corda na polia',
        img: 'https://gymvisual.com/img/p/7/0/7/4/7074.gif',
    },
    {
        id: 508,
        name: 'Rosca com rotação',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-com-halteres-no-banco-inclinado.gif',
    },
    {
        id: 509,
        name: 'Rosca concentrada',
        img: 'https://gymvisual.com/img/p/2/8/1/1/8/28118.gif',
    },
    {
        id: 511,
        name: 'Rosca em pé com rotação',
        img: 'https://gymvisual.com/img/p/1/2/2/4/6/12246.gif',
    },
    {
        id: 512,
        name: 'Rosca em pé com halteres',
        img: 'https://gymvisual.com/img/p/5/0/2/7/5027.gif',
    },
    {
        id: 513,
        name: 'Rosca em pé na polia',
        img: 'https://gymvisual.com/img/p/2/8/1/2/0/28120.gif',
    },
    {
        id: 514,
        name: 'Rosca fechada na polia deitado',
        img: 'https://gymvisual.com/img/p/2/0/4/6/9/20469.gif',
    },
    {
        id: 515,
        name: 'Rosca inclinada com halteres',
        img: 'https://gymvisual.com/img/p/1/1/6/8/1/11681.gif',
    },
    {
        id: 516,
        name: 'Rosca inversa com barra',
        img: 'https://gymvisual.com/img/p/2/4/7/5/8/24758.gif',
    },
    {
        id: 517,
        name: 'Rosca inversa com halteres',
        img: 'https://gymvisual.com/img/p/7/2/6/7/7267.gif',
    },
    {
        id: 518,
        name: 'Rosca inversa na polia',
        img: 'https://gymvisual.com/img/p/1/1/6/8/0/11680.gif',
    },
    {
        id: 519,
        name: 'Rosca martelo em pé',
        img: 'https://gymvisual.com/img/p/2/0/8/7/9/20879.gif',
    },
    {
        id: 520,
        name: 'Rosca martelo no banco scott',
        img: 'https://gymvisual.com/img/p/5/1/1/1/5111.gif',
    },
    {
        id: 521,
        name: 'Rosca na polia alta',
        img: 'https://gymvisual.com/img/p/1/1/6/8/9/11689.gif',
    },
    {
        id: 522,
        name: 'Rosca alternado no banco scott',
        img: 'https://gymvisual.com/img/p/7/2/6/0/7260.gif',
    },
    {
        id: 523,
        name: 'Rosca sentado com halteres',
        img: 'https://gymvisual.com/img/p/2/0/3/7/1/20371.gif',
    },
    {
        id: 524,
        name: 'Rosca Scott com barra',
        img: 'https://gymvisual.com/img/p/4/8/0/1/4801.gif',
    },
    {
        id: 525,
        name: 'Rosca Scott na máquina',
        img: 'https://gymvisual.com/img/p/2/1/6/0/3/21603.gif',
    },
    {
        id: 526,
        name: 'Rosca unilateral na polia',
        img: 'https://gymvisual.com/img/p/2/2/9/7/9/22979.gif',
    },
    {
        id: 527,
        name: 'tríceps na polia com corda',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
    },
    {
        id: 528,
        name: 'Barra reta suspensa na polia',
        img: 'https://gymvisual.com/img/p/1/8/5/9/6/18596.gif',
    },
    {
        id: 529,
        name: 'barra reta na polia baixa',
        img: 'https://gymvisual.com/img/p/2/7/9/3/4/27934.gif',
    },
    {
        id: 530,
        name: 'Extensão de tríceps no cabo sob a cabeça com corda',
        img: 'https://gymvisual.com/img/p/4/9/2/7/4927.gif',
    },
];
const glutesData = [
    {
        id: 601,
        name: 'Abdominal infra com elevação de quadril',
        img: 'https://gymvisual.com/img/p/1/2/1/3/2/12132.gif',
    },
    {
        id: 602,
        name: 'Abdução de quadril na polia',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/abducao-de-pernas-na-maquina-com-cabos.gif',
    },
    {
        id: 603,
        name: 'Adução de quadril tesoura',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Adductor-Magnus-Stretch.gif',
    },
    {
        id: 604,
        name: 'Afundo',
        img: 'https://gymvisual.com/img/p/8/9/1/0/8910.gif',
    },
    {
        id: 605,
        name: 'Afundo com barra',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-com-barra.gif',
    },
    {
        id: 606,
        name: 'Afundo no smith',
        img: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-no-smith-machine.gif',
    },
    {
        id: 607,
        name: 'Afundo no banco',
        img: 'https://gymvisual.com/img/p/5/6/0/1/5601.gif',
    },
    {
        id: 608,
        name: 'Afundo cruzado',
        img: 'https://gymvisual.com/img/p/5/6/0/0/5600.gif',
    },
    {
        id: 609,
        name: 'Afundo e passada',
        img: 'https://gymvisual.com/img/p/7/0/2/5/7025.gif',
    },
    {
        id: 610,
        name: 'Agachamento frontal',
        img: 'https://gymvisual.com/img/p/2/2/8/5/1/22851.gif',
    },
    {
        id: 611,
        name: 'Agachamento sumô com barra',
        img: 'https://gymvisual.com/img/p/5/7/6/4/5764.gif',
    },
    {
        id: 612,
        name: 'Agachamento sumô com haltere',
        img: 'https://gymvisual.com/img/p/1/8/5/2/6/18526.gif',
    },
    {
        id: 613,
        name: 'Agachamento sumô no smith',
        img: 'https://gymvisual.com/img/p/2/9/0/3/5/29035.gif',
    },
    {
        id: 614,
        name: 'Cadeira abdutora',
        img: 'https://gymvisual.com/img/p/1/8/3/1/9/18319.gif',
    },
    {
        id: 615,
        name: 'Coice de glúteos na máquina',
        img: 'https://gymvisual.com/img/p/2/9/1/1/5/29115.gif',
    },
    {
        id: 616,
        name: 'Elevação de Braço e Perna',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Bird-Dog.gif',
    },
    {
        id: 617,
        name: 'Elevação de quadril na máquina',
        img: 'https://gymvisual.com/img/p/1/6/8/8/6/16886.gif',
    },
    {
        id: 618,
        name: 'Elevação de quadril no banco',
        img: 'https://gymvisual.com/img/p/1/0/1/0/6/10106.gif',
    },
    {
        id: 619,
        name: 'Extensão de quadril unilateral curvado na polia',
        img: 'https://gymvisual.com/img/p/1/8/5/3/1/18531.gif',
    },
    {
        id: 620,
        name: 'Inclinação Pélvica',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Pelvic-Tilt.gif',
    },
    {
        id: 621,
        name: 'good morning',
        img: 'https://gymvisual.com/img/p/4/8/5/3/4853.gif',
    },
    {
        id: 622,
        name: 'Glúteo no graviton',
        img: 'https://gymvisual.com/img/p/2/1/0/0/4/21004.gif',
    },
    {
        id: 623,
        name: 'Glúteos em 4 apoios coice',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Donkey-Kicks.gif',
    },
    {
        id: 624,
        name: 'Glúteos em 4 apoios cachorrinho',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Fire-Hydrant.gif',
    },
    {
        id: 625,
        name: 'Glúteos com perna estendida',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank-Leg-Lift.gif',
    },
    {
        id: 626,
        name: 'Levantamento terra romeno',
        img: 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/barbell-romanian-deadlift.gif',
    },
    {
        id: 627,
        name: 'Levantamento terra romeno unilateral',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2022/09/Dumbbell-Single-Leg-Deadlift.gif',
    },
    {
        id: 628,
        name: 'Squat Articulado',
        img: 'https://gymvisual.com/img/p/2/4/3/2/6/24326.gif',
    },
    {
        id: 629,
        name: 'Stiff com Corda',
        img: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Cable-Pull-Through.gif',
    },
    {
        id: 630,
        name: 'Superman',
        img: 'https://gymvisual.com/img/p/2/4/1/8/4/24184.gif',
    },
];
const abdomenData = [
    {
        id: 701,
        name: 'Abdominal ajoelhado na polia',
        img: 'https://gymvisual.com/img/p/2/1/5/2/5/21525.gif',
    },
    {
        id: 702,
        name: 'Abdominal bicicleta',
        img: 'https://gymvisual.com/img/p/2/7/6/6/2/27662.gif',
    },
    {
        id: 703,
        name: 'Abdominal cruzado com faixa',
        img: 'https://gymvisual.com/img/p/1/0/6/2/5/10625.gif',
    },
    {
        id: 704,
        name: 'Abdominal canivete',
        img: 'https://gymvisual.com/img/p/5/5/4/8/5548.gif',
    },
    {
        id: 705,
        name: ' Elevação de Pernas em Posição Vertical',
        img: 'https://gymvisual.com/img/p/1/8/3/3/1/18331.gif',
    },
    {
        id: 706,
        name: 'Abdominal canivete com bola',
        img: 'https://gymvisual.com/img/p/1/4/8/1/2/14812.gif',
    },
    {
        id: 707,
        name: 'Abdominal com as pernas na bola',
        img: 'https://gymvisual.com/img/p/5/0/0/2/5002.gif',
    },
    {
        id: 708,
        name: 'Abdominal com giro',
        img: 'https://gymvisual.com/img/p/2/7/1/0/3/27103.gif',
    },
    {
        id: 709,
        name: 'Abdominal com pernas elevadas',
        img: 'https://gymvisual.com/img/p/5/4/6/0/5460.gif',
    },
    {
        id: 710,
        name: 'Abdominal declinado',
        img: 'https://gymvisual.com/img/p/9/2/0/1/9201.gif',
    },
    {
        id: 711,
        name: 'Abdominal infra com elevação das pernas',
        img: 'https://gymvisual.com/img/p/1/9/0/1/9/19019.gif',
    },
    {
        id: 712,
        name: 'Abdominal infra no banco',
        img: 'https://gymvisual.com/img/p/5/4/2/2/5422.gif',
    },
    {
        id: 713,
        name: 'Abdominal invertido com bola',
        img: 'https://gymvisual.com/img/p/5/5/5/8/5558.gif',
    },
    {
        id: 714,
        name: 'Abdominal invertido no banco',
        img: 'https://gymvisual.com/img/p/2/0/3/2/7/20327.gif',
    },
    {
        id: 715,
        name: 'Abdominal na bola',
        img: 'https://gymvisual.com/img/p/9/7/9/3/9793.gif',
    },
    {
        id: 716,
        name: 'Abdominal na máquina',
        img: 'https://gymvisual.com/img/p/1/6/9/0/9/16909.gif',
    },
    {
        id: 717,
        name: 'Abdominal no solo',
        img: 'https://gymvisual.com/img/p/5/0/0/7/5007.gif',
    },
    {
        id: 718,
        name: 'Abdominal oblíquo deitado',
        img: 'https://gymvisual.com/img/p/2/7/1/0/3/27103.gif',
    },
    {
        id: 719,
        name: 'Abdominal oblíquo lateral',
        img: 'https://gymvisual.com/img/p/1/9/8/5/5/19855.gif',
    },
    {
        id: 720,
        name: 'Abdominal para-brisa',
        img: 'https://gymvisual.com/img/p/5/9/3/8/5938.gif',
    },
    {
        id: 721,
        name: 'Abdominal pé na barra',
        img: 'https://gymvisual.com/img/p/1/8/4/4/1/18441.gif',
    },
    {
        id: 722,
        name: 'Abdominal sentado',
        img: 'https://gymvisual.com/img/p/1/5/0/9/2/15092.gif',
    },
    {
        id: 723,
        name: 'Abdominal supra declinado',
        img: 'https://gymvisual.com/img/p/2/4/3/1/5/24315.gif',
    },
    {
        id: 724,
        name: 'Abdominal tesoura',
        img: 'https://gymvisual.com/img/p/1/4/8/3/5/14835.gif',
    },
    {
        id: 725,
        name: 'Elevação da perna e braço deitado de lado',
        img: 'https://gymvisual.com/img/p/6/7/0/5/6705.gif',
    },
    {
        id: 726,
        name: 'Elevação de joelhos no aparelho de mergulho',
        img: 'https://gymvisual.com/img/p/7/6/3/4/7634.gif',
    },
    {
        id: 727,
        name: 'Inclinação lateral com halteres',
        img: 'https://gymvisual.com/img/p/2/5/8/2/9/25829.gif',
    },
    {
        id: 728,
        name: 'Inclinação lateral na polia',
        img: 'https://gymvisual.com/img/p/2/4/9/7/6/24976.gif',
    },
    {
        id: 729,
        name: 'Rodinha',
        img: 'https://gymvisual.com/img/p/2/7/6/3/4/27634.gif',
    },
    {
        id: 730,
        name: 'Prancha',
        img: 'https://gymvisual.com/img/p/1/2/7/1/0/12710.gif',
    },
    {
        id: 731,
        name: 'Prancha Lateral',
        img: 'https://gymvisual.com/img/p/1/0/4/2/7/10427.gif',
    },
];
const categoriesArray = [
    { categoryID: 1, name: 'Peito' },
    { categoryID: 2, name: 'Costas' },
    { categoryID: 3, name: 'Perna' },
    { categoryID: 4, name: 'Biceps' },
    { categoryID: 5, name: 'Ombro' },
    { categoryID: 6, name: 'Triceps' },
    { categoryID: 7, name: 'Gluteos' },
    { categoryID: 8, name: 'Abdomen' },
];
async function main() {
    console.log(`Start seeding ...`);
    console.log('Criando as categorias');
    for (const category of categoriesArray) {
        const item = await prisma.category.create({
            data: {
                categoryID: category.categoryID,
                name: category.name,
            },
        });
        console.log(`Categoria adicionada: ${item.name}`);
    }
    console.log('Alimentando o banco de dados exercicios de peito');
    for (const chest of chestData) {
        await prisma.exercise.create({
            data: {
                name: chest.name,
                img: chest.img,
                exerciseID: chest.id,
            },
        });
        console.log(`Exercicio adicionado: ${chest.name}`);
    }
    for (const chest of chestData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 1,
                exerciseIdReference: chest.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Costas`);
    for (const back of backData) {
        await prisma.exercise.create({
            data: {
                exerciseID: back.id,
                name: back.name,
                img: back.img,
            },
        });
        console.log(`Exercicio adicionado: ${back.name}`);
    }
    for (const back of backData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 2,
                exerciseIdReference: back.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Perna`);
    for (const leg of legData) {
        await prisma.exercise.create({
            data: {
                exerciseID: leg.id,
                name: leg.name,
                img: leg.img,
            },
        });
        console.log(`Exercicio adicionado: ${leg.name}`);
    }
    for (const leg of legData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 3,
                exerciseIdReference: leg.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Bicepes`);
    for (const biceps of bicepsData) {
        await prisma.exercise.create({
            data: {
                exerciseID: biceps.id,
                name: biceps.name,
                img: biceps.img,
            },
        });
        console.log(`Exercicio adicionado: ${biceps.name}`);
    }
    for (const biceps of bicepsData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 4,
                exerciseIdReference: biceps.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Ombro`);
    for (const shoulder of shoulderData) {
        await prisma.exercise.create({
            data: {
                exerciseID: shoulder.id,
                name: shoulder.name,
                img: shoulder.img,
            },
        });
        console.log(`Exercicio adicionado: ${shoulder.name}`);
    }
    for (const shoulder of shoulderData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 5,
                exerciseIdReference: shoulder.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Triceps`);
    for (const upper_arms of upper_armsData) {
        await prisma.exercise.create({
            data: {
                exerciseID: upper_arms.id,
                name: upper_arms.name,
                img: upper_arms.img,
            },
        });
        console.log(`Exercicio adicionado: ${upper_arms.name}`);
    }
    for (const upper_arms of upper_armsData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 6,
                exerciseIdReference: upper_arms.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Gluteos`);
    for (const glutes of glutesData) {
        await prisma.exercise.create({
            data: {
                exerciseID: glutes.id,
                name: glutes.name,
                img: glutes.img,
            },
        });
        console.log(`Exercicio adicionado: ${glutes.name}`);
    }
    for (const glutes of glutesData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 7,
                exerciseIdReference: glutes.id,
            },
        });
    }
    console.log(`Alimentando no banco de dados exercicios de Abdomen`);
    for (const abdomen of abdomenData) {
        await prisma.exercise.create({
            data: {
                exerciseID: abdomen.id,
                name: abdomen.name,
                img: abdomen.img,
            },
        });
        console.log(`Exercicio adicionado: ${abdomen.name}`);
    }
    for (const abdomen of abdomenData) {
        await prisma.categoryToExercise.create({
            data: {
                categoryIdReference: 8,
                exerciseIdReference: abdomen.id,
            },
        });
    }
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map