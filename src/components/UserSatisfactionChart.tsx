import { Doughnut } from "react-chartjs-2";

interface DataItem {
  rating: number;
  count: number;
}

interface NewComponentProps {
  data?: DataItem[];
}

export default function UserSatisfactionChart({ data }: NewComponentProps) {
  if (!data) return null;
  const labels = data.map((item) => item.rating.toString());
  const values = data.map((item) => item.count);

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

  return (
    <div className="doughnutChartContainer">
      <h3>User Satisfaction</h3>
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: "# of Votes",
              data: values,
              borderWidth: 1,
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
}
