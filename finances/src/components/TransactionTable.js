import React from "react";
import { format } from "date-fns";

export default function TransactionTable({
  removeTransaction,
  transactions,
  setShowAddTransaction,
}) {
  return (
    <table className="table table-striped">
      <thead className="bg-info text-white">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="p-4">
          <td colSpan="4">
            <button
              className="btn btn-success"
              onClick={() => setShowAddTransaction(true)}
            >
              Add new transaction
            </button>
          </td>
        </tr>
        {transactions.map((transaction, index) => {
          console.log(transaction);
          return (
            <tr className="p-4" key={index}>
              <td>{format(transaction.date, "MMMM dd yyyy")}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.category.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTransaction(index)}
                >
                  𝗫
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
