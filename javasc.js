const letters = "abcdefghijklmnopqrstuvwxyz-íéÁš";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = "letter-box"; 
    lettersContainer.appendChild(span);
});

// كائن يحتوي على الكلمات والتصنيفات
const words  = {
    "Real Madrid": [
      "Thibaut Courtois",
      "Andriy Lunin",
      "Dani Carvajal",
      "Éder Militão",
      "David Alaba",
      "Jesús Vallejo",
      "Fran García",
      "Antonio Rüdiger",
      "Ferland Mendy",
      "Jude Bellingham",
      "Eduardo Camavinga",
      "Federico Valverde",
      "Luka Modrić",
      "Aurélien Tchouaméni",
      "Arda Güler",
      "Lucas Vázquez",
      "Dani Ceballos",
      "Brahim Díaz",
      "Vinícius Júnior",
      "Kylian Mbappé"
    ],
    "Manchester City": [
      "Ederson",
      "Stefan Ortega",
      "Kyle Walker",
      "João Cancelo",
      "Rúben Dias",
      "Aymeric Laporte",
      "John Stones",
      "Nathan Aké",
      "Manuel Akanji",
      "Rodri",
      "Kevin De Bruyne",
      "Bernardo Silva",
      "İlkay Gündoğan",
      "Phil Foden",
      "Jack Grealish",
      "Riyad Mahrez",
      "Julián Álvarez",
      "Erling Haaland",
      "Kalvin Phillips",
      "Sergio Gómez"
    ],
    "Bayern Munich": [
      "Manuel Neuer",
      "Sven Ulreich",
      "Joshua Kimmich",
      "Benjamin Pavard",
      "Dayot Upamecano",
      "Matthijs de Ligt",
      "Alphonso Davies",
      "Lucas Hernández",
      "Noussair Mazraoui",
      "Leon Goretzka",
      "Jamal Musiala",
      "Thomas Müller",
      "Leroy Sané",
      "Kingsley Coman",
      "Serge Gnabry",
      "Sadio Mané",
      "Ryan Gravenberch",
      "Marcel Sabitzer",
      "Eric Maxim Choupo-Moting",
      "Josip Stanišić"
    ],
    "FC Barcelona": [
      "Marc-André ter Stegen",
      "Iñaki Peña",
      "Sergi Roberto",
      "Jules Koundé",
      "Ronald Araújo",
      "Andreas Christensen",
      "Eric García",
      "Jordi Alba",
      "Alejandro Balde",
      "Frenkie de Jong",
      "Pedri",
      "Gavi",
      "Sergio Busquets",
      "Franck Kessié",
      "Ousmane Dembélé",
      "Raphinha",
      "Ansu Fati",
      "Robert Lewandowski",
      "Ferran Torres",
      "Memphis Depay"
    ],
    "Inter Milan": [
      "André Onana",
      "Samir Handanović",
      "Milan Škriniar",
      "Stefan de Vrij",
      "Alessandro Bastoni",
      "Matteo Darmian",
      "Denzel Dumfries",
      "Federico Dimarco",
      "Robin Gosens",
      "Marcelo Brozović",
      "Hakan Çalhanoğlu",
      "Nicolò Barella",
      "Henrikh Mkhitaryan",
      "Kristjan Asllani",
      "Romelu Lukaku",
      "Lautaro Martínez",
      "Edin Džeko",
      "Joaquín Correa",
      "Danilo D'Ambrosio",
      "Raoul Bellanova"
    ],
    "Liverpool": [
      "Alisson Becker",
      "Caoimhin Kelleher",
      "Trent Alexander-Arnold",
      "Andy Robertson",
      "Virgil van Dijk",
      "Ibrahima Konaté",
      "Joe Gomez",
      "Joël Matip",
      "Kostas Tsimikas",
      "Fabinho",
      "Jordan Henderson",
      "Thiago Alcântara",
      "James Milner",
      "Naby Keïta",
      "Harvey Elliott",
      "Curtis Jones",
      "Mohamed Salah",
      "Diogo Jota",
      "Darwin Núñez",
      "Luis Díaz"
    ],
    "Arsenal": [
      "Aaron Ramsdale",
      "Matt Turner",
      "Ben White",
      "Gabriel Magalhães",
      "William Saliba",
      "Kieran Tierney",
      "Takehiro Tomiyasu",
      "Oleksandr Zinchenko",
      "Rob Holding",
      "Thomas Partey",
      "Granit Xhaka",
      "Martin Ødegaard",
      "Bukayo Saka",
      "Emile Smith Rowe",
      "Gabriel Martinelli",
      "Reiss Nelson",
      "Eddie Nketiah",
      "Gabriel Jesus",
      "Fábio Vieira",
      "Albert Sambi Lokonga"
    ]
  };;

// اختيار تصنيف عشوائي وكلمة عشوائية
let allkeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allkeys.length);
let randomPropName = allkeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

// عرض التصنيف في الصفحة
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// تحديد مكان ظهور الأحرف المخفية
let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if (letter == ' ') {
        emptySpan.className = 'with-space';
    }
    lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttemps = 0;
let theDraw = document.querySelector(".hangman-draw");

// التعامل مع نقر المستخدم على الأحرف
document.addEventListener("click", (e) => {
    let theStatus = false;

    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        let theChosenword = Array.from(randomValueValue.toLowerCase());

        theChosenword.forEach((wordsLetter, wordindex) => {
            if (theClickedLetter == wordsLetter) {
                theStatus = true;
                guessSpans.forEach((span, spanIndex) => {
                    if (wordindex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });

        if (theStatus !== true) {
            wrongAttemps++;
            theDraw.classList.add(`wrong-${wrongAttemps}`);
            document.getElementById("fail").play();

            if (wrongAttemps === 8) {
                endGame();
                lettersContainer.classList.add("finished");
            }
        } else {
            document.getElementById("success").play();
        }

        // التحقق مما إذا كانت الكلمة قد اكتملت
        let allLettersGuessed = true;
        guessSpans.forEach((span) => {
            if (span.innerHTML === '') {
                allLettersGuessed = false;
            }
        });

        if (allLettersGuessed) {
            winGame();
        }
    }
});

function endGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Votre nombre de tentatives a expiré. Le mot que vous recherchez est ${randomValueValue}`);
    div.append(divText);
    div.className = 'popup';
    document.body.appendChild(div);
}

function winGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode("Bravo! Vous avez trouvé le mot 🎉");
    div.append(divText);
    div.className = 'popup';
    document.body.appendChild(div);
    lettersContainer.classList.add("finished");
}