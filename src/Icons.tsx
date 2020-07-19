import React from "react";
import { SvgIcon } from "@material-ui/core";
import {
	ShoppingCartOutlined,
	SpeedOutlined,
	AttachMoneyOutlined,
	PeopleOutlineOutlined,
	ScheduleOutlined,
	SchoolOutlined,
	LocationOnOutlined,
	TrendingUpOutlined,
	BusinessOutlined,
} from "@material-ui/icons";

function DiplomaIcon(props: any) {
	return (
		<SvgIcon {...props}>
			<path d='M13 21L15 20L17 21V14H13M17 9V7L15 8L13 7V9L11 10L13 11V13L15 12L17 13V11L19 10M20 3H4A2 2 0 0 0 2 5V15A2 2 0 0 0 4 17H11V15H4V5H20V15H19V17H20A2 2 0 0 0 22 15V5A2 2 0 0 0 20 3M11 8H5V6H11M9 11H5V9H9M11 14H5V12H11Z' />
		</SvgIcon>
	);
}

function FlaskIcon(props: any) {
	return (
		<SvgIcon {...props}>
			<path d='M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12A0.5,0.5 0 0,1 13,12.5A0.5,0.5 0 0,1 12.5,13A0.5,0.5 0 0,1 12,12.5A0.5,0.5 0 0,1 12.5,12Z' />
		</SvgIcon>
	);
}

function CalculatorIcon(props: any) {
	return (
		<SvgIcon {...props}>
			<path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z' />
		</SvgIcon>
	);
}

function Icon(props: any) {
	if (!props.type) {
		return <> </>;
	}

	switch (props.type) {
		case "schedule":
			return <ScheduleOutlined {...props} />;
		case "school":
			return <SchoolOutlined {...props} />;
		case "location":
			return <LocationOnOutlined {...props} />;
		case "flask":
			return <FlaskIcon {...props} />;
		case "diploma":
			return <DiplomaIcon {...props} />;
		case "chart":
			return <TrendingUpOutlined {...props} />;
		case "company":
			return <BusinessOutlined {...props} />;
		case "people":
			return <PeopleOutlineOutlined {...props} />;
		case "money":
			return <AttachMoneyOutlined {...props} />;
		case "speed":
			return <SpeedOutlined {...props} />;
		case "calculator":
			return <CalculatorIcon {...props} />;
		case "cart":
			return <ShoppingCartOutlined {...props} />;
		default:
			return <> </>;
	}
}

export default Icon;
