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

    })
    .catch((err) => {
      console.log(err);
    });
};
const getTransaction = ({setData}) => {
  fetch("https://expense-api-7k7d.onrender.com/api/v1/transactions", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      setData(result);
    })
    .catch((err) => {
      console.log(err);
    });

  // return data;
};
module.exports = {
  addTransaction,
  deleteTransaction,
  getTransaction,
};
