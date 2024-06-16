import {
	Container,
	Typography,
	TextField,
	Button,
	Box,
	Grid,
	Link,
} from "@mui/material";
import { useState } from "react";

const AuthForm = () => {
	const [isSignUp, setIsSignUp] = useState(false);

	const handleSwitchMode = () => {
		setIsSignUp((prevIsSignUp) => !prevIsSignUp);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission here
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					{isSignUp ? "Sign Up" : "Sign In"}
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					{isSignUp && (
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="name"
							label="Name"
							name="name"
							autoComplete="name"
							autoFocus
						/>
					)}
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus={!isSignUp}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					{isSignUp && (
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="confirmPassword"
							label="Confirm Password"
							type="password"
							id="confirmPassword"
							autoComplete="confirm-password"
						/>
					)}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						sx={{ mt: 3, mb: 2 }}
					>
						{isSignUp ? "Sign Up" : "Sign In"}
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="#" variant="body2" onClick={handleSwitchMode}>
								{isSignUp
									? "Already have an account? Sign In"
									: "Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default AuthForm;
