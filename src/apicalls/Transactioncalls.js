const addTransaction = (data) => {
  fetch("http://localhost:5000/api/transactions", {
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
  fetch(`http://localhost:5000/api/transactions/${id}`, {
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
