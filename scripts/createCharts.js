export const createLineChart = (ctx, label, dates, data) => {
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(58,123,213,1");
  gradient.addColorStop(1, "rgba(0,210,255,0.3)");

  const config = {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          data: data,
          label: label,
          fill: true,
          backgroundColor: gradient,
          borderColor: "#00008B",
        },
      ],
    },
    options: {
      hoverRadius: 12,
      hitRadius: 30,
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            callback: function (value) {
              if (label == "Daily Temperature") {
                return value + "°C";
              } else {
                return value + "km/h";
              }
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  new Chart(ctx, config);
};

export const createBarChart = (ctx, label, dates, data) => {
  let gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(58,123,213,1");
  gradient.addColorStop(1, "rgba(0,210,255,0.3)");

  const config = {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          data: data,
          label: label,
          fill: true,
          backgroundColor: gradient,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  new Chart(ctx, config);
};
