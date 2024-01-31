import style from './bar.module.css';

const Bar = props => {
	console.log(props);
	return <div className={`${style.bar} ${style[props.class]}`}></div>;
};
export default Bar;
