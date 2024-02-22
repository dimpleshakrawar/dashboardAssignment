import { PolarArea } from "react-chartjs-2";

interface UsageStatisticsData {
  by_platform: Record<string, number>;
  by_country: Record<string, number>;
}

export default function UsageStatisticsChart({
  data,
}: {
  data?: UsageStatisticsData;
}) {
  if (!data) return null;

  const platformLabels = Object.keys(data.by_platform);
  const platformValues = Object.values(data.by_platform);
  const countryLabels = Object.keys(data.by_country);
  const countryValues = Object.values(data.by_country);

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
    <div className="usageStatisticsChartContainer">
      <div className="">
        <h3>Usage by Platform</h3>
        <PolarArea
          data={{
            labels: platformLabels,
            datasets: [
              {
                label: "Day-wise",
                data: platformValues,
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
        />
      </div>
      <div>
        <h3>Usage by Country</h3>
        <PolarArea
          data={{
            labels: countryLabels,
            datasets: [
              {
                label: "Week-wise",
                data: countryValues,
                backgroundColor: [
                  lightestColor,
                  primaryDarkColor,
                  secondaryDarkColor,
                  primaryLightColor,
                  secondaryLightColor,
                ],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
