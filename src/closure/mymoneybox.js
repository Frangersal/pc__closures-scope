// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins+= coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }
// moneyBox(5);
// moneyBox(10);

// Con closures

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

const moneyBoxAna = moneyBox();

moneyBoxAna(10);
moneyBoxAna(20);


