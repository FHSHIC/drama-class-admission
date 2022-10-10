import "./index.css";

function timeFormat(date) {
  const year = date.getFullYear() - 1911;
  const month =
    date.getMonth() + 1 > 9
      ? `${date.getMonth() + 1}`
      : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
  return `${year}.${month}.${day}`;
}

/*
 * @param {datas} Array
 * @param {template_dom} dom
 * @returns Node
 */
function news(data, template_dom) {
  const template_texts = template_dom.querySelectorAll("p");
  const template_href = template_dom.querySelector("a");
  //   template_texts[0].innerText = data[0];
  const date = new Date(data[0]);
  template_texts[0].innerText = `${timeFormat(date)} 公告！`;
  template_texts[1].innerText = data[1];
  if (data[2] != "") {
    template_href.href = data[2];
    template_href.innerText = data[3];
  } else {
    template_href.href = "";
    template_href.innerText = "";
  }
  return template_dom;
}

async function main() {
  const breaknews = document.querySelector("#news");
  const template = document.querySelector("#news-template");
  const template_dom = template.content;
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbyn_cfcV51SQYswk5y-d7n3anVkRgTyOJRbRfltR6_qHcpb8KjfFt1_Xj5aZv_743B8/exec"
  );
  const datas = await res.json();
  document.querySelector("#news-loading").classList.add("hidden");
  breaknews.classList.add("max-h-[45vh]");
  breaknews.classList.add("md:max-h-[80vh]");
  breaknews.classList.remove("h-[60vh]");
  datas.forEach((data) => {
    const clone = document.importNode(news(data, template_dom), true);
    breaknews.appendChild(clone);
  });
}

main();
