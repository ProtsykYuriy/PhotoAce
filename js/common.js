const makingAnOrderInfo='Самовивіз із поштоматів \nВи можете отримати замовлення у брендованих поштоматах інтернет-супермаркету Rozetka. Поштомат − це термінал самообслуговування, що надає змогу заощадити час при отриманні посилки вагою до 5 кг. Усе, що потрібно для отримання замовлення, − це мобільний телефон і код відкриття комірки, отриманий в sms-повідомленні. Зараз наші поштомати можна знайти на 9 станціях';
const shippingAndPaymentInfo= 'Доставка у відділення «Нова пошта» \nЗа допомогою доставки «Нова пошта», Ви можете отримати товар навіть у найвіддаленіших куточках України. При покупці товарів інших продавців послуга післяплати оплачується окремо від доставки.';
const warrantyInfo= 'Ви можете звертатися за гарантійним обслуговуванням до офіційних сервісних центрів виробника товару та до наших магазинів (крім точки видачі в м. Київ, вул. Декабристів, 9е)';
const creditInfo="Кредит оформлюється в нашому магазині за адресою Київ, пр. С. Бандери, 6 або за адресою, яка узгоджується з менеджером банку:\nUKRSIBBANK — у відділеннях банку,\nКредитМаркет і ПУМБ — у відділеннях «Нової Пошти»,\nАльфа-Банк — кур'єром за зручною для вас адресою після попереднього заповнення онлайн-анкети.";
const serviceCentersInfo='М-Фон\nвул. Володимира Великого, 34\n+38 (032) 242-28-83\nПн. - Пт.: 10:00 - 19:00\nСб.: 10:00 - 15:00';
const aboutTheCompanyInfo='PhotoAce - найбільший онлайн-ритейлер у країні. Уже протягом 14 років ми втілюємо маленькі мрії та грандіозні плани мільйонів людей. У нас можна знайти буквально все. Ми продаємо за справедливою ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним. І щоразу, коли хтось натискає «Купити», ми розуміємо, що робимо потрібну справу.	Ми віримо, що речі існують для того, щоб робити життя простішим, приємнішим і добрішим. Тому й пошук тієї самої речі повинен бути швидким, зручним і приємним. Ми не просто продаємо побутову техніку, електроніку, прикраси або вино. Ми допомагаємо знайти саме те, що треба, в одному місці та без зайвих хвилювань, щоб ви не витрачали життя на пошуки, а просто жили щасливо. PhotoAce − це універсальна відповідь на будь-який запит, початок пошуку та його кінцева зупинка, справжній помічник. Ми назавжди позбавляємо своїх покупців від неприємних компромісів, виконуємо бажання і даємо змогу мріяти сміливіше.';
const contactsInfo='Наша адреса:\nм. Львів вул. Федьковича 60а \nКонтакти: \nПроцик Юрій \nтел.0972395930';
const itemReturnInfo='Для повернення товару Новою Поштою необхідно відправити товар за реквізитами:\nОдержувач: ФОП Герасименко С.В. (044) 364-83-65\nДоставка: Склад-двері\nАдреса: м Бровари, Броварська об`їзна дорога, 62\nПослуги "Зворотна доставка" і "Післяплата" необхідно скасувати';
const siteUsageInfo='Використання сайту\nСайт "PhotAce"  дозволяє вам переглядати та завантажувати матеріали цього сайту тільки для особистого некомерційного використання, за умови збереження вами всієї інформації про авторське право та інших відомостей про право власності, що містяться у вихідних матеріалах і будь-яких їхніх копіях. Заборонено змінювати матеріали цього Сайту, а також поширювати або демонструвати їх у будь-якому вигляді або використовувати їх будь-яким іншим чином для суспільних чи комерційних цілей.';

function itemInfoAlertion(n){
    alert(n);
};

let makingAnOrder = document.querySelector('#making-an-order');
makingAnOrder.addEventListener('click', itemInfoAlertion.bind(this,makingAnOrderInfo));
let shippingAndPayment = document.querySelector('#shipping-and-payment');
shippingAndPayment.addEventListener('click', itemInfoAlertion.bind(this,shippingAndPaymentInfo));
let warranty = document.querySelector('#warranty');
warranty.addEventListener('click', itemInfoAlertion.bind(this,warrantyInfo));
let credit = document.querySelector('#credit');
credit.addEventListener('click', itemInfoAlertion.bind(this,creditInfo));
let serviceCenters = document.querySelector('#service-centers');
serviceCenters.addEventListener('click', itemInfoAlertion.bind(this,serviceCentersInfo));
let aboutTheCompany = document.querySelector('#about-the-company');
aboutTheCompany.addEventListener('click', itemInfoAlertion.bind(this,aboutTheCompanyInfo));
let contacts = document.querySelector('#contacts');
contacts.addEventListener('click', itemInfoAlertion.bind(this,contactsInfo));
let itemReturn = document.querySelector('#item-return');
itemReturn.addEventListener('click', itemInfoAlertion.bind(this,itemReturnInfo));
let siteUsage = document.querySelector('#site-usage');
siteUsage.addEventListener('click', itemInfoAlertion.bind(this,siteUsageInfo));
///////////////////////////////////////////////////////////////////////////////////////////////

// document.querySelector('.login-form input[type=submit]')
//     .addEventListener('click', login);
// function login(e) {
//     e.preventDefault();
//     fetch('login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify({
//             city: document.querySelector('.login-form input[name=city]').value,
//             novaposhta: document.querySelector('.login-form input[name=novaposhta]').value,
//             surname: document.querySelector('.login-form input[name=surname]').value,
//             name: document.querySelector('.login-form input[name=name]').value,
//             phone: document.querySelector('.login-form input[name=phone]').value
//         })
//     })
//     .then(_ => document.querySelector('.login-form').reset());
// }
///////////////////////////////////////////////////////////////////////////////////////////////////
// let aboutUsStoryEng = 'PhotoAce is the largest online retailer in the country. For 14 years now, we have been living the small dreams and grandiose plans of millions of people. Here you can find almost anything. We sell at a fair price and we guarantee that we believe online shopping should be as convenient and safe as possible. And every time someone clicks "Buy", we understand that we are doing the right thing.We believe that things exist to make life easier, more enjoyable and kinder. Therefore, the search for the same thing should be fast, convenient and enjoyable. We don`t just sell household appliances, electronics, jewelry or wine. We help you find exactly what you need, in one place and without any hassle, so you don`t spend your life searching and just living happily ever after. PhotoAce is the universal answer to any query, search start and end stop, a true helper. We are forever depriving our customers of unpleasant compromises, fulfilling desires and enabling us to dream more boldly. With smart search and honest service, we make our clients` lives a little better now.'
// let aboutUsStory = document.querySelector('#about-us-story');
// aboutUsStory.textContent = aboutUsStoryEng;
const tradeMark = document.querySelector('#trademark');
const ourAddress = document.querySelector('#ouraddress');
const weAreSocial = document.querySelector('#wearesocial');
const titleExplanation = document.querySelector('#titleexpl');

const btnEnglishSwitchON = document.querySelector('#EngON');
btnEnglishSwitchON.addEventListener('click',langEngChange);
function langEngChange(){
	tradeMark.textContent= '© PhotoAce ™ Online Store 2001–2019 TM is used under the license of PhotoAceLTD';
	ourAddress.textContent= 'Our address:Lviv str. Fedkovicha 60a Contacts: Protsyk Yury 0972395930'
	weAreSocial.textContent= 'Follow us';
	titleExplanation.textContent= 'Online store of photographic equipment';
	makingAnOrder.textContent = 'Making an order';
	shippingAndPayment.textContent = 'Shipping and payment';
	warranty.textContent = 'Warranty';
	credit.textContent = 'Credit';
	serviceCenters.textContent = 'Service centers';	
	aboutTheCompany.textContent = 'About us';	
	contacts.textContent = 'Contacts';
	itemReturn.textContent = 'Item return';
	siteUsage.textContent = 'Site usage';
}
const btnUkrainianSwitchON = document.querySelector('#UkrON');
btnUkrainianSwitchON.addEventListener('click',langUkrChange);
function langUkrChange(){
	tradeMark.textContent= '© Інтернет-магазин «PhotoAce™» 2001–2019 ТМ використовується на підставі ліцензії правовласника PhotoAceLTD';
	ourAddress.textContent= 'Наша адреса:м. Львів вул. Федьковича 60а Контакти: Процик Юрій 0972395930';
	weAreSocial.textContent= 'Ми в соцмережах:';
	titleExplanation.textContent= 'Інтернет магазин фототехніки';
	makingAnOrder.textContent = 'Як зробити замовлення';
	shippingAndPayment.textContent = 'Доставка і оплата';
	warranty.textContent = 'Гарантія';
	credit.textContent = 'Кредит';
	serviceCenters.textContent = 'Сервісні центри';	
	aboutTheCompany.textContent = 'Про компанію';	
	contacts.textContent = 'Контакти';
	itemReturn.textContent = 'Повернення товару';
	siteUsage.textContent = 'Використання сайту';
}

///////////////////////////////////////////////////////////////////////////////////////////////////

//let canonCameras = document.getElementsByClassName('.canon');
let camerasCatalogue = document.querySelector('#cameraslist');
//camerasCatalogue.children.remove(canonCameras);
const canon5dmarkIV = document.querySelector('#canon5dmarkIV');
const canon800D = document.querySelector('#canon800D');
const canon500D = document.querySelector('#canon500D');
const sonyAlphaA6100 = document.querySelector('#sony-alphaA6100');
const sonyCyberShotDSCRX10 = document.querySelector('#sony-cyber-shotDSC-RX10');
const olympusFE4000 = document.querySelector('#olympusFE4000');
const nikonZ6 = document.querySelector('#nikonZ6');
const nikonZ50 = document.querySelector('#nikonZ50');
const nikonD5600 = document.querySelector('#nikonD5600');

const btnFilterCanon = document.querySelector('#btn-filter-canon');
const btnFilterNikon = document.querySelector('#btn-filter-nikon');
const btnFilterOlympus = document.querySelector('#btn-filter-olympus');
const btnFilterSony = document.querySelector('#btn-filter-sony');
const btnFilterBody = document.querySelector('#btn-filter-body');
const btnFilterKit = document.querySelector('#btn-filter-kit');
const btnFilter16px = document.querySelector('#btn-filter-16px');
const btnFilter16_20px = document.querySelector('#btn-filter-16-20px');
const btnFilter20px = document.querySelector('#btn-filter-20px');

    // for(let i=0; i<10; i++){
// 	const canonRemove = document.querySelector('ul li.canon');
// 	camerasCatalogue.removeChild(canonRemove);
// }

// for (let i=0; i<5; i++) {
//     const parToRemove = document.querySelector('section p.dynamic');
//     sect.removeChild(parToRemove);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////


