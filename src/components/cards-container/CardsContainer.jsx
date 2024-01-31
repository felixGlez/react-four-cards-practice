import style from './cards-container.module.css';

const CardsContainer = props => {
	return (
		<div className={`${style['cards-container']} ${style[props.class]}`}>
			{props.children}
		</div>
	);
};

export default CardsContainer;
