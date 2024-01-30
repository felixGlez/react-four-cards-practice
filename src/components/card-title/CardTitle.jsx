import style from './card-title.module.css';

const CardTitle = props => {
	return <h3 className={style['card-title']}>{props.text}</h3>;
};

export default CardTitle;
