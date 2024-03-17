const DummyData = [
  {
    query: "revenue driver for Wipro in 2022",
    response:
      "The key revenue driver for Wipro in 2022 was their expansion into new markets.",
  },
  {
    query: "chairman's message for TCS in 2023",
    response:
      "The chairman's message for TCS in 2023 emphasized innovation and digital transformation.",
  },
  {
    query: "line chart",
    response: {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Line Chart Example",
            data: [120, 200, 150, 80, 70, 110, 130],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.1,
          },
        ],
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)",
          "rgba(250, 192, 19, 0.8)",
          "rgba(253, 135, 135, 0.8)",
        ],
        borderRadius: 5,
      },
    },
  },
  {
    query: "bar chart",
    response: {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Bar Chart Example",
            data: [120, 200, 150, 80, 70, 110, 130],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    query: "doughnut chart",
    response: {
      type: "doughnut",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Bar Chart Example",
            data: [120, 200, 150, 80, 70, 110, 130],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    query: "pie chart",
    response: {
      type: "pie",
      data: {
        labels: ["Apple", "Orange", "Banana", "Grape", "Pineapple"],
        datasets: [
          {
            label: "Pie Chart Example",
            data: [335, 310, 234, 135, 1548],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    query: "chart type",
    response: {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Dataset 1",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgba(255, 99, 0, 0.2)",
            borderColor: "rgba(255, 99, 0, 1)",
            borderWidth: 1,
          },
          {
            label: "Dataset 2",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "rgba(255, 206, 0, 0.2)",
            borderColor: "rgba(255, 206, 0, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(0, 0, 0, 1)",
            },
          },
        },
      },
    },
  },
];

export default DummyData;
