import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  card: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
  	marginTop: theme.spacing.unit * 4
  },
  media: {
    height: 140
  }
	});

const sourceWords = [
  "flesh" "awareness" "Bene" "Atreides" "worm"
  "Shaitan" "Shai-Hulud" "stillsuit" "desert"
  "mentat" "ghola" "Tleilaxu" "gesserit"
  "CHOAM" "melange" "prescience" "abomination"
  "Ixian" "axolotl" "guild navigator"
  "desert" "crysknife" "spice" "prana-bindu"
  "Muad'Dib" "face dancer" "Harkonnen"
  "sardaukar"
];
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const genIpsum = (inputWords, textLength) => {
  let strArr = [];
  for (let i = 0; i < textLength; i++) {
    strArr.push(inputWords[getRandomInt(inputWords.length)]);
  }
  return strArr.join(" ");
};

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockText: ""
    };
  }

  handleClick = () => {
    this.setState({ blockText: genIpsum(sourceWords, 25) });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p">{this.state.blockText}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.handleClick}>
            generate text
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
