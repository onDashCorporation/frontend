import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import React, {useState} from 'react';
import Chart from 'react-apexcharts';
import Card from "../../components/card/card";
const Dashboard = () => {

  const [opset, setOpset] = useState(true);
  const [chartWidth, setChartWidth] = useState("100%");
  const [chartHeight, setchartHeight] = useState("100%");


  const state = {
          
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  
  
  };


 const line = {
    series: [
      {
        name: "Radar 1",
        data: ["45", 52, "38", "24", "33", "10"]
      },
      {
        name: "Radar  2",
        data: [26, 21, 20, 6, 8, 15]
      },
      {
        name: "Radar  3",
        data: [16, 11, 10, 16, 18, 25]
      },
    ],
    
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
    colors:['#F44336', '#E91E63', '#9C27B0']
    
  }
 const bar = {
    series: [
      {
        name: "Radar  1",
        data: [45, 52, 38, 24, 3, 10]
      },
      {
        name: "Radar  2",
        data: [26, 21, 20, 6, 8, 15]
      },
      {
        name: "Radar  3",
        data: [16, 11, 10, 16, 8, 25]
      },
    ],
    chart: {
      stacked: true
  },
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
    // colors:['#F44336', '#E91E63', '#9C27B0']
    
  }

  return (
    <S.Content>
      <Header />
      <S.test>
        <Nav />
        <S.Container>
        <S.Section>
          <S.SectionContainer>
          <S.Title>Solicitações</S.Title>
        <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() =>{setOpset(true)} }>Estoque</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => {setOpset(false)}}>Movimentações</S.Op>
                <S.Op select={opset === 'mov' ? 'mov' : undefined} onClick={() => {setOpset('mov')}}>Controle</S.Op>
              </S.Option>
          </S.SectionContainer>
        
        </S.Section>
          <S.LibConatiner>
            {opset === true  && 
            <S.ContainerGrafic>
              <S.Lib>
            <Chart options={bar} series={bar.series} type="line" height={chartHeight} width={chartWidth} />
            </S.Lib>
             <S.ConatinerCard>
             <Card Title=" Valor de Estoque" Info="R$ 100,23" sub={true} SubTitle="valor atualizado hoje"/>
             <Card Title=" Valor de Estoque" Info="R$ 100,23" sub={true} SubTitle="valor atualizado hoje"/>
             <Card Title=" Valor de Estoque" Info="R$ 100,23"   SubTitle="valor atualizado hoje"/>
             </S.ConatinerCard>
            </S.ContainerGrafic>
           
            } 
            {opset === false && <S.Lib>
          <Chart options={line} series={line.series} type="line" height={chartHeight} width={chartWidth} />
          </S.Lib>}
            {opset === 'mov' && <S.Lib>
          <Chart options={state} series={state.series} type="bar" height={chartHeight} width={chartWidth} />
          </S.Lib>}
          </S.LibConatiner>
        </S.Container>
      </S.test>
    </S.Content>
  );
};

export default Dashboard;
