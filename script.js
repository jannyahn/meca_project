

const words = [
    {
        name: "anatomy",
        meaning: "해부학",
        number: 754,
        origin: "어원: 그리스어 'anatomia' (해부, 분해)",
        synonym: "dissection, structure, physiology",
        audio: "audio/anatomy.mp3"
    },
    {
        name: "antibody",
        meaning: "항체",
        number: 420,
        origin: "어원: 'anti-' (대항하여) + 'body' (체)",
        synonym: "immunoglobulin",
        audio: "audio/antibody.mp3"
    },
    {
        name: "appendix",
        meaning: "맹장",
        number: 695,
        origin: "어원: 라틴어 'appendix' (부가물)",
        synonym: "vermiform appendix",
        audio: "audio/appendix.mp3"
    },
    {
        name: "asthma",
        meaning: "천식",
        number: 114,
        origin: "어원: 그리스어 'asthma' (숨 가쁨)",
        synonym: "respiratory condition, bronchial disorder",
        audio: "audio/asthma.mp3"
    },
    {
        name: "bacteria",
        meaning: "박테리아, 세균",
        number: 189,
        origin: "어원: 그리스어 'bakterion' (작은 막대기)",
        synonym: "germs, microbes, pathogens",
        audio: "audio/bacteria.mp3"
    },
    {
        name: "belly",
        meaning: "배, 복부",
        number: 197,
        origin: "어원: 고대 영어 'belig' (주머니)",
        synonym: "stomach, abdomen, gut",
        audio: "audio/belly.mp3"
    },
    {
        name: "cognitive",
        meaning: "인지의, 인식의",
        number: 707,
        origin: "어원: 라틴어 'cognitio' (알다, 인식하다)",
        synonym: "mental, intellectual, perceptual",
        audio: "audio/cognitive.mp3"
    },
    {
        name: "contagious",
        meaning: "전염성의, 전염되는",
        number: 1388,
        origin: "어원: 라틴어 'contagiosus' (접촉을 통해 전달되는)",
        synonym: "infectious, transmissible",
        audio: "audio/contagious.mp3"
    },
    {
        name: "diabetes",
        meaning: "당뇨병",
        number: 262,
        origin: "어원: 그리스어 'diabetes' (지나가다, 관통하다)",
        synonym: "blood sugar disorder, hyperglycemia",
        audio: "audio/diabetes.mp3"
    },
    {
        name: "digest",
        meaning: "소화시키다",
        number: 119,
        origin: "어원: 라틴어 'digestus' (분류하다, 정리하다)",
        synonym: "absorb, break down, assimilate",
        audio: "audio/digest.mp3"
    },
    {
        name: "disorder",
        meaning: "장애",
        number: 1239,
        origin: "어원: 라틴어 'dis-' (분리) + 'ordo' (질서)",
        synonym: "illness, disease, disruption",
        audio: "audio/disorder.mp3"
    },
    {
        name: "dose",
        meaning: "양, 복용량",
        number: 203,
        origin: "어원: 그리스어 'dosis' (주기, 배분)",
        synonym: "portion, amount, quantity",
        audio: "audio/dose.mp3"
    },
    {
        name: "embryo",
        meaning: "배야, 태아",
        number: 977,
        origin: "어원: 그리스어 'embryon' (미숙아, 배아)",
        synonym: "fetus, zygote",
        audio: "audio/embryo.mp3"
    },
    {
        name: "epidemic",
        meaning: "(병의) 만연, 유행",
        number: 622,
        origin: "어원: 그리스어 'epidemia' (전염병의)",
        synonym: "outbreak, plague, widespread occurrence",
        audio: "audio/epidemic.mp3"
    },
    {
        name: "fatal",
        meaning: "치명적인, 죽음을 초래하는",
        number: 1243,
        origin: "어원: 라틴어 'fatalis' (운명의)",
        synonym: "lethal, deadly, mortal",
        audio: "audio/fatal.mp3"
    },
    {
        name: "gene",
        meaning: "유전자",
        number: 39,
        origin: "어원: 그리스어 'genos' (태생, 기원)",
        synonym: "genetic material, hereditary unit",
        audio: "audio/gene.mp3"
    },
   { name: "germ",
    meaning: "세균, 미생물",
    number: 652,
    origin: "어원: 라틴어 'germen' (싹, 발아)",
    synonym: "microbe, bacterium, pathogen",
    audio: "audio/germ.mp3"
},
{
    name: "heredity",
    meaning: "유전(적 특징)",
    number: 1189,
    origin: "어원: 라틴어 'hereditas' (상속)",
    synonym: "inheritance, genetics",
    audio: "audio/heredity.mp3"
},
{
    name: "illness",
    meaning: "질병",
    number: 492,
    origin: "어원: 고대 영어 'ill' (악, 병) + '-ness' (명사형 접미사)",
    synonym: "sickness, disease, ailment",
    audio: "audio/illness.mp3"
},

    {
        name: "immune",
        meaning: "면역의, 면역이 있는",
        number: 147,
        origin: "어원: 라틴어 'immunis' (세금 면제된)",
        synonym: "resistant, protected, exempt",
        audio: "audio/immune.mp3"
    },
    {
        name: "inborn",
        meaning: "타고난, 선천적인",
        number: 169,
        origin: "어원: 고대 영어 'inn' (안에) + 'boren' (태어난)",
        synonym: "innate, natural, inherent",
        audio: "audio/inborn.mp3"
    },
    {
        name: "infectious",
        meaning: "전염성의, 옮기 쉬운",
        number: 1336,
        origin: "어원: 라틴어 'infectio' (감염)",
        synonym: "contagious, transmissible, communicable",
        audio: "audio/infectious.mp3"
    },
    {
        name: "ingest",
        meaning: "섭취하다",
        number: 629,
        origin: "어원: 라틴어 'ingestus' (섭취하다)",
        synonym: "consume, swallow, absorb",
        audio: "audio/ingest.mp3"
    },
    {
        name: "inhale",
        meaning: "들이마시다, 빨아들이다",
        number: 209,
        origin: "어원: 라틴어 'in-' (안으로) + 'halare' (숨을 내쉬다)",
        synonym: "breathe in, inhale deeply",
        audio: "audio/inhale.mp3"
    },
    {
        name: "inherit",
        meaning: "유전하다",
        number: 714,
        origin: "어원: 라틴어 'hereditare' (상속하다)",
        synonym: "receive, bequeath, pass on",
        audio: "audio/inherit.mp3"
    },

    {
        name: "medication",
        meaning: "약, 약물(치료)",
        number: 406,
        origin: "어원: 라틴어 'medicatio' (치료)",
        synonym: "medicine, drug, pharmaceutical",
        audio: "audio/medication.mp3"
    },
    {
        name: "metabolism",
        meaning: "신진대사, 대사 작용",
        number: 402,
        origin: "어원: 그리스어 'metabole' (변화)",
        synonym: "biotransformation, metabolic process",
        audio: "audio/metabolism.mp3"
    },
    {
        name: "microbe",
        meaning: "미생물",
        number: 237,
        origin: "어원: 그리스어 'mikros' (작은) + 'bios' (생명)",
        synonym: "microorganism, bacterium, germ",
        audio: "audio/microbe.mp3"
    },
    {
        name: "nerve",
        meaning: "신경, 불안",
        number: 959,
        origin: "어원: 라틴어 'nervus' (힘줄, 신경)",
        synonym: "neural tissue, anxiety, courage",
        audio: "audio/nerve.mp3"
    },
    {
        name: "operate",
        meaning: "수술하다",
        number: 391,
        origin: "어원: 라틴어 'operari' (일하다)",
        synonym: "perform surgery, conduct an operation",
        audio: "audio/operate.mp3"
    },
    {
        name: "optical",
        meaning: "시각적인, 눈의",
        number: 973,
        origin: "어원: 그리스어 'optikos' (시각의)",
        synonym: "visual, ocular, sight-related",
        audio: "audio/optical.mp3"
    },
    {
        name: "organism",
        meaning: "생물, 유기체",
        number: 563,
        origin: "어원: 그리스어 'organon' (도구, 장기)",
        synonym: "living being, creature, life form",
        audio: "audio/organism.mp3"
    },
            {
            name: "paralyze",
            meaning: "마비시키다",
            number: 677,
            origin: "어원: 그리스어 'paralysis' (마비)",
            synonym: "disable, immobilize, numb",
            audio: "audio/paralyze.mp3"
        },
    {
        name: "physical",
        meaning: "신체적인, 육체적인",
        number: 8,
        origin: "어원: 그리스어 'physis' (자연) + '-ical' (형용사 접미사)",
        synonym: "bodily, corporeal, somatic",
        audio: "audio/physical.mp3"
    },
    {
        name: "physician",
        meaning: "내과의사",
        number: 858,
        origin: "어원: 라틴어 'physica' (자연 과학)에서 유래",
        synonym: "doctor, medical practitioner",
        audio: "audio/physician.mp3"
    },
     {
        name: "plague",
        meaning: "전염병; 고통을 주다",
        number: 445,
        origin: "어원: 라틴어 'plaga' (타격, 재앙)",
        synonym: "epidemic, affliction, pestilence",
        audio: "audio/plague.mp3"
    },
    {
        name: "procedure",
        meaning: "수술",
        number: 1128,
        origin: "어원: 라틴어 'procedere' (진행하다)",
        synonym: "operation, surgery, method",
        audio: "audio/procedure.mp3"
    },
    {
        name: "psychological",
        meaning: "심리적인, 정신의",
        number: 495,
        origin: "어원: 그리스어 'psyche' (정신) + '-logia' (학문)",
        synonym: "mental, cerebral, emotional",
        audio: "audio/psychological.mp3"
    },
    {
        name: "pupil",
        meaning: "동공, 눈동자",
        number: 363,
        origin: "어원: 라틴어 'pupilla' (작은 인형, 눈동자)",
        synonym: "eye, aperture",
        audio: "audio/pupil.mp3"
    },
    {
        name: "rehabilitate",
        meaning: "재활 치료를 하다",
        number: 275,
        origin: "어원: 라틴어 'rehabilitare' (다시 가능하게 하다)",
        synonym: "restore, renew, reintegrate",
        audio: "audio/rehabilitate.mp3"
    },
    {
        name: "remedy",
        meaning: "치료(약), 해결(책)",
        number: 1102,
        origin: "어원: 라틴어 'remedium' (치료제)",
        synonym: "treatment, cure, solution",
        audio: "audio/remedy.mp3"
    },



    {
        name: "skeleton",
        meaning: "골격, 뼈대, 해골",
        number: 590,
        origin: "어원: 그리스어 'skeleton' (마른, 뼈만 남은)",
        synonym: "framework, bones, carcass",
        audio: "audio/skeleton.mp3"
    },
    {
        name: "stroke",
        meaning: "뇌졸중",
        number: 1061,
        origin: "어원: 고대 영어 'strocan' (때리다)",
        synonym: "cerebrovascular accident, CVA",
        audio: "audio/stroke.mp3"
    },
    {
        name: "surgeon",
        meaning: "외과 의사",
        number: 683,
        origin: "어원: 라틴어 'chirurgus' (수술사)",
        synonym: "doctor, medical specialist",
        audio: "audio/surgeon.mp3"
    },
    {
        name: "transfusion",
        meaning: "수혈",
        number: 419,
        origin: "어원: 라틴어 'transfusio' (흘러가게 하다)",
        synonym: "blood transfer, transfusing",
        audio: "audio/transfusion.mp3"
    },
    {
        name: "vessel",
        meaning: "(동물의) 혈관, (식물의) 물관",
        number: 385,
        origin: "어원: 라틴어 'vas' (그릇, 용기)",
        synonym: "vein, duct, channel",
        audio: "audio/vessel.mp3"
    }

    ];


    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchTerm = document.querySelector('input[type="text"]').value.trim().toLowerCase();
        const resultContainer = document.querySelector('.result-container');
        
        // Clear previous results
        resultContainer.innerHTML = '';
        
        const wordData = words.find(word => word.name.toLowerCase() === searchTerm);
    
        
        if (wordData) {
            // Create word element
            const wordElement = document.createElement('h1');
            wordElement.textContent = wordData.name;
            wordElement.style.fontSize = '3rem';
    
            // Create audio button
            const audioButton = document.createElement('button');
            audioButton.textContent = '🔊';
            audioButton.style.fontSize = '2rem';
            audioButton.style.marginLeft = '10px';
            audioButton.onclick = function() {
                new Audio(wordData.audio).play();
            };
    
            // Create meaning element
            const meaningElement = document.createElement('h2');
            meaningElement.textContent = wordData.meaning;
            meaningElement.style.fontSize = '2rem';
    
            // Create number element
            const numberElement = document.createElement('p');
            numberElement.textContent = `단어장 번호 : ${wordData.number}`;
    
            // Create synonym element
            const synonymElement = document.createElement('p');
            synonymElement.textContent = `유의어 : ${wordData.synonym}`;
    
             // Create origin element
            const originElement = document.createElement('p');
           originElement.textContent = `${wordData.origin}`;
            
            const spaceElement = document.createElement('div');
            spaceElement.style.paddingTop = '150px';
            
            // Append elements to the result container
            resultContainer.appendChild(wordElement);
            wordElement.appendChild(audioButton);
            resultContainer.appendChild(meaningElement);
            resultContainer.appendChild(numberElement);
            resultContainer.appendChild(synonymElement);
            resultContainer.appendChild(originElement);
            resultContainer.appendChild(spaceElement);
        } else {
            resultContainer.textContent = '검색 결과가 없습니다.';
        }
    });
    
// Event listener for 'Enter' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default action to avoid unwanted behavior
        document.querySelector('form').dispatchEvent(new Event('submit'));
    }
});
