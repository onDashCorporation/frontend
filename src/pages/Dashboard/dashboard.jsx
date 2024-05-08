import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import React, {useState} from 'react';
import Chart from 'react-apexcharts';
const Dashboard = () => {

  const [opset, setOpset] = useState(true);
  const [chartWidth, setChartWidth] = useState("100%");
  const [chartHeight, setchartHeight] = useState("100%");

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
        <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() =>{setOpset(true)} }>Estoque</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => {setOpset(false)}}>Movimentações</S.Op>
              </S.Option>
        </S.Section>
          <S.LibConatiner>
            {opset ? (<S.Lib>
            <Chart options={bar} series={bar.series} type="line" height={chartHeight} width={chartWidth} />
            </S.Lib>): (<S.Lib>
          <Chart options={line} series={line.series} type="line" height={chartHeight} width={chartWidth} />
          </S.Lib>)}
            
          
           
          </S.LibConatiner>
         
          {/* <S.LibConatiner>
          <S.Lib>
          <Chart options={bar} series={bar.series} type="area" height={chartHeight} width={chartWidth} />
          </S.Lib>

            <S.Lib>
            <Chart options={line} series={line.series} type="line" height={chartHeight} width={chartWidth} />
            </S.Lib>
          </S.LibConatiner> */}
        </S.Container>
      </S.test>
    </S.Content>
  );
};

export default Dashboard;
