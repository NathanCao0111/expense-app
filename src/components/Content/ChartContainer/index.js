import styles from './ChartContainer.module.css';
import ChartItem from './ChartItem';

function ChartContainer({ filterYearData }) {
  const chartData = [
    { 1: { month: 'Jan', percent: 0 } },
    { 2: { month: 'Feb', percent: 0 } },
    { 3: { month: 'Mar', percent: 0 } },
    { 4: { month: 'Apr', percent: 0 } },
    { 5: { month: 'May', percent: 0 } },
    { 6: { month: 'Jun', percent: 0 } },
    { 7: { month: 'Jul', percent: 0 } },
    { 8: { month: 'Aug', percent: 0 } },
    { 9: { month: 'Sep', percent: 0 } },
    { 10: { month: 'Oct', percent: 0 } },
    { 11: { month: 'Nov', percent: 0 } },
    { 12: { month: 'Dec', percent: 0 } },
  ];

  for (let element of filterYearData) {
    const filterMonth = Number(element.date.split('/')[1]);
    chartData[filterMonth - 1][filterMonth].percent += element.amount;
  }

  return (
    <div className={styles.chartContainer}>
      {chartData.map((element, index) => {
        return <ChartItem key={index} percent={element[index + 1].percent} month={element[index + 1].month} />;
      })}
    </div>
  );
}

export default ChartContainer;
