import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import toast, { Toaster } from "react-hot-toast";
import { fetchAIData } from "./mockApi";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./store/aiDataSlice";
import { RootState } from "./store/store";

import "./App.css";
import CategoryDistributionChart from "./components/CategoryDistributionChart";
import UserSatisfactionChart from "./components/UserSatisfactionChart";
import ResponseTimeChart from "./components/ResponseTimeChart";
import UsageStatisticsChart from "./components/UsageStatisticsChart";
import Spinner from "./components/Spinner";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.aiData
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const data = await fetchAIData();
        dispatch(fetchDataSuccess(data));
      } catch (error: any) {
        dispatch(fetchDataFailure(error.message));
        toast.error(`Oops ${error}`);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="app">
      <Toaster position="top-right" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="firstRowGraphContainer">
            <CategoryDistributionChart data={data?.category_distribution} />
            <UserSatisfactionChart data={data?.user_satisfaction.ratings} />
          </div>
          <ResponseTimeChart data={data?.response_times} />
          <UsageStatisticsChart data={data?.usage_statistics} />
        </>
      )}
    </div>
  );
}

export default App;
