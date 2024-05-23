function GetTodaysTanachChapter() {
    const bookChapters = [14, 14, 34, 35, 26, 31, 29, 10, 19, 8, 8, 1, 1, 1, 4, 5, 7, 10, 25];

    const start_date = '2023-10-12';
    let daysPassed = daysSinceWithoutSaturdays(start_date)  
  
    function findBookAndChapter(days, bookChapters) {
        let totalChapters = 0;
        let currentBook = 0;
        let currentChapter = 0;

        for (let i = 0; i < bookChapters.length; i++) {
            totalChapters += bookChapters[i];
            if (totalChapters >= days) {
                currentBook = i + 1; // Convert index to one-based indexing
                currentChapter = bookChapters[i] - (totalChapters - days);
                break;
            }
        }

        return { currentBook, currentChapter };
    }

    const { currentBook, currentChapter } = findBookAndChapter(daysPassed, bookChapters);

    const book = currentBook < 10 ? `b0${currentBook}` : `b${currentBook}`;
    const chapter = currentChapter < 10 ? `_ch0${currentChapter}` : `_ch${currentChapter}`;

    const audioUrl = `https://www.tanachyomi.co.il/pagesTanachVoice2/${book}${chapter}.mp3`;
    return audioUrl;
}


function daysSinceWithoutSaturdays(startDate) {
    const start = new Date(startDate);
    const today = new Date();
    
    // Validate start date
    if (start > today) {
        throw new Error("Start date cannot be in the future.");
    }

    let dayCount = 0;

    for (let d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
        // Check if the day is not Saturday
        if (d.getDay() !== 6) {
            dayCount++;
        }
    }

    return dayCount;
}

  
export default GetTodaysTanachChapter;