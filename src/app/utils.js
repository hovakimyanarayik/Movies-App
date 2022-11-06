export function formateDate(date) {
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatter.format(new Date(date))
}

 
export function calcMargin(current, per) {
  return `-${current * 100}${per === 4 ? "%" : "vw"}`
}