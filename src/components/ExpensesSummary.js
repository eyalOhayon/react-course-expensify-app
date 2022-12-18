import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

const ExpensesSummary = (props) => (
    <div>
      <p>Viewing {props.expenses.length} totalling {expensesTotal(props.expenses)}</p>
    </div>
  );


const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);