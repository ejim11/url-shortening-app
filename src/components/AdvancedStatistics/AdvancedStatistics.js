import classes from "./AdvancedStatistics.module.scss";
import StatsBox from "./StatsBox";

const AdvancedStatistics = () => {
  return (
    <div className={classes.stats}>
      <h2>Advanced Statistics</h2>
      <p className={classes.stats_text}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className={classes.stats_block}>
        <div className={classes.line}></div>
        <div className={classes.container}>{<StatsBox />}</div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
