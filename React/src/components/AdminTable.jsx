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
import { faker } from "@faker-js/faker";

const generateFakeData = (num) => {
	return Array.from({ length: num }).map((_, index) => ({
		id: index + 1,
		user: faker.name.findName(),
		avatar: faker.image.avatar(),
		category1: faker.random.word(),
		category2: faker.random.word(),
		category3: faker.random.word(),
		category4: faker.random.word(),
	}));
};



const UserTable = ({ data, onViewMore, onDelete }) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>User</TableCell>
						<TableCell>Category 1</TableCell>
						<TableCell>Category 2</TableCell>
						<TableCell>Category 3</TableCell>
						<TableCell>Category 4</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.user}</TableCell>
							<TableCell>{row.category1}</TableCell>
							<TableCell>{row.category2}</TableCell>
							<TableCell>{row.category3}</TableCell>
							<TableCell>{row.category4}</TableCell>
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
								<Button
									variant="contained"
									color="secondary"
									onClick={() => onDelete(row.id)}
								>
									Rename
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

UserTable.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			user: PropTypes.string.isRequired,
			category1: PropTypes.string.isRequired,
			category2: PropTypes.string.isRequired,
			category3: PropTypes.string.isRequired,
			category4: PropTypes.string.isRequired,
		}),
	).isRequired,
	onViewMore: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

const AdminTable = () => {
	const userData = [
		{
			id: 1,
			user: "User1",
			category1: "Data1",
			category2: "Data2",
			category3: "Data3",
			category4: "Data4",
		},
		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},
		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		{
			id: 2,
			user: "User2",
			category1: "DataA",
			category2: "DataB",
			category3: "DataC",
			category4: "DataD",
		},

		// Add more user data as needed
	];

	const handleViewMore = (id) => {
		console.log(`View more clicked for user with id: ${id}`);
		// whatver happens when view more is clicked should go here, idk what info we get back from the grading algorithm
	};

	const handleDelete = (id) => {
		console.log(`Delete/Rename clicked for user with id: ${id}`);
		// handdle delete
	};

	return (
		<UserTable
			data={userData}
			onViewMore={handleViewMore}
			onDelete={handleDelete}
		/>
	);
};

export default AdminTable;
