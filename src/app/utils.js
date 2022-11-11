import { useNavigate } from "react-router-dom";


export function formateDate(date) {
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
  });
  return formatter.format(new Date(date))
}

 
export function calcMargin(current, per) {
  return `-${current * 100}${per === 4 ? "%" : "vw"}`
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0
  })
}