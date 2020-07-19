import React, { useState } from "react";
import { Grid, Container, Typography, Link, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import Icon from "../Icons";
import { makeStyles } from "@material-ui/core/styles";
import siteContent from "../siteContent";

const content = siteContent.resume;

const getStyles = makeStyles((theme) => ({
	headingLink: {
		"&:hover": {
			cursor: "pointer",
		},
	},
	headingText: {
		padding: "10px 0px",
		margin: "50px 0px",
		textTransform: "uppercase",
		"&:hover": {
			borderLeft: `2px solid ${theme.palette.secondary.main}`,
			paddingLeft: "10px",
		},
	},
	listItem: {
		paddingTop: "0px",
		paddingBottom: "0px",
	},
	listItemText: {
		marginTop: "0px",
		marginBottom: "0px",
		//textTransform: 'lowercase'
	},
	list: {
		paddingBottom: "30px",
	},
	itemIcon: {
		minWidth: "0px",
		paddingRight: "8px",
	},
}));

function ResumeLineItem(props: any) {
	const classes = getStyles();

	return (
		<ListItem key={props.id} className={classes.listItem}>
			{props.icon && (
				<ListItemIcon className={classes.itemIcon}>
					<Icon type={props.icon} color='secondary' />
				</ListItemIcon>
			)}
			<ListItemText className={classes.listItemText} primary={props.content} />
		</ListItem>
	);
}

export default function Resume() {
	const [selectedKey, setSelectedKey] = useState("overview");

	const headings = ["overview", "experience", "education"].map((item) => (
		<ResumeHeading key={item} onClick={() => setSelectedKey(item)} Title={item} />
	));

	let selectedContent = <></>;

	switch (selectedKey) {
		case "overview":
			selectedContent = <ResumeOverview />;
			break;
		case "education":
			selectedContent = <ResumeEducation />;
			break;
		case "experience":
			selectedContent = <ResumeExperience />;
			break;
	}

	return (
		<Container maxWidth='lg'>
			<Grid container>
				<Grid item xs={3}>
					{headings}
				</Grid>
				<Grid item xs={2}></Grid>
				<Grid item xs={7}>
					{selectedContent}
				</Grid>
			</Grid>
		</Container>
	);
}

function ResumeHeading(props: any) {
	const classes = getStyles();

	return (
		<Link underline='none' className={classes.headingLink} onClick={props.onClick}>
			<Typography className={classes.headingText} variant='h4'>
				{props.Title}
			</Typography>
		</Link>
	);
}

function ResumeOverview() {
	return <Typography>{content.overview}</Typography>;
}

function ResumeEducation() {
	const classes = getStyles();

	const educationItems = content.education.map((item, index) => (
		<ListItem key={index} className={classes.listItem}>
			<List className={classes.list}>
				{/* <ResumeLineItem content={item.period} icon='schedule' key='period' /> */}
				<ResumeLineItem content={item.period} id='period' key='period' />
				<ResumeLineItem content={item.institute} icon='school' id='institute' key='institute' />
				<ResumeLineItem content={item.location} icon='location' id='location' key='location' />
				{item.degree && item.degree.length > 0 && (
					<ListItem key='degrees' className={classes.listItem}>
						<List>
							{item.degree.map((item, index) => (
								<ResumeLineItem
									content={item.description}
									icon={item.icon}
									id={"degree" + index}
									key={"degree" + index}
								/>
							))}
						</List>
					</ListItem>
				)}
			</List>
		</ListItem>
	));

	return <List className={classes.list}>{educationItems}</List>;
}

function ResumeExperience() {
	const classes = getStyles();

	const experienceItems = content.experience.map((item, index) => (
		<ListItem key={index} className={classes.listItem}>
			<List className={classes.list}>
				{/* <ResumeLineItem content={item.period} icon='schedule' key='period' /> */}
				<ResumeLineItem content={item.period} id='period' key='period' />
				<ResumeLineItem content={item.company} icon='company' id='company' key='company' />
				<ResumeLineItem content={item.location} icon='location' id='location' key='location' />
				<ListItem key='highlights' className={classes.listItem}>
					<List>
						{item.highlights.map((item, index) => (
							<ResumeLineItem
								content={item.description}
								icon={item.icon}
								id={"highlights" + index}
								key={"highlights" + index}
							/>
						))}
					</List>
				</ListItem>
			</List>
		</ListItem>
	));

	return <List className={classes.list}>{experienceItems}</List>;
}
