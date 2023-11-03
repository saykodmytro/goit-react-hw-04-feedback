import React, { Component } from 'react';
import { Container } from './Container/Container';
import { Title } from './Title/Title';
import { ButtonList } from './ButtonList/ButtonList';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const all = this.countTotalFeedback();
    const good = this.state.good;
    const percent = (good / all) * 100;
    return percent.toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Title title="Please leave feedback" />
        <ButtonList
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification notif="There is no feedback" />
        )}
      </Container>
    );
  }
}
