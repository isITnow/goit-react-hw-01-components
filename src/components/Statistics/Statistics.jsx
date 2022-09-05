import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.stats__item}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className={s.label}>{label}</span>
            <span className="percentage">{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};
