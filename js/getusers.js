"use strict";
const elList = document.querySelector(".list");

const renderUsers = function (arr, htmlElement) {
  setTimeout(function () {
    if (arr.length > 0) {
      elList.innerHTML = null;

      arr.forEach((user) => {
        const newLi = document.createElement("li");

        newLi.textContent = user.name;

        htmlElement.appendChild(newLi);
      });
    } else {
      alert("Ma'lumot kelmadi!");
    }
  }, 1000);
};

//THEN PROMISE BASED:
// const request = fetch("https://jsonplaceholder.typicode.com/usersjon/")
//   .then((res) => res.json())
//   .then((data) => renderUsers(data, elList));

// ASYNC AWAIT:
const getUsers = async function () {
  const request = await fetch("https://jsonplaceholder.typicode.com/users/");

  const data = await request.json();

  renderUsers(data, elList);
};

getUsers();

// IIFE FUNCTION:
// (async function () {
//   const request = await fetch("https://jsonplaceholder.typicode.com/users/");

//   const data = await request.json();

//   renderUsers(data, elList);
// })();
