import numeral from 'numeral';

export default (expenses) => {
    const sum = expenses.reduce( (acc, expense) => {
        return acc + expense.amount;
    }, 0);
    return numeral(sum / 100).format('$0,0.00');
};