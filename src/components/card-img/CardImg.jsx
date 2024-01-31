import style from './card-image.module.css';

const CardImg = props => {
	return <img className={style.image} src={props.src} alt='' />;
};
export default CardImg;
