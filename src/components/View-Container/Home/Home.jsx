import React, { Component, Fragment } from "react";
import "./Home.less";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      fading: true,
      quotes: [
        {
          content: "Simplicity is the ultimate sophistication",
          author: "Leonardo da Vinci"
        },
        {
          content: "Good things happen to those who hustle",
          author: "Anaïs Nin"
        },
        {
          content: "Be content to act, and leave the talking to others",
          author: "Baltasar Gracian"
        },
        {
          content: "Well done is better than well said",
          author: "Benjamin Franklin"
        },
        {
          content: "Just remember, we're all in this alone",
          author: "Joey Tribbiani"
        },
        {
          content: "You miss 100% of the shots you don’t take",
          author: "Wayne Gretzky"
        },
        {
          content: "Doing nothing is hard, you never know when you're done",
          author: "Lao Tzu"
        },
        {
          content: "Turn your wounds into wisdom",
          author: "Oprah Winfrey"
        },
        {
          content:
            "Soft kitty, warm kitty, little ball of fur, happy kitty, sleepy kitty, purr purr purr.",
          author: "Sheldon Cooper"
        }
      ]
    };
  }

  updateQuote = () => {
    if (this.state.counter === 8) {
      this.setState({ fading: true });
      this.timer = setTimeout(_ => {
        this.setState({ counter: 0 }); // swap the text
        this.setState({ fading: false }); // fade back in
      }, 800);
    } else {
      this.setState({ fading: true });
      this.timer = setTimeout(_ => {
        this.setState({ counter: this.state.counter + 1 }); // swap the text
        this.setState({ fading: false }); // fade back in
      }, 800);
    }
  };

  componentWillMount() {
    setTimeout(
      () =>
        this.setState({ fading: false }, () =>
          setInterval(this.updateQuote, 6000)
        ),
      3500
    );
  }

  render() {
    const { counter, fading } = this.state;

    let quoteJSX = (
      <div className={`home-container ${fading ? "faded" : ""}`}>
        <h1>{this.state.quotes[counter].content}</h1>
        <h2>{this.state.quotes[counter].author}</h2>
      </div>
    );

    return <Fragment>{quoteJSX}</Fragment>;
  }
}
