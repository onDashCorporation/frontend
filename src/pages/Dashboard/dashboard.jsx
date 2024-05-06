import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import React from 'react';
import Chart from 'react-apexcharts';
const Dashboard = () => {
  // const options = {
  //   chart: {
  //     id: 'basic-line'
  //   },
  //   xaxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  //   }
  // };

  // const series = [{
  //   name: 'Series 1',
  //   data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 150, 200]
  // }];

 const line = {
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10]
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15]
      },
      {
        name: "Radar Series 3",
        data: [16, 11, 10, 16, 18, 25]
      },
    ],
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
    
  }
 const bar = {
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10]
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15]
      },
      {
        name: "Radar Series 3",
        data: [16, 11, 10, 16, 18, 25]
      },
    ],
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
    
  }
  const options = {
    series: [
      {
        name: "Radar Series 1",
        data: [45, 52, 38, 24, 33, 10]
      },
      {
        name: "Radar Series 2",
        data: [26, 21, 20, 6, 8, 15]
      },
      {
        name: "Radar Series 3",
        data: [16, 11, 10, 16, 18, 25]
      },
    ],
    chart: {
    type: 'area',
    height: 350,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min))
      }
    },
  },
  colors: ['#008FFB', '#00E396', '#CED4DC'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'monotoneCubic'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  };

 
  return (
    <S.Content>
      <Header />
      <S.test>
        <Nav />
        <S.Container>
          <S.LibConatiner>
            <S.Lib>
            
            <Chart options={line} series={line.series} type="line" height={450} width={650} />
            <Chart options={bar} series={bar.series} type="area" height={450} width={650} />
            <Chart options={options} series={options.series} type="area" height={450} width={650} />
            </S.Lib>
          </S.LibConatiner>

         
        </S.Container>
      </S.test>
    </S.Content>
  );
};

export default Dashboard;
