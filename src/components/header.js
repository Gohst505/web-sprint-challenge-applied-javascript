const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement("div");
  const dateS = document.createElement("span");
  const titleH = document.createElement("h1");
  const tempS = document.createElement("span");

  titleH.textContent = title;
  dateS.textContent = date;
  tempS.textContent = temp;

  header.classList.add("header");
  dateS.classList.add("date");
  tempS.classList.add("temp");

  header.append(titleH);
  header.append(dateS);
  header.append(tempS);

  return header;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  document.querySelector(selector).append(Header("title", "date", "temp"));
};

export { Header, headerAppender };
