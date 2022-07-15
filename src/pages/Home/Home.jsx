import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
import List from "../../components/Table/Table";
import Widget from "../../components/Widget/Widget";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} />
        </div>
        <div className="listContainer">
          <div className="title">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
