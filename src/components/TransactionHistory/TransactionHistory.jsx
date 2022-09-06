import PropTypes from 'prop-types';
import TransactionItem from '../TransactionHistory/TransactionItem'
import s from './TransactionHistory.module.css'

function TransactionHistory({ items }) {
    return (<table className={s.transaction__history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map((item) => <TransactionItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency} />)}
  </tbody>
</table>)
}
export default TransactionHistory

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired
}