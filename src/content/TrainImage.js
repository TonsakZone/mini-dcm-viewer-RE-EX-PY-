import React from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import count3 from "./DataCount-3.json";
import count5 from "./DataCount-5.json";
import datano3 from "./Convert-5.json";
import "./AllTable.css";


function IdStudyUID() {
	return (
		<div className="idtext">
			<h3 style={{ "color": "rgba(53, 152, 254, 0.8)" , "fontSize": "25px"}}><b>{count3[8]}</b></h3>
			<br />
			<h4>unique values</h4>
		</div>
	);
}


function IdImage() {
	return (
		<div className="idtext">
			<h3 style={{ "color": "rgba(53, 152, 254, 0.8)" , "fontSize": "25px"}}><b>{count5[0]}</b></h3>
			<br />
			<h4>unique values</h4>
		</div>
	);
}


function TrainImageData1() {
	return (
		<div className="idtext">
			<h3 style={{ "color": "red" }}>[null] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32%</h3>
			<br />
			<h3>'x': 789.28836, 'y': .... &nbsp;&nbsp;&nbsp;0%</h3>
			<br />
			<h3 style={{ "color": "lightgray" }}>Other (4293) &nbsp;&nbsp;&nbsp;68%</h3>
		</div>
	);
}


function TrainImageData2() {
	return (
		<div className="idtext">
			<h3>none 1 0 0 1 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32%</h3>
			<br />
			<h3>opacity 1 789.2883.... &nbsp;&nbsp;&nbsp;0%</h3>
			<br />
			<h3 style={{ "color": "lightgray" }}>Other (4293) &nbsp;&nbsp;&nbsp;68%</h3>
		</div>
	);
}

const columns3 = [
	{
		title: 'id',
		dataIndex: 'id',
		children: [
			{
				title: IdImage(),
				dataIndex: 'id',
			},
		],
		sorter: (a, b) => a.id.localeCompare(b.id)
	},
	{
		title: "boxes",
		dataIndex: "boxes",
		children: [
			{
				title: TrainImageData1(),
				dataIndex: 'boxes',
			},
		],
		sorter: (a, b) => a.boxes.length - b.boxes.length,
	},
	{
		title: "label",
		dataIndex: "label",
		children: [
			{
				title: TrainImageData2(),
				dataIndex: 'label',
			},
		],
		sorter: (a, b) => a.label.length - b.label.length,
	},
	{
		title: "StudyInstanceUID",
		dataIndex: "StudyInstanceUID",
		children: [
			{
				title: IdStudyUID(),
				dataIndex: 'StudyInstanceUID',
			},
		],
		sorter: (a, b) => a.StudyInstanceUID.localeCompare(b.StudyInstanceUID)
	},
];


export default function TrainImage() {
	return (
		<div className="container-chart">
			<div className="table">
				<Table
					columns={columns3}
					dataSource={datano3}
					sticky={true}
					tableLayout="fixed"
				/>
			</div>
		</div>
	);
}