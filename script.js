const cocktails = [
    {
        name: "Martini Fiero Tonic / Мартини Фьерро Тоник",
        image: "./img/martini-fiero.webp",
        method: "Build",
        steps: ["Martini Fiero - 50 ml", "Tonic ~ 150 ml", "Долька апельсина", "Лед"]
    },
    {
        name: "Vachego / Вачего",
        image: "./img/vachego.jpg",
         method: "Build",
        steps: ["Gin - 50 ml", "Cordial Blueberry - 50 ml", "Сок лимона - 10 ml", "Долька лимона", "Лед"]
    },
    {
        name: "Aperol Spritz / Апероль Шприц",
        image: "./img/aperol.webp",
         method: "Buld",
        steps: ["Aperol - 50 ml", "Sparkling wine - 80 ml", "Soda - 20 ml", "Долька апельсина", "Лед"]
    },
    {
        name: "Porn Star Martini / Порн Стар Мартини",
        image: "./porn-star.webp",
         method: "Shake",
        steps: ["Водка - 50 ml", "Сок лимона - 20 ml", "Сироп Ваниль - 30 ml", "Пюре маракуйя - 40 ml", "Белок - 10 ml", "Подавать безо льда с шотом игристого"]
    },
    {
        name: "White Pear / Вайт Пир",
        image: "./white-pear.webp",
         method: "Build",
        steps: ["Ром - 50 ml", "Сок лимона - 20 ml", "Сироп Груша - 30 ml", "Пюре маракуйя - 40 ml", "Белое вино - 50 ml", "Долька апельсина", "Лед"]
    },
    {
        name: "Linchburg Lemonade / Линчубргский Лимонад",
        image: "./img/linchburg.webp",
         method: "Build",
        steps: ["Бурбон - 50 ml", "Сок лимона - 20 ml", "Сироп Сахар - 20 ml", "Cointreau / Triple Sec - 20 ml", "Soda - 40 ml", "Лед"]
    },
    {
        name: "Basil Smash / Бейзил Смэш",
        image: "./img/basil.webp",
         method: "Build",
         steps: ["Gin - 50 ml", "Cordial Basil - 50 ml", "Сок лимона - 10 ml", "Долька лимона", "Лед"]
    },
    {
        name: "Passion Sour / Пэшн Сауэр",
        image: "./img/pasion.webp",
         method: "Shake",
         steps: ["Бурбон - 50 ml", "Сок лимона - 25 ml", "Сироп Сахар - 25 ml", "Пюре маракуйя - 40 ml", "Белок - 10 ml", "Долька лимона", "Подавать со льдом в роксе"]
    },
    {
        name: "Negroni / Негрони",
        image: "./img/negroni.webp",
         method: "Build",
        steps: ["Campari - 30 ml", "Вермут Rosso - 30 ml", "Gin - 30 ml", "Долька апельсина", "Лед"]
    },
    {
        name: "Bramble Tonic / Брамбл Тоник",
        image: "./img/gin-tonic.webp",
         method: "Build",
        steps: ["Gin - 50 ml", "Tonic - 150 ml", "Долька лимона", "Лед"]
    },
    {
        name: "Spritz Strawberry & Hibiscus / Шприц Клубника Гибискус",
        image: "./img/spritz-strawberry.webp",
         method: "Build",
         steps: ["Gin / Rum / Vodka - 50 ml", "Rocket tonic - 50 ml", "Сок лимона - 10 ml", "Сироп Клубника - 20 ml", "Tonic - 100 ml", "Долька лимона", "Лед"]
    },
    {
        name: "Apple Pie / Яблочный Пирог",
        image: "./img/apple-pie.webp",
         method: "Build",
         steps: ["Бурбон - 30 ml", "Черный чай", "Сироп Корица - 10 ml", "Сироп Сахар - 40 ml", "Сок лимона - 15 ml", "Яблоки на декор", "Подогреть, перелить в кружку"]
    },
    {
        name: "Blueberry Grog / Ежевичный Грог",
        image: "./img/blackberry-grog.webp",
         method: "Build",
         steps: ["Bacardi Oakhart - 30 ml", "Черный чай", "Сироп Ежевика - 30 ml", "Сок лимона - 20 ml", "Долька апельсина", "Долька лимона", "Подогреть, перелить в кружку"]
    },
    {
        name: "Passion Shot / Маракуйя Шот (на 1 литр)",
        image: "./img/shots.webp",
         method: "Build",
        steps: ["Водка - 500 ml", "Пюре Маракуйя - 200 ml", "Сахар - 150 ml", "Сок лимона - 150 ml"]
    },
    {
        name: "Lychee Shot / Личи Шот (на 1 литр)",
        image: "./shots.webp",
         method: "Build",
        steps: ["Водка - 500 ml", "Пюре Личи - 200 ml", "Сироп Банан - 150 ml", "Сок лимона - 150 ml"]
    },
    {
        name: "Red Orange Shot / Красный Апельсин Шот (на 1 литр)",
        image: "./img/shots.webp",
         method: "Build",
        steps: ["Водка - 300 ml", "Martini Fiero - 200 ml", "Сироп Сахар - 150 ml", "Сок лимона - 150 ml", "Сок апельсина - 200 ml"]
    },
    {
        name: "Mango Shot / Манго Шот (на 1 литр)",
        image: "./img/shots.webp",
         method: "Build",
        steps: ["Водка - 500 ml", "Пюре Манго - 200 ml", "Сироп Ваниль - 150 ml", "Сок лимона - 150 ml"]
    },
    {
        name: "Raspberry Shot / Малина Шот (на 1 литр)",
        image: "./img/shots.webp",
         method: "Build",
        steps: ["Водка - 500 ml", "Пюре Малина - 200 ml", "Сироп Роза / Малина - 150 ml", "Сок лимона - 150 ml"]
    },
];

const cocktailList = document.getElementById('cocktailList');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function displayCocktails(cocktails) {
    cocktailList.innerHTML = '';
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
        cocktailList.appendChild(card);
    });
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
