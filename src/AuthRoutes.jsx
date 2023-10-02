import { Route, Routes } from "react-router-dom";
import { Dashboard, FilePage, Home, Login } from "./pages";
import PageLayout from "./layout/page-layout";
import { Center, Title } from "@mantine/core";

function AuthRoutes() {
	return (
		<Routes>
			<Route
				path="login"
				element={<Login />}
			/>
			<Route element={<PageLayout />}>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="*"
					element={
						<div>
							<Center mt={40}>
								<Title>Opps! Nothing here.</Title>
							</Center>
						</div>
					}
				/>
				<Route
					path="/file/:filePath"
					element={<FilePage />}
				/>
			</Route>
			<Route
				path="/home"
				element={<Dashboard />}
			/>
		</Routes>
	);
}

export default AuthRoutes;
