import { Line } from "react-chartjs-2";

interface IDayItem {
  date: string;
  average_time: number;
}

interface IWeekItem {
  week: string;
  average_time: number;
}

interface ChartData {
  day_wise: IDayItem[];
  week_wise: IWeekItem[];
}

export default function ResponseTimeChart({ data }: { data?: ChartData }) {
  if (!data) {
    return null;
  }

  const root = document.documentElement;
  const primaryDarkColor =
    getComputedStyle(root).getPropertyValue("--darkPrimaryColor");
  const secondaryDarkColor = getComputedStyle(root).getPropertyValue(
    "--darkSecondaryColor"
  );

  const dayLabels = data.day_wise.map((item) => item.date || "");
  const dayValues = data.day_wise.map((item) => item.average_time);
  const weekLabels = data.week_wise.map((item) => item.week || "");
  const weekValues = data.week_wise.map((item) => item.average_time);
  return (
    <div className="responseTimeChartContainer">
      <div>
        <h3>Day-wise Response Time</h3>
        <Line
          data={{
            labels: dayLabels,
            datasets: [
              {
                label: "Day-wise",
                data: dayValues,
                borderColor: primaryDarkColor,
                fill: false,
              },
            ],
          }}
        />
      </div>
      <div>
        <h3>Week-wise Response Time</h3>
        <Line
          data={{
            labels: weekLabels,
            datasets: [
              {
                label: "Week-wise",
                data: weekValues,
                borderColor: secondaryDarkColor,
                fill: false,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
