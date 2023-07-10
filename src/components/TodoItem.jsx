import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li>{itemProp.title}</li>;

TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
};

export default TodoItem;
