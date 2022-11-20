$(document).ready(function () {
  let lps = ["lp", "cena", "produkt"];
  let ceny = ["5,60", "3,23", "7,45", "10,00", "3,20"];
  let produkty = ["chleb", "mąka", "masło", "kefir", "dżem"];
  const table = $("#table");
  let tr = $("<tr>");

  table.append(tr);
  lps.forEach((el) => {
    const th = $("<th>");
    th.text(el);
    tr.append(th);
  });
  ceny.forEach((el, i) => {
    let row = $("<tr>");
    const td1 = $("<td>");
    td1.text(el);
    const td2 = $("<td>");
    const lp = $("<td>");
    lp.text(i + 1);

    td2.text(produkty[i]);
    row.append(lp);
    row.append(td1);
    row.append(td2);

    table.append(row);
  });
});
