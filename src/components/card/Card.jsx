import style from './card.module.css';

const Card = props => {
	return (
		<div className={`${style.card} ${style.margin}`}>{props.children}</div>
	);
};
export default Card;
