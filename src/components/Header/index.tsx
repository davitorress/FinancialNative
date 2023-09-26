import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.username}>Davi Torres</Text>

				<TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
					<Feather name="user" size={27} color="#fff" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: statusBarHeight,
		backgroundColor: "#8000ff",
		flexDirection: "row",
		paddingEnd: 16,
		paddingStart: 16,
		paddingBottom: 44,
	},
	content: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	username: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
	},
	buttonUser: {
		width: 44,
		height: 44,
		borderRadius: 44 / 2,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(255, 255, 255, 0.5)",
	},
});
