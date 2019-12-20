const aboutUsStory = document.querySelector('#about-us-story');
const camerasCatalog = document.querySelector('#camerascatalog');
const lensesCatalog = document.querySelector('#lensescatalog');
const flashesCatalog =  document.querySelector('#flashescatalog');
const tripodCatalog =  document.querySelector('#tripodcatalog');
//const lastNovelties = document.querySelector('#last-novelties');
const aboutUsTitle = document.querySelector('#about-us-title');
const buyBtn = document.getElementsByClassName('.buy-btn');
const buyBtnIndx= document.querySelectorAll('#buy-btn-index')


btnEnglishSwitchON.addEventListener('click',langEngChange);
function langEngChange(){
    aboutUsStory.textContent = 'PhotoAce is the largest online retailer in the country. For 14 years now, we have been living the small dreams and grandiose plans of millions of people. Here you can find almost anything. We sell at a fair price and we guarantee that we believe online shopping should be as convenient and safe as possible. And every time someone clicks "Buy", we understand that we are doing the right thing.We believe that things exist to make life easier, more enjoyable and kinder. Therefore, the search for the same thing should be fast, convenient and enjoyable. We don`t just sell household appliances, electronics, jewelry or wine. We help you find exactly what you need, in one place and without any hassle, so you don`t spend your life searching and just living happily ever after. PhotoAce is the universal answer to any query, search start and end stop, a true helper. We are forever depriving our customers of unpleasant compromises, fulfilling desires and enabling us to dream more boldly. With smart search and honest service, we make our clients` lives a little better now.';
    camerasCatalog.textContent = 'Cameras';
    lensesCatalog.textContent = 'Lenses';
    flashesCatalog.textContent = 'Flashes';    
    tripodCatalog.textContent = 'Tripods';
    //lastNovelties.textContent = 'Last Novelties';
    aboutUsTitle.textContent = 'About Us:'; 
    buyBtnIndx.textContent = 'Buy' ;    
    for (i = 0; i < buyBtn.length; i++) {
    buyBtn[i].textContent = 'Buy';
};
}

btnUkrainianSwitchON.addEventListener('click',langUkrChange);
function langUkrChange(){
    aboutUsStory.textContent = 'PhotoAce - найбільший онлайн-ритейлер у країні. Уже протягом 14 років ми втілюємо маленькі мрії та грандіозні плани мільйонів людей. У нас можна знайти буквально все. Ми продаємо за справедливою ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним. І щоразу, коли хтось натискає «Купити», ми розуміємо, що робимо потрібну справу.	Ми віримо, що речі існують для того, щоб робити життя простішим, приємнішим і добрішим. Тому й пошук тієї самої речі повинен бути швидким, зручним і приємним. Ми не просто продаємо побутову техніку, електроніку, прикраси або вино. Ми допомагаємо знайти саме те, що треба, в одному місці та без зайвих хвилювань, щоб ви не витрачали життя на пошуки, а просто жили щасливо. PhotoAce − це універсальна відповідь на будь-який запит, початок пошуку та його кінцева зупинка, справжній помічник. Ми назавжди позбавляємо своїх покупців від неприємних компромісів, виконуємо бажання і даємо змогу мріяти сміливіше. Завдяки розумному пошуку та чесному сервісу ми робимо життя наших клієнтів трішки кращим просто зараз.'
    camerasCatalog.textContent = 'Фотокамери';
    lensesCatalog.textContent = "Об'єктиви";
    flashesCatalog.textContent = 'Спалахи';    
    tripodCatalog.textContent = 'Штативи';
    buyBtnIndx.textContent = 'Купити';
    //lastNovelties.textContent = 'Останні новинки';
    aboutUsTitle.textContent = 'Про нас:';      
    for (i = 0; i < buyBtn.length; i++) {
    buyBtn[i].textContent = 'Купити';
};
}

