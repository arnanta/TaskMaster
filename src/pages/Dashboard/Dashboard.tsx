import style from './Dashboard.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store';

const Dashboard = () => {
  const cards = useSelector((state: RootState) => state.card);
  const cardlength = cards.length;

  // Status percentages
  const newCards = cards.filter((card) => card.status === 'New');
  const activeCards = cards.filter((card) => card.status === 'Active');
  const completedCards = cards.filter((card) => card.status === 'Completed');
  const newPercentage = cardlength > 0 ? (newCards.length / cardlength) * 100 : 0;
  const activePercentage = cardlength > 0 ? (activeCards.length / cardlength) * 100 : 0;
  const completedPercentage = cardlength > 0 ? (completedCards.length / cardlength) * 100 : 0;

  const newPercentageRounded = Math.round(newPercentage);
  const activePercentageRounded = Math.round(activePercentage);
  const completedPercentageRounded = Math.round(completedPercentage);

  // Priority percentages
  const lowPriorityCards = cards.filter((card) => card.priority === 'Low');
  const mediumPriorityCards = cards.filter((card) => card.priority === 'Medium');
  const highPriorityCards = cards.filter((card) => card.priority === 'High');

  const lowPercentage = cardlength > 0 ? (lowPriorityCards.length / cardlength) * 100 : 0;
  const mediumPercentage = cardlength > 0 ? (mediumPriorityCards.length / cardlength) * 100 : 0;
  const highPercentage = cardlength > 0 ? (highPriorityCards.length / cardlength) * 100 : 0;

  if (cardlength === 0) {
    return (
      <div className={style.emptyDashboard}>
        <div className={style.emptyContent}>
          <img
            src="../assets/articles_blank_main.jpg"
            alt="No tasks"
            className={style.emptyImage}
          />
          <h2>Your Dashboard is Empty</h2>
          <p>Create your first task to see analytics and statistics</p>
        </div>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <div className={style.statusContainer}>
        <h2>Task Status Distribution</h2>
        <div className={style.circlesContainer}>
          {/* New Tasks (Orange) */}
          <div className={style.singleChart}>
            <svg viewBox="0 0 36 36" className={style.circularChartOrange}>
              <path
                className={style.circleBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray={`${newPercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                {newPercentageRounded}%
              </text>
            </svg>
            <span>New</span>
          </div>

          {/* Active Tasks (Green) */}
          <div className={style.singleChart}>
            <svg viewBox="0 0 36 36" className={style.circularChartGreen}>
              <path
                className={style.circleBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray={`${activePercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                {activePercentageRounded}%
              </text>
            </svg>
            <span>Active</span>
          </div>

          {/* Completed Tasks (Blue) */}
          <div className={style.singleChart}>
            <svg viewBox="0 0 36 36" className={style.circularChartBlue}>
              <path
                className={style.circleBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray={`${completedPercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                {completedPercentageRounded}%
              </text>
            </svg>
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* Priority Container */}
      <div className={style.priorityContainer}>
        <h2>Task Priority Distribution</h2>
        <div className={style.priorityCharts}>
          {/* Low Priority (Blue) */}
          <div className={style.priorityChart}>
            <svg viewBox="0 0 36 36" className={style.circularChartBlue}>
              <path
                className={style.circleBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray={`${lowPercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                {Math.round(lowPercentage)}%
              </text>
            </svg>
            <span>Low Priority</span>
          </div>

          {/* Medium Priority (Yellow) */}
          <div className={style.priorityChart}>
            <svg viewBox="0 0 36 36" className={style.circularChartYellow}>
              <path
                className={style.circleBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray={`${mediumPercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                {Math.round(mediumPercentage)}%
              </text>
            </svg>
            <span>Medium Priority</span>
          </div>

          {/* High Priority (Red) */}
          <div className={style.priorityChart}>
            <svg viewBox="0 0 36 36" className={style.circularChartRed}>
              <path
                className={style.circleBg}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={style.circle}
                stroke-dasharray={`${highPercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={style.percentage}>
                {Math.round(highPercentage)}%
              </text>
            </svg>
            <span>High Priority</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
