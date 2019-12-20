//const makingAnOrderInfo='Самовивіз із поштоматів \nВи можете отримати замовлення у брендованих поштоматах інтернет-супермаркету Rozetka. Поштомат − це термінал самообслуговування, що надає змогу заощадити час при отриманні посилки вагою до 5 кг. Усе, що потрібно для отримання замовлення, − це мобільний телефон і код відкриття комірки, отриманий в sms-повідомленні. Зараз наші поштомати можна знайти на 9 станціях';
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

//const makingAnOrder = document.querySelector('#making-an-order');
//makingAnOrder.addEventListener('click', itemInfoAlertion.bind(this,makingAnOrderInfo));
const shippingAndPayment = document.querySelector('#shipping-and-payment');
shippingAndPayment.addEventListener('click', itemInfoAlertion.bind(this,shippingAndPaymentInfo));
const warranty = document.querySelector('#warranty');
warranty.addEventListener('click', itemInfoAlertion.bind(this,warrantyInfo));
const credit = document.querySelector('#credit');
credit.addEventListener('click', itemInfoAlertion.bind(this,creditInfo));
const serviceCenters = document.querySelector('#service-centers');
serviceCenters.addEventListener('click', itemInfoAlertion.bind(this,serviceCentersInfo));
const aboutTheCompany = document.querySelector('#about-the-company');
aboutTheCompany.addEventListener('click', itemInfoAlertion.bind(this,aboutTheCompanyInfo));
const contacts = document.querySelector('#contacts');
contacts.addEventListener('click', itemInfoAlertion.bind(this,contactsInfo));
const itemReturn = document.querySelector('#item-return');
itemReturn.addEventListener('click', itemInfoAlertion.bind(this,itemReturnInfo));
const siteUsage = document.querySelector('#site-usage');
siteUsage.addEventListener('click', itemInfoAlertion.bind(this,siteUsageInfo));
///////////////////////////////////////////////////////////////////////////////////////////////
const tradeMark = document.querySelector('#trademark');
const ourAddress = document.querySelector('#ouraddress');
const weAreSocial = document.querySelector('#wearesocial');
const titleExplanation = document.querySelector('#titleexpl');
const searchBtn = document.querySelector('#search-btn');


const btnEnglishSwitchON = document.querySelector('#EngON');
btnEnglishSwitchON.addEventListener('click',langEngChange);
function langEngChange(){
	tradeMark.textContent= '© PhotoAce ™ Online Store 2001–2019 TM is used under the license of PhotoAceLTD';
	ourAddress.textContent= 'Our address: Lviv str. Fedkovicha 60a Contacts: Protsyk Yury 0972395930'
	weAreSocial.textContent= 'Follow us:';
	titleExplanation.textContent= 'Online store of photographic equipment';
	//makingAnOrder.textContent = 'Making an order';
	shippingAndPayment.textContent = 'Shipping and payment';
	warranty.textContent = 'Warranty';
	credit.textContent = 'Credit';
	serviceCenters.textContent = 'Service centers';	
	aboutTheCompany.textContent = 'About us';	
	contacts.textContent = 'Contacts';
	itemReturn.textContent = 'Item return';
    siteUsage.textContent = 'Site usage';
    searchBtn.textContent = 'Search';
    
}
const btnUkrainianSwitchON = document.querySelector('#UkrON');
btnUkrainianSwitchON.addEventListener('click',langUkrChange);
function langUkrChange(){
	tradeMark.textContent= '© Інтернет-магазин «PhotoAce™» 2001–2019 ТМ використовується на підставі ліцензії правовласника PhotoAceLTD';
	ourAddress.textContent= 'Наша адреса: м. Львів вул. Федьковича 60а Контакти: Процик Юрій 0972395930';
	weAreSocial.textContent= 'Ми в соцмережах:';
	titleExplanation.textContent= 'Інтернет магазин фототехніки';
	//makingAnOrder.textContent = 'Як зробити замовлення';
	shippingAndPayment.textContent = 'Доставка і оплата';
	warranty.textContent = 'Гарантія';
	credit.textContent = 'Кредит';
	serviceCenters.textContent = 'Сервісні центри';	
	aboutTheCompany.textContent = 'Про компанію';	
	contacts.textContent = 'Контакти';
	itemReturn.textContent = 'Повернення товару';
    siteUsage.textContent = 'Використання сайту';
    searchBtn.textContent = 'Пошук';
   
}
