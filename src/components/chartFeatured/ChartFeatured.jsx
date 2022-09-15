import './chartFeatured.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ChartFeatured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreHorizIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, harum.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount"> $12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount"> $12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount"> $12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
