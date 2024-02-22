import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { TCategoryDistribution } from "../types";

interface PolarChartProps {
  data?: TCategoryDistribution | Record<string, number>;
}

const CategoryDistributionChart = ({ data }: PolarChartProps) => {
  ChartJS.register(...registerables);

  const root = document.documentElement;
  const primaryDarkColor =
    getComputedStyle(root).getPropertyValue("--darkPrimaryColor");
  const secondaryDarkColor = getComputedStyle(root).getPropertyValue(
    "--darkSecondaryColor"
  );
  const primaryLightColor = getComputedStyle(root).getPropertyValue(
    "--lightPrimaryColor"
  );
  const secondaryLightColor = getComputedStyle(root).getPropertyValue(
    "--lightSecondaryColor"
  );
  const lightestColor =
    getComputedStyle(root).getPropertyValue("--lightestColor");

  if (!data) return null;
  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
    <div className="smallGraphContainer">
      <h3>Category distribution</h3>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Category Distribution",
              data: values,
              backgroundColor: [
                primaryDarkColor,
                secondaryDarkColor,
                primaryLightColor,
                secondaryLightColor,
                lightestColor,
              ],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CategoryDistributionChart;
