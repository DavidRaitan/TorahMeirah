function findChapterInfo(chapterNumber) {

    const zeraim = [
    { name: "berachot", chapters: 9 },
    { name: "pea", chapters: 8 },
    { name: "demay", chapters: 7 },
    { name: "kilaim", chapters: 9 },
    { name: "sheviit", chapters: 10 },
    { name: "terumot", chapters: 11 },
    { name: "maaserot", chapters: 5 },
    { name: "maaser_sheni", chapters: 5 },
    { name: "challah", chapters: 4 },
    { name: "orlah", chapters: 3 },
    { name: "bikkurim", chapters: 4 }
    ];

    const moeed = [
        { name: "shabbat", chapters: 24 },
        { name: "eruvin", chapters: 10 },
        { name: "pesachim", chapters: 10 },
        { name: "shekalim", chapters: 8 },
        { name: "yoma", chapters: 8 },
        { name: "sukkah", chapters: 5 },
        { name: "beitza", chapters: 5 },
        { name: "rosh_hashanah", chapters: 4 },
        { name: "taanit", chapters: 4 },
        { name: "megillah", chapters: 4 },
        { name: "moed_katan", chapters: 3 },
        { name: "chagigah", chapters: 3 }
    ];

    const nashim = [
        { name: "yevamot", chapters: 16 },
        { name: "ketubot", chapters: 13 },
        { name: "nedarim", chapters: 11 },
        { name: "nazir", chapters: 9 },
        { name: "sotah", chapters: 9 },
        { name: "gittin", chapters: 9 },
        { name: "kiddushin", chapters: 4 }
    ];

    const nezikin = [
        { name: "bava_kamma", chapters: 10 },
        { name: "bava_metzia", chapters: 10 },
        { name: "bava_batra", chapters: 10 },
        { name: "sanhedrin", chapters: 11 },
        { name: "makkot", chapters: 3 },
        { name: "shevuot", chapters: 8 },
        { name: "eduyot", chapters: 8 },
        { name: "avodah_zarah", chapters: 5 },
        { name: "pirkei_avot", chapters: 6 },
        { name: "horayot", chapters: 3 }
    ];

    const kodshim = [
        { name: "zevahim", chapters: 14 },
        { name: "menachot", chapters: 13 },
        { name: "chullin", chapters: 12 },
        { name: "bekhorot", chapters: 9 },
        { name: "arachin", chapters: 9 },
        { name: "temurah", chapters: 7 },
        { name: "keritot", chapters: 6 },
        { name: "meilah", chapters: 6 },
        { name: "tamid", chapters: 7 },
        { name: "middot", chapters: 5 },
        { name: "kinnim", chapters: 3 }
    ];

    const teharot = [
        { name: "keilim", chapters: 30 },
        { name: "oholot", chapters: 18 },
        { name: "nega'im", chapters: 14 },
        { name: "parah", chapters: 12 },
        { name: "tohorot", chapters: 10 },
        { name: "mikva'ot", chapters: 10 },
        { name: "niddah", chapters: 10 },
        { name: "makhshirin", chapters: 6 },
        { name: "zavim", chapters: 5 },
        { name: "tevul_yom", chapters: 4 },
        { name: "yadayim", chapters: 4 },
        { name: "uktzim", chapters: 3 }
    ];

    const collections = [zeraim, moeed, nashim, nezikin, kodshim, teharot];
    
    for (let i = 0; i < collections.length; i++) {
        const collection = collections[i];
        
        for (let j = 0; j < collection.length; j++) {
            const book = collection[j];
            
            if (chapterNumber <= book.chapters) {
                return {
                    collectionName: getCollectionsName(i),
                    bookName: book.name,
                    chapterNumber: chapterNumber
                };
            } else {
                chapterNumber -= book.chapters;
            }
        }
    }

    return "Chapter number exceeds total chapters";
}

function getCollectionsName(index) {
    const collectionNames = ["zeraim", "moeed", "nashim", "nezikin", "kodshim", "teharot"];
    return collectionNames[index];
}


function GetTodaysMishnaChapter(){
    const today = new Date();
    const starting_date = new Date('2024-05-01');
    // const starting_date = new Date('2024-06-04');
    const daysPassed = Math.floor((today - starting_date) / (1000 * 60 * 60 * 24)); 

    const chapterInfo = findChapterInfo(daysPassed);
    let {collectionName , bookName, chapterNumber} = chapterInfo
    chapterNumber = chapterNumber < 10 ? `_0${chapterNumber}` : `_${chapterNumber}`;
    
    let url = `https://www.mishna.org.il/media/video/${collectionName}/${bookName}/${bookName}${chapterNumber}.mp4`

    return url


}

export default GetTodaysMishnaChapter



