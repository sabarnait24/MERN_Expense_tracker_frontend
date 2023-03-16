import _, { uniq } from "lodash";

export function getSum(transaction, type) {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount");
      return {
        type: key,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();

  return sum;
}

export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");
  // console.log(amountSum);
  let Total = _.sum(getSum(transaction));

  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();

  return percent;
}

export function chart_Data(transaction) {
  let dataValue = getSum(transaction);
  let type = transaction.map((a) => a.type);
  type = uniq(type);
  // console.log(type);

  let color = type.map((a) => (a === "Savings" ? "#00FF00" : "#FF0000"));
  // console.log(color);

  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: color,
          hoverOffset: 4,
          borderRadius: 10,
          spacing: 5,
        },
      ],
    },
    options: {
      cutout: 98,
    },
  };

  return config;
}

export function getTotal(transaction) {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      return {
        type: key,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  let sum1 = 0,
    sum2 = 0;
  let tot = sum.map((e) => (e.type === "Savings" ? e.total : -e.total));
  console.log(tot);
  sum1 = tot.length >= 1 ? tot[0] : 0;

  sum2 = tot.length === 2 ? tot[1] : 0;

  return sum1 + sum2;
}
