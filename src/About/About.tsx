import React from "react";
import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import siteContent from "../siteContent";
import { makeStyles } from "@material-ui/core/styles";

const content = siteContent.about.content;

const getStyles = makeStyles((theme) => ({
	content: {
		borderLeft: `2px solid ${theme.palette.secondary.main}`,
		paddingLeft: "5px",
	},
	row: {
		paddingBottom: "20px",
	},
}));

function buildRow(rowNum: number, text: string, image: string) {
	const classes = getStyles();

	const contentFragement = (
		<Grid item xs={12} md={8}>
			<Typography className={classes.content} variant='body1'>
				{text}
			</Typography>
		</Grid>
	);

	const imageFragement = (
		<Hidden smDown>
			<Grid item md={4}>
				<img src={image} alt='' width='80%'></img>
			</Grid>
		</Hidden>
	);

	if (rowNum % 2) {
		// even rows
		return (
			<React.Fragment key={rowNum}>
				{contentFragement}
				{imageFragement}
			</React.Fragment>
		);
	} else {
		// odd rows
		return (
			<React.Fragment key={rowNum}>
				{imageFragement}
				{contentFragement}
			</React.Fragment>
		);
	}
}

function About() {
	return (
		<Container maxWidth='lg'>
			<Grid container>{content.map((item, index) => buildRow(index, item.text, item.image))}</Grid>
		</Container>
	);
}

export default About;
