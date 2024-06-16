import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from "@mui/material";

import PropTypes from "prop-types";

const UserDashboardTable = ({ data, onViewMore, onDelete }) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Category 1</TableCell>
						<TableCell>Category 2</TableCell>
						<TableCell>Category 3</TableCell>
						<TableCell>Category 4</TableCell>
						<TableCell>Category 5</TableCell>
						<TableCell>Category 6</TableCell>
						<TableCell>Category 7</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.category1}</TableCell>
							<TableCell>{row.category2}</TableCell>
							<TableCell>{row.category3}</TableCell>
							<TableCell>{row.category4}</TableCell>
							<TableCell>{row.category5}</TableCell>
							<TableCell>{row.category6}</TableCell>
							<TableCell>{row.category7}</TableCell>
							<TableCell>
								<Button
									variant="contained"
									color="primary"
									onClick={() => onViewMore(row.id)}
								>
									View More
								</Button>
								<Button
									variant="contained"
									color="secondary"
									onClick={() => onDelete(row.id)}
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

UserDashboardTable.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			category1: PropTypes.string.isRequired,
			category2: PropTypes.string.isRequired,
			category3: PropTypes.string.isRequired,
			category4: PropTypes.string.isRequired,
			category5: PropTypes.string.isRequired,
			category6: PropTypes.string.isRequired,
			category7: PropTypes.string.isRequired,
		}),
	).isRequired,
	onViewMore: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

const UserDashboard = () => {
	const userData = [
		{
			id: 1,
			category1: "Data1",
			category2: "Data2",
			category3: "Data3",
			category4: "Data4",
			category5: "Data5",
			category6: "Data6",
			category7: "Data7",
		},
		{
			id: 2,
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
			category5: "DataE",
			category6: "DataF",
			category7: "DataG",
		},
		// Add more user data as needed
	];

	const handleViewMore = (id) => {
		console.log(`View more clicked for user with id: ${id}`);
		// Add functionality for viewing more details
	};

	const handleDelete = (id) => {
		console.log(`Delete clicked for user with id: ${id}`);
		// Add functionality for deleting a user
	};

	return (
		<UserDashboardTable
			data={userData}
			onViewMore={handleViewMore}
			onDelete={handleDelete}
		/>
	);
};

export default UserDashboard;
