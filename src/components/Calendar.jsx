import { Calendar } from "react-calendar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      dayColor: "#fff",
    };
  }
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <Calendar
        onChange={this.onChange}
        onClickDay={console.log(this)}
        value={this.state.date}
      />
    );
  }
}
