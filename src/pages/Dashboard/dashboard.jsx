import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import React from 'react';
import Chart from 'react-apexcharts';
const Dashboard = () => {

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
    chart: {
      stacked: true
  },
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
    
  }

  return (
    <S.Content>
      <Header />
      <S.test>
        <Nav />
        <S.Container>
          <S.LibConatiner>
            <S.Lib>
            <Chart options={bar} series={bar.series} type="area" height={400} width={650} />
            </S.Lib>
            <S.Lib>
            <Chart options={line} series={line.series} type="line" height={400} width={650} />
            </S.Lib>
            <S.Lib>
            <Chart options={bar} series={bar.series} type="area" height={400} width={650} />
            </S.Lib>
            <S.Lib>
            <Chart options={line} series={line.series} type="line" height={400} width={650} />
            </S.Lib>
          </S.LibConatiner>

         
        </S.Container>
      </S.test>
    </S.Content>
  );
};

export default Dashboard;
