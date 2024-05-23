function findDaf(dateNumber) {
    const zeraim = [
        { name: "brachot", chapters: 64 },
    ];

    const moeed = [
        { name: "Shabat", chapters: 157 },
        { name: "Eruvin", chapters: 105 },
        { name: "Pesachim", chapters: 121 },
        { name: "Shekalim", chapters: 20 },
        { name: "Yoma", chapters: 88 },
        { name: "Sukkah", chapters: 56 },
        { name: "Beitza", chapters: 40 },
        { name: "Rosh Hashanah", chapters: 35 },
        { name: "Ta'anit", chapters: 31 },
        { name: "Megillah", chapters: 32 },
        { name: "Mo'ed Katan", chapters: 29 },
        { name: "Chagigah", chapters: 27 }
    ];

    const nashim = [
        { name: "Yevamot", chapters: 122 },
        { name: "Ketubot", chapters: 112 },
        { name: "Nedarim", chapters: 91 },
        { name: "Nazir", chapters: 66 },
        { name: "Sotah", chapters: 49 },
        { name: "Gittin", chapters: 90 },
        { name: "Kiddushin", chapters: 82 }
    ];

    const nezikin = [
        { name: "Bava Kamma", chapters: 119 },
        { name: "Bava Metzia", chapters: 119 },
        { name: "Bava Batra", chapters: 176 },
        { name: "Sanhedrin", chapters: 113 },
        { name: "Makkot", chapters: 24 },
        { name: "Shevu'ot", chapters: 49 },
        { name: "Avodah Zarah", chapters: 76 },
        { name: "Horayot", chapters: 14 }
    ];

    const kodshim = [
        { name: "Zevahim", chapters: 120 },
        { name: "Menachot", chapters: 110 },
        { name: "Chullin", chapters: 142 },
        { name: "Bekhorot", chapters: 61 },
        { name: "Arachin", chapters: 34 },
        { name: "Temurah", chapters: 34 },
        { name: "Keritot", chapters: 28 },
        { name: "Me'ilah", chapters: 22 },
        { name: "Tamid", chapters: 8 },
        { name: "Middot", chapters: 3 },
        { name: "Kinnim", chapters: 4 }
    ];

    const teharot = [
        { name: "Niddah", chapters: 73 }
    ];
    const collections = [zeraim, moeed, nashim, nezikin, kodshim, teharot];

    for (let i = 0; i < collections.length; i++) {
        const collection = collections[i];

        for (let j = 0; j < collection.length; j++) {
            const book = collection[j];

            if (dateNumber <= book.chapters) {
                const numberOfDigits = Math.max(Math.floor(Math.log10(book.chapters)) + 1, 1);

                return {
                    collectionName: getCollectionsName(i),
                    bookName: book.name,
                    chapterNumber: dateNumber,
                    digits: numberOfDigits
                };
            } else {
                dateNumber -= book.chapters;
            }
        }
    }

    return "Chapter number exceeds total chapters";


    function getCollectionsName(index) {
        const collectionNames = ["zeraim", "moeed", "nashim", "nezikin", "kodshim", "teharot"];
        return collectionNames[index];
    }
}

function GetTodaysDaf(){
    const today = new Date();
    const starting_date = new Date('2024-04-04');
    const daysPassed = Math.floor((today - starting_date) / (1000 * 60 * 60 * 24)); 

    // let daysPassed = 7
    const { collectionName, bookName, chapterNumber, digits } = findDaf(daysPassed);
    let daf = chapterNumber
    let tarctate = bookName
    
    if (digits == 1) {
        daf = `_${daf}`;
    } else if (digits == 2) {
        daf = daf < 10 ? `_0${daf}` : `_${daf}`;
    } else if (digits == 3) {
        if (10 < daf && daf < 100)
            daf = `_0${daf}`;
        else if (daf < 10)
            daf = `_00${daf}`;
        else
            daf = `_${daf}`;
    }



    let url1 = `https://files.daf-yomi.com/files/orenshtein/orenshtein-audio/${tarctate.toLowerCase()}/${tarctate.toLowerCase()}${daf}.mp3`;
    let url2 = `https://files.daf-yomi.com/files/orenshtein/orenshtein-audio/${tarctate.toLowerCase()}/ore_gem_h_5780_${tarctate}${daf}.mp3`;

    return { url1, url2 };
  
}

export default GetTodaysDaf

