const cocktails = [
    {
        name: "Martini Fiero Tonic / Мартини Фьеро Тоник",
        image: "./img/martini-fiero.webp",
        method: "Build",
        steps: ["Martini Fiero - 50 ml", "Tonic ~ 150 ml", "Долька апельсина", "Лед"],
        type: "cocktails"
    },
    {
        name: "Vachego / Вачего",
        image: "./img/vachego.jpg",
         method: "Build",
        steps: ["Gin - 50 ml", "Cordial Blueberry - 50 ml", "Сок лимона - 10 ml", "Долька лимона", "Лед"],
        type: "cocktails"
    },
    {
        name: "Aperol Spritz / Апероль Шприц",
        image: "./img/aperol.webp",
         method: "Buld",
        steps: ["Aperol - 50 ml", "Sparkling wine - 80 ml", "Soda - 20 ml", "Долька апельсина", "Лед"],
        type: "cocktails"
    },
    {
        name: "Porn Star Martini / Порн Cтар Мартини",
        image: "./porn-star.webp",
         method: "Shake",
        steps: ["Водка - 50 ml", "Сок лимона - 20 ml", "Сироп Ваниль - 30 ml", "Пюре маракуйя - 40 ml", "Белок - 10 ml", "Подавать безо льда с шотом игристого"],
        type: "cocktails"
    },
    {
        name: "White Pear / Вайт Пир",
        image: "./white-pear.webp",
         method: "Build",
        steps: ["Ром - 50 ml", "Сок лимона - 20 ml", "Сироп Груша - 30 ml", "Пюре маракуйя - 40 ml", "Белое вино - 50 ml", "Долька апельсина", "Лед"],
        type: "cocktails"
    },
    {
        name: "Linchburg Lemonade / Линчубргский Лимонад",
        image: "./img/linchburg.webp",
         method: "Build",
        steps: ["Бурбон - 50 ml", "Сок лимона - 20 ml", "Сироп Сахар - 20 ml", "Cointreau / Triple Sec - 20 ml", "Soda - 40 ml", "Лед"],
        type: "cocktails"
    },
    {
        name: "Basil Smash / Бэзил Смэш",
        image: "./img/basil.webp",
         method: "Build",
         steps: ["Gin - 50 ml", "Cordial Basil - 50 ml", "Сок лимона - 10 ml", "Долька лимона", "Лед"],
         type: "coctails"
    },
    {
        name: "Passion Sour / Пэшн Сауэр",
        image: "./img/pasion.webp",
         method: "Shake",
         steps: ["Бурбон - 50 ml", "Сок лимона - 25 ml", "Сироп Сахар - 25 ml", "Пюре маракуйя - 40 ml", "Белок - 10 ml", "Долька лимона", "Подавать со льдом в роксе"],
         type: "cocktails"
    },
    {
        name: "Negroni / Негрони",
        image: "./img/negroni.webp",
         method: "Build",
        steps: ["Campari - 30 ml", "Вермут Rosso - 30 ml", "Gin - 30 ml", "Долька апельсина", "Лед"],
        type: "cocktails"
    },
    {
        name: "Bramble Tonic / Брамбл Тоник",
        image: "./img/gin-tonic.webp",
        method: "Build",
        steps: ["Gin - 50 ml", "Tonic - 150 ml", "Долька лимона", "Лед"],
        type: "cocktails"
    },
    {
        name: "Spritz Strawberry & Hibiscus / Шприц Клубника Гибискус",
        image: "./img/spritz-strawberry.webp",
         method: "Build",
         steps: ["Gin / Rum / Vodka - 50 ml", "Rocket tonic - 50 ml", "Сок лимона - 10 ml", "Сироп Клубника - 20 ml", "Tonic - 100 ml", "Долька лимона", "Лед"],
         type: "cocktails"
    },
    {
        name: "Apple Pie / Яблочный Пирог",
        image: "./img/apple-pie.webp",
        method: "Build",
        steps: ["Бурбон - 30 ml", "Черный чай", "Сироп Корица - 10 ml", "Сироп Сахар - 40 ml", "Сок лимона - 15 ml", "Яблоки на декор", "Подогреть, перелить в кружку"],
        type: "grogs"
    },
    {
        name: "Blueberry Grog / Ежевичный Грог",
        image: "./img/blackberry-grog.webp",
        method: "Build",
        steps: ["Bacardi Oakhart - 30 ml", "Черный чай", "Сироп Ежевика - 30 ml", "Сок лимона - 20 ml", "Долька апельсина", "Долька лимона", "Подогреть, перелить в кружку"],
        type: "grogs"
    },
    {
        name: "Passion Shot / Маракуйя Шот (на 1 литр)",
        image: "./img/shots.webp",
        method: "Build",
        steps: ["Водка - 500 ml", "Пюре Маракуйя - 200 ml", "Сахар - 150 ml", "Сок лимона - 150 ml"],
        type: "shots"
    },
    {
        name: "Lychee Shot / Личи Шот (на 1 литр)",
        image: "./shots.webp",
        method: "Build",
        steps: ["Водка - 500 ml", "Пюре Личи - 200 ml", "Сироп Банан - 150 ml", "Сок лимона - 150 ml"],
        type: "shots"
    },
    {
        name: "Red Orange Shot / Красный Апельсин Шот (на 1 литр)",
        image: "./img/shots.webp",
        method: "Build",
        steps: ["Водка - 300 ml", "Martini Fiero - 200 ml", "Сироп Сахар - 150 ml", "Сок лимона - 150 ml", "Сок апельсина - 200 ml"],
        type: "shots"
    },
    {
        name: "Mango Shot / Манго Шот (на 1 литр)",
        image: "./img/shots.webp",
        method: "Build",
        steps: ["Водка - 500 ml", "Пюре Манго - 200 ml", "Сироп Ваниль - 150 ml", "Сок лимона - 150 ml"],
        type: "shots"
    },
    {
        name: "Raspberry Shot / Малина Шот (на 1 литр)",
        image: "./img/shots.webp",
        method: "Build",
        steps: ["Водка - 500 ml", "Пюре Малина - 200 ml", "Сироп Роза / Малина - 150 ml", "Сок лимона - 150 ml"],
        type: "shots"
    },
    {
        name: "Passion fruit & Pomegranate / Маракйя - Гранат",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Пюре Маракуйя - 50 ml", "Сироп Гренадин - 20 ml", "Сок лимона - 20 ml", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Sea buckthorn / Облепиха с медом и шалфеем",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Пюре Облепиха - 50 ml", "Сироп Медовый - 30 ml", "Пару листов шалфея", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Lychee & orange / Личи с апельсином и бадьяном",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Пюре Личи - 50 ml", "Сироп Сахар - 20 ml", "Сок лимона - 20 ml", "Бадьян - 2 шт", "2 дольки апельсина", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Mango & Tangerin / Манго - мандарин",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Пюре Манго - 50 ml", "Сироп Сахар - 20 ml", "Сок лимона - 20 ml", "Мандарин - 3 дольки", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Ginger & Apple & Cinnamon / Имбирный с корицей и яблоком",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Пюре Имбирь - 50 ml", "Сироп Корица - 20 ml", "Сок лимона - 20 ml", "Яблоко - 3 дольки", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Raspberry & Honey & Thyme / Малина с медом и чабрецом",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Пюре Малина - 50 ml", "Сироп Медовый - 20 ml", "Сок лимона - 20 ml", "Чабрец - 2 ветки", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Mint & Lemon & Honey / Мятный с лимоном и медом",
        image: "./img/tea.webp",
        method: "Build",
        steps: ["Сироп Медовый - 20 ml", "Сок лимона - 20 ml", "Мята - небольшая горсть", "2 дольки лимона", "Залить горячей водой чайник до конца и прогреть на кофемашине"],
        type: "tea"
    },
    {
        name: "Strawberry Lychee Aloe / Клубника Личи Алоэ",
        image: "./img/lemonade.webp",
        method: "Build",
        steps: ["Пюре Личи - 50 ml", "Сок лимона - 20 ml", "Сироп Клубника - 20 ml", "1 долька лимона", "Добавить лед и залить содовой"],
        type: "lemonades"
    },
    {
        name: "Strawberry & Hibiscus / Земляника Гибискус",
        image: "./img/lemonade.webp",
         method: "Build",
         steps: ["Rocket tonic - 100 ml", "Сок лимона - 20 ml", "Сироп Клубника - 10 ml", "Tonic - 100 ml", "Долька лимона", "Лед"],
         type: "lemonades"
    },
    {
        name: "Passion fruit & Vanil / Маракуйя Ваниль",
        image: "./img/lemonade.webp",
        method: "Build",
        steps: ["Пюре Маракуйя - 50 ml", "Сок лимона - 20 ml", "Сироп Ваниль - 20 ml", "1 долька лимона", "Добавить лед и залить содовой"],
        type: "lemonades"
    },
    {
        name: "Bubble gum / Бабл - гам",
        image: "./img/lemonade.webp",
        method: "Build",
        steps: ["Сок лимона - 20 ml", "Сироп Баблгам - 20 ml", "Мята - небольшая горсть", "1 долька лимона", "Добавить лед и залить содовой"],
        type: "lemonades"
    },
    {
        name: "Cucunber & Ginger / Огурец - Имбирь",
        image: "./img/lemonade.webp",
        method: "Build",
        steps: ["Пюре Имбирь - 30 ml", "Сок лимона - 20 ml", "Сироп Огурец - 20 ml", "1 долька лимона", "Добавить лед и залить содовой"],
        type: "lemonades"
    },
    {
        name: "Tangerin & Mint / Мандарин с мятой",
        image: "./img/lemonade.webp",
        method: "Build",
        steps: ["3 дольки мандарина размять", "Сок лимона - 20 ml", "Сироп Сахар - 20 ml", "Мята - небольшая горсть", "Добавить лед и залить содовой"],
        type: "lemonades"
    },
    {
        name: "Classic / Классический",
        image: "./img/lemonade.webp",
        method: "Build",
        steps: ["Сок лимона - 20 ml", "Сироп Сахар - 20 ml", "3 дольки лимона", "Добавить лед и залить содовой"],
        type: "lemonades"
    },
];

const cocktailList = document.getElementById('cocktailList');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function displayCocktails(cocktails) {
    cocktailList.innerHTML = '';

    // Группируем коктейли по типу
    const groupedCocktails = cocktails.reduce((acc, cocktail) => {
        const type = cocktail.type || 'other'; // Если type не указан, используем 'other'
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(cocktail);
        return acc;
    }, {});

    // Создаем секции для каждого типа коктейля
    for (const [type, cocktails] of Object.entries(groupedCocktails)) {
        const section = document.createElement('section');
        section.className = 'cocktail-category';
        const header = document.createElement('h2');
        header.classList.add('title');
        header.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        section.appendChild(header);

        cocktails.forEach(cocktail => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <p class="name">${cocktail.name}</p>
                <img src="${cocktail.image}" alt="${cocktail.name}" class="image">
                <p>${cocktail.method}</p>
                <ul class="steps">
                    ${cocktail.steps.map(step => `<li class="step">${step}</li>`).join('')}
                </ul>
            `;
            section.appendChild(card);
        });

        cocktailList.appendChild(section);
    }
}

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(query));
    displayCocktails(filteredCocktails);

    if (filteredCocktails.length === 0) {
        resultsDiv.innerHTML = '<div class="result-item">Ничего не найдено</div>';
    } else {
        resultsDiv.innerHTML = '';
    }
});

// Изначально отображаем все коктейли
displayCocktails(cocktails);
