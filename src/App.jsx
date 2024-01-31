// import { v4 } from 'uuid';
import Bar from './components/bar/Bar';
import CardImg from './components/card-img/CardImg';
import CardTitle from './components/card-title/CardTitle';
import Card from './components/card/Card';
import CardsContainer from './components/cards-container/CardsContainer';
import MainContainer from './components/main-container/MainContainer';
import MainWrapper from './components/main-wrapper/MainWrapper';
import Text from './components/text/Text';
import Title from './components/title/Title';
// import { CARDS_INFO } from './constants/cards';

const App = () => {
	return (
		<MainWrapper>
			<Title text='Reliable, efficient delivery' class='light' />
			<Title text='Powered by Technology' class='bold' />
			<Text text='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful' />
			<MainContainer>
				<CardsContainer>
					<Bar class='green' />
					<Card>
						<CardTitle text='Supervisor' />
						<Text
							text='Monitors activity to identify project roadblocks'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-supervisor.svg' />
					</Card>
				</CardsContainer>
				<CardsContainer class='bigger'>
					<Bar class='red' />
					<Card class='margin'>
						<CardTitle text='Team Builder' />
						<Text
							text='Scans our talent network to create the optimal team for your project'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-team-builder.svg' />
					</Card>
					<Bar class='yellow' />
					<Card>
						<CardTitle text='Karma' />
						<Text
							text='Regularly evaluates our talent to ensure quality'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-karma.svg' />
					</Card>
				</CardsContainer>
				<CardsContainer>
					<Bar class='blue' />
					<Card>
						<CardTitle text='Calculator' />
						<Text
							text='Uses data from past projects to provide better delivery estimates'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-calculator.svg' />
					</Card>
				</CardsContainer>

				{/* {CARDS_INFO.map((card, index) => (
					<CardsContainer key={v4()}>
						<Bar class={card.barClass} />
						<Card title={card.title} text={card.text} icon={card.icon} />
					</CardsContainer>
				))} */}
			</MainContainer>
		</MainWrapper>
	);
};

export default App;
