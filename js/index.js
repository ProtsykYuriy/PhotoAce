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

//let canonCameras = document.getElementsByClassName('.canon');
let camerasCatalogue = document.querySelector('#cameraslist');
//camerasCatalogue.children.remove(canonCameras);

// for(let i=0; i<10; i++){
// 	const canonRemove = document.querySelector('ul li.canon');
// 	camerasCatalogue.removeChild(canonRemove);
// }

// for (let i=0; i<5; i++) {
//     const parToRemove = document.querySelector('section p.dynamic');
//     sect.removeChild(parToRemove);
// }

///////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);
function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            city: document.querySelector('.login-form input[name=city]').value,
            name: document.querySelector('.login-form input[name=name]').value,
            password: document.querySelector('.login-form input[name=password]').value
        })
    })
    .then(_ => document.querySelector('.login-form').reset());
}