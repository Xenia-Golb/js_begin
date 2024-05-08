const parseData = JSON.parse(data);
console.log(parseData);
const container = document.querySelector('.container');
const rewPage = document.querySelector('.rewPage');
const allRewPage = document.querySelector('.allRewPage');



const rewiews = JSON.parse(localStorage.getItem('rewiews')) || [];

parseData.forEach(element => {
    const product = document.createElement('div');
    const imgEl = document.createElement('img');
    const h1El = document.createElement('h1');

    const pEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const reviewBlock = document.createElement('div');
    const allRewiewsEl = document.createElement('button');
    allRewiewsEl.innerHTML = 'Все отзывы';
    const reviewBtn = document.createElement('button');
    reviewBtn.innerHTML = 'Добавить отзыв';
    reviewBtn.addEventListener('click', () => {
        addReviewPage();
    });
    allRewiewsEl.addEventListener('click', () => {
        addAllRew();

    });
    h1El.addEventListener('click', () => {
        switch (h1El.textContent.toLocaleLowerCase()) {
            case 'eggs':
                console.log('eggs');
                break;
            case 'avokado':
                console.log('Avokado');
                break;
            case 'coconut milk':
                console.log('coco');
                break;
            default:
                throw new Error('Введите корректное название продукта!');

        }
    })

    reviewBlock.appendChild(reviewBtn);
    reviewBlock.appendChild(allRewiewsEl);

    imgEl.src = element.url;
    h1El.textContent = element.title;
    pEl.textContent = element.info;
    priceEl.textContent = element.price;

    container.appendChild(product);
    product.classList.add('product');

    product.appendChild(imgEl);
    product.appendChild(h1El);
    product.appendChild(pEl);
    product.appendChild(priceEl);
    product.appendChild(reviewBlock);
});


const addReviewPage = () => {
    const boxRew = document.createElement('div');
    boxRew.classList.add('box-rew');

    const inputName = document.createElement('input');
    inputName.placeholder = 'Введите название товара здесь: '
    inputName.classList.add('input-name');

    const inputRew = document.createElement('input');
    inputRew.placeholder = 'Введите отзыв здесь: '
    inputRew.classList.add('input-rew');

    const btnRew = document.createElement('button');
    btnRew.innerHTML = 'Отправить';
    btnRew.addEventListener('click', () => {
        switch (inputName.value.toLowerCase()) {
            case 'eggs':
                console.log('eggs');
                console.log(inputRew.textContent);
                productRew();
                break;
            case 'avokado':
                console.log('Avokado');
                productRew();
                break;
            case 'coconut milk':
                console.log('coco');
                break;
            default:
                throw new Error('Введите корректное название продукта!');

        }
        allRew.push({ "inputName": inputName.value, "inputRew": inputRew.value });
        localStorage.setItem('rewiews', JSON.stringify(rewiews));
    })

    rewPage.appendChild(boxRew);

    boxRew.appendChild(inputName);
    boxRew.appendChild(inputRew);
    boxRew.appendChild(btnRew);


}

const addAllRew = () => {
    JSON.stringify(rewiews.forEach(rew => {
        const rewEl = document.createElement('div');
        rewEl.classList.add('rew');
        const titleEl = document.createElement('p');
        titleEl.textContent = rew.inputName + ':';
        const textEl = document.createElement('p');
        textEl.textContent = rew.inputRew;
        allRewPage.appendChild(rewEl);
        rewEl.appendChild(titleEl);
        rewEl.appendChild(textEl);
    }));
}
// const productRew = () => {
//     JSON.stringify(getParse.forEach(
//         (rew.inputName === h1El.textContent) ? () => {
//             const rewEl = document.createElement('div');
//             rewEl.classList.add('rew');
//             const titleEl = document.createElement('p');
//             titleEl.textContent = rew.inputName + ':';
//             const textEl = document.createElement('p');
//             textEl.textContent = rew.inputRew;
//             allRewPage.appendChild(rewEl);
//             rewEl.appendChild(titleEl);
//             rewEl.appendChild(textEl);
//         }
//             : console.log('false')
//     ));
// }
function productRew(h1El) {
    if (h1El.textContent === JSON.stringify(getParse(inputRew.inputName))) {
        const rewEl = document.createElement('div');
        rewEl.classList.add('rew');
        const titleEl = document.createElement('p');
        titleEl.textContent = rew.inputName + ':';
        const textEl = document.createElement('p');
        textEl.textContent = rew.inputRew;
        product.appendChild(rewEl);
        rewEl.appendChild(titleEl);
        rewEl.appendChild(textEl);
    } else {
        console.log('false');
    }
}