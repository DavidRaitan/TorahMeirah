import React from 'react';
import './home.css';

function AboutUs() {
  return (
    <div className="home-container">
      <div className="button-container">
        <button onClick={() => window.location.href="#progress"} className="button">Our Progress</button>
      </div>

      <section id="vision" className="section">
        <h3>THE VISION</h3>
        <p>Torah Meirah is the idea and the vision of learning all the fundamental elements of the Torah in 5 - 10 years.</p>
        <p>Do you want to know more about the Torah? The Jewish People? Maybe just have a lot of questions and are filled with curiosity. This essay will introduce and show you how learning almost all the Torah in Just 5 years is very much possible as well as remembering it.</p>
        <p>First of all, what is almost all of the Torah? Well, some of the most prominent books include the likes of The Torah, Nevi’im, Ketuvim, Midrash Rabba, Yalokot Shimoni, Midrashim, Mishnah, Tosfta, Sifra, Sifre, Shas Mishnah, Babylonian Talmud, Jerusalem Talmud, Tur, Shulchan Arukh, Yad Hazaka, Guide to the perplexed, Orchot Tzaddikim, Path of the Upright, Chovot HaLevavot, and more books. But we are not just going to read through them. We will study them and remain with a strong recollection of the material learned BH.</p>
        <p>Right now, you probably think I’m dreaming or maybe that to learn all that and remember you need to be a genius or perhaps spend 10 hours a day learning and 4 more to try to remember it.</p>
        <p>But the truth is that it’s accessible to most people, and we created 3 basic paths to reach this goal within 5 to 10 years depending if you can invest 3 hours or 1 hour and even 30 minutes a day1 (as well as an adjusting formula).</p>
        <p>Why is this any different from the normal path? Because most classes don’t focus on retention and we don’t always give it our complete focus. And so we usually can’t recite the class after a week or two, therefore we never truly reach mastery of the matters discussed in class. However, sometimes things do stand out and call for our attention so we do tend to remember those but it is rare.</p>
        <p>Furthermore, even if we have great memory the amount of material looks almost too much to learn and overwhelming. But that concern goes away when you are following a precise method that takes memory and understanding into consideration and guides you through the path of mastering almost all the Torah step by step with instructions and clear explanations.</p>
      </section>

      <section id="progress" className="section">
        <h3>THE PROGRESS</h3>
        <h4>This is Currently being tested and Build now we offer 4 classes Tanakh, Mishnah, Rambam, Gemara.</h4>
        <p>The Tanach class is split into Seder's which are daily learning portions. We learn the Nach (AKA Prophets and Writings) on the weekdays from Sunday to Friday. On Shabbat, we learn the Torah Parashah (AKA weekly torah portion) and finish all the Tanach in one year on Simchat Torah. Here you will find the daily class from <a href="https://www.tanachyomi.co.il/" target="_blank" rel="noopener noreferrer">Tanach Yomi</a>, a great website with resources on this type of Tanach learning, and with the class used here by הרב מוטי דשא.</p>
        <p>Mishnah Class is a Perek Yomi system. In 17.2 months (or 1.4 years) we finish the whole of Shas Mishnayot which is the basis of Halacha and Gemara. The classes are from mishna.org <a href="https://www.mishna.org.il/" target="_blank" rel="noopener noreferrer">הפרק היומי.</a></p>
        <p>Gemara Class is Daf Hayomi which finishes the Shas Gemara Babli in 7.4 years (or 89.1 months). By learning one Daf (Blatt) of Gemara a day. The class is from <a href="https://www.dirshu.co.il/" target="_blank" rel="noopener noreferrer">Dirshu</a> by הרב אליהו אורנשטיין. Which is taught in an overview fashion (so one should ideally study in a class instead of or in addition to).</p>
        <p>Rambam Class is 3 chapters a day of the Rambam’s Mishneh Torah. Which will be completed in one year. The class is from <a href="https://www.chabad.fm/" target="_blank" rel="noopener noreferrer">Chabad.</a></p>
      </section>

      <p className='footer'>{'\u2722'} Made by El Tzano {'\u2722'} </p> 
    </div>
    
  );
}

export default AboutUs;

// {'\u2721'}
