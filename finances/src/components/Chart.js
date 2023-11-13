import React from "react";
import { Bar } from "react-chartjs-2";
import { isThisYear, format } from "date-fns";

export default function Chart({ transactions }) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const processTransactions = (transactions, type) => {
    const monthsWithTxs = new Array(12).fill(0);

    for (const transaction of transactions) {
      if (!isThisYear(transaction.date)) {
        continue;
      }
      if (transaction.category.type !== type) {
        continue;
      }
      const monthName = format(transaction.date, "MMMM");
      const indexOfMonth = labels.indexOf(monthName);
      monthsWithTxs[indexOfMonth] += Number(transaction.amount);
    }

    return monthsWithTxs;
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#1ADAE3",
        data: processTransactions(transactions, "income"),
      },
      {
        label: "Expenses",
        backgroundColor: "#E31A1D",
        data: processTransactions(transactions, "expense"),
      },
    ],
  };

  return (
    // <p>Chart</p>
    <Bar
      data={chartData}
      options={{
        title: {
          display: true,
          text: "Your Finances",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );
}
