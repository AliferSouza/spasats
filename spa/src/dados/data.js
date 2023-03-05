
const colaboradores = {
    alifer: 'https://www.instagram.com/alifer_oliveira_souza/',
    anna: 'https://www.instagram.com/annaarizeph/',
    vivi:'https://www.instagram.com/viviane.snt_/',
    ester:'https://www.instagram.com/grazileite.integrar/',
    lest:'https://www.instagram.com/_drac_lb/',
    grazi:'https://www.instagram.com/estercamilly_/',
    marcos:'https://www.instagram.com/marcos_paulo__ofc/'

}


const produtos = {
    massagemrelaxante: {
        color: '#2d1341',
        pro: "Massagem Relaxante",
        info:"Usando-se de movimentos leves, a massagem relaxante é uma excelente alternativa para o tratamento de dores musculares. Geralmente causadas por estresse, problemas de postura ou movimentos repetitivos, esses hábitos são prejudiciais, resultando em diferentes doenças. Dessa maneira, ela é uma ferramenta que promove o bem-estar, aliviando o desconforto das regiões mais afetadas.",
        img:"./src/img/Slide1.PNG"
    },
    
    drenagemlifatica: {
    color: '#8ca78a',
    pro: "Drenagem linfatica",
    info:"A drenagem linfática manual é um tipo de massagem corporal que serve para ajudar o corpo a eliminar o excesso de líquidos e toxinas, facilitando o tratamento da celulite, inchaço ou linfedema, e sendo também muito utilizada no pós-operatório de cirurgias, principalmente da cirurgia plástica.",
    img:"./src/img/slide6.PNG"
 },
    massagemmodeladora: {
        color: '#837043', 
        pro: "Massagem Modeladora",
        info:"A massagem modeladora é uma técnica que utiliza movimentos manuais intensos e profundos, com o objetivo de reorganizar as camadas de gordura, promovendo a harmonização dos contornos corporais. Além disso, quando aplicada com a técnica correta, pode auxiliar na redução de medidas e na retenção de líquidos, ",
        img:"./src/img/Slide9.PNG"
    },
    liberacaomiofacial: {
        color: '#1E3319',
        pro: "Liberação miofascial",
        info:"A liberação miofascial é um procedimento que visa amenizar as dores musculares causadas por tensão. Por meio de pressão sobre o local da dor, realizada manualmente ou com o aporte de rolos, a terapia previne lesões e contribui para o tratamento de graves patologias musculoesqueléticas.", 
        img:"./src/img/Slide3.PNG"
        },
    pedrasquentes: {
        color: '##626262',
        pro: "Pedras quentes",
        info:"A massagem com pedras quentes é uma terapia milenar, já utilizada pelos chineses, monges budistas e indígenas em seus rituais sagrados e de cura. A aplicação da pedra de tamanho e formato adequados, com a pressão e manipulação correta pelo terapeuta, proporciona os efeitos benéficos dessa massagem, desencadeando sua ação terapêutica.",
        img:"./src/img/Slide2.PNG"
        },
    bambuterapia: {
        color: '#704400',
        pro: "Bambuterapia",
        info:"A bambuterapia é uma técnica de massagem em que são utilizadas hastes de bambu (de diferentes tamanhos e espessuras) que se “encaixam” de acordo com a região do corpo em que são aplicadas, podendo gerar benefícios estéticos (como diminuição da celulite, por exemplo) e/ou terapêuticos (como relaxamento, entre outros). Conheça as particularidades da técnica, suas vantagens e contraindicações.",
        img:"./src/img/Slide4.PNG"
        },
    reflexologia: {
        color: '#e29595',
         pro: "Reflexologia",
         info:"Integrada à medicina tradicional, a técnica pode diminuir os sintomas da medicina, eliminar inflamações, controlar os problemas gastrointestinais, melhorar o estresse, ansiedade e a depressão.",
        img:"./src/img/Slide5.PNG"},
    massagemvelas: {
        color: '#e1e1e1',
        pro: "Massagem com velas",
        info:"A massagem com velas é uma técnica de massagem americana que está sendo muito utilizada nas grandes clínicas e spas, denominada como Melted Candle (significa “velas derretidas”).",
        img:"./src/img/Slide7.PNG"
        },
    bandagemelastica:{
        color: '#d862bd', 
        pro: "Bandagem elastica", 
        info:"As bandagens funcionais são muito utilizadas no tratamento fisioterapêutico em conjunto com outras técnicas especificas destes profissionais. A bandagem elástica possui como princípio a adequação do tônus muscular e a estabilização articular, com a correção de seu posicionamento. Como principais resultados, podemos destacar a analgesia e a limitação seletiva da amplitude de movimento.",
        img:"./src/img/Slide8.PNG"
    },
    combo:{
        color: '#d862bd', 
        pro: "Combo", 
        info:"Banhos tematicos, fotos e massagens",
        img:"./src/img/Slide10.PNG"
    },
}




const cardDate = [  
    {img :"./src/img/slide1.png", id:"massagemrelaxante"},
    {img:"./src/img/slide6.png", id:"drenagemlifatica"},
    {img:"./src/img/slide9.png", id:"massagemmodeladora"},
    {img:"./src/img/slide3.png", id:"liberacaomiofacial"},
    {img:"./src/img/slide2.png", id:"pedrasquentes"},  
    {img:"./src/img/slide4.png", id:"bambuterapia"},
    {img:"./src/img/slide5.png", id:"reflexologia"},  
    {img:"./src/img/slide7.png", id:"massagemvelas"},
    {img:"./src/img/slide8.png", id:"bandagemelastica"},
]

const cardDateCombo = 
[
    {img :"./src/img/slide10.png", id:"combo"}, 

]


const cardDateColaboradores = [    
    {id:"vivi",img :"./src/img/vivi.jpg", styles: "aaaa" },
    {id:"alifer", img:"./src/img/alifer.jpg" },
    {id:"anna", img:"./src/img/anna.jpg" },
    {id:"ester",img:"./src/img/ester.jpg"},   
    {id:"grazi",img:"./src/img/grazi.jpg"},  
    {id:"lest",img:"./src/img/lest.jpg" },
    {id:"marcos",img:"./src/img/marcos.jpg"},  
 
]


export {colaboradores,
        produtos,
        cardDate,
        cardDateCombo,
        cardDateColaboradores

    }