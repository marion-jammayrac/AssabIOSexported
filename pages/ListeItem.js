import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const PeopleListItem = props => {

	const { person, navigateToPeopleDetail } = props;

	return (
		<TouchableOpacity onPress={() => {
			navigateToPeopleDetail({ person });
		}}>
			<View style={style.line}>
				<Text style={style.lineTextTitle}>{person.nom}</Text>
				<Text style={style.lineText}>{person.adresse}</Text>
			</View>
		</TouchableOpacity>
	);
}
// changer mise en page 

const style = StyleSheet.create({
	line: {
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row',
		elevation: 1,
		backgroundColor: "#FFFFFF",
		marginLeft: 5,
		marginRight: 5,
		paddingBottom: 5,
		flexDirection: 'column',
		alignItems: 'flex-start',
		paddingTop: 5,
		justifyContent: 'space-between',
		overflow: 'hidden',
		borderRadius: 10,
		marginTop:8,

	},

	lineText: {
		fontSize: 18,
		paddingLeft: 16,
		//fontWeight: 'bold'
	},
	lineTextTitle: {
		fontSize: 18,
		paddingLeft: 16,
		fontWeight: 'bold'
	},

	avatar: {
		aspectRatio: 1,
		flex: 1,
		marginLeft: 15,
		borderRadius: 50
	}
})

export default PeopleListItem;