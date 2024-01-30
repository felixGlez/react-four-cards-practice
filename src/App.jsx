import CardImg from './components/card-img/CardImg';
import CardTitle from './components/card-title/CardTitle';
import Card from './components/card/Card';
import CardsContainer from './components/cards-container/CardsContainer';
import MainContainer from './components/main-container/MainContainer';
import MainWrapper from './components/main-wrapper/MainWrapper';
import Text from './components/text/Text';
import Title from './components/title/Title';

const App = () => {
	return (
		<MainWrapper>
			<Title text='Reliable, efficient delivery' class='light' />
			<Title text='Powered by Technology' class='bold' />
			<Text text='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful' />
			<MainContainer>
				<CardsContainer>
					<Card>
						<CardTitle text='Supervisor' />
						<Text
							text='Monitors activity to identify project roadblocks'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-supervisor.svg' />
					</Card>
				</CardsContainer>
				<CardsContainer>
					<Card>
						<CardTitle text='Team Builder' />
						<Text
							text='Scans our talent network to create the optimal team for your project'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-team-builder.svg' />
					</Card>
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
					<Card>
						<CardTitle text='Calculator' />
						<Text
							text='Uses data from past projects to provide better delivery estimates'
							width='fullwidth'
						/>
						<CardImg src='./images/icon-calculator.svg' />
					</Card>
				</CardsContainer>
			</MainContainer>
		</MainWrapper>
	);
};

export default App;
