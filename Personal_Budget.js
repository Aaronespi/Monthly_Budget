const prompt = require("prompt-sync")();

let monthlyEarnings = 0;
let monthlyDespenses= 0;

const moneyEarned = prompt('Do you earn money monthly?(yes or no)');
if(moneyEarned == 'no'){
    console.log('We are done.');
} else {
    let earnings = prompt('Enter your earnings: ');
    earnings = parseInt(earnings, 10);
    monthlyEarnings = monthlyEarnings + earnings;
    let moreEarnings = prompt('Is it everything? ');

    while(moreEarnings == 'no'){
        earnings = prompt('Enter your earnings: ');
        earnings = parseInt(earnings, 10);
        monthlyEarnings = monthlyEarnings + earnings;
        moreEarnings = prompt('Is it everything? ');
    };

    console.log(`Your earned ${monthlyEarnings} this month.`);

    let despenses = prompt('Enter your despenses(positive values): ');
    despenses = parseInt(despenses, 10);
    monthlyDespenses = monthlyDespenses + despenses;
    let moreDespenses = prompt('Is it everything?');

    while(moreDespenses == 'no'){
        despenses = prompt('Enter your despenses(positive values): ');
        despenses = parseInt(despenses, 10);
        monthlyDespenses = monthlyDespenses + despenses;
        moreDespenses = prompt('Is it everything? ');
    };

    console.log(`Your wasted ${monthlyDespenses} this month.`);

    const moneyAtTheEnd = monthlyEarnings - monthlyDespenses;
    if(moneyAtTheEnd > 0){
        console.log(`This month you saved ${moneyAtTheEnd}.`);
        console.log('Well done.');
    } else {
        console.log(`You wasted this month ${moneyAtTheEnd}.`);
        console.log('You have a problem, you need to earn more or waste less.');
    };
}


