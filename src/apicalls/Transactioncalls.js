const addTransaction = (data) => {
  fetch("https://expense-api-7k7d.onrender.com/api/transactions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteTransaction = (id) => {
  fetch(`https://expense-api-7k7d.onrender.com/api/transactions/${id}`, {
    method: "DELETE",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      // getTransaction();
      //   setNotes(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  addTransaction,
  deleteTransaction,
};
