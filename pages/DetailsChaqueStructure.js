import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PeopleDetailLine = ({label = "", content = "-"}) => {
	return(
		<View style={style.detailLine}>
			<Text style={[style.cell, 
						style.label, 
						label.length > 7 ? style.longLabel : null 
			]}>{ label }</Text>
			<Text style={[style.cell, style.content]}>{ content }</Text>
		</View>
	);
}

const style = StyleSheet.create({
	detailLine: {
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#C5C5C5'
	},
	cell: {
		fontSize: 18
	},
	label: {
		fontWeight: 'bold',
		flex: 3
		
	},
	content: {
		textAlign: 'right',
		flex: 4
	},
	longLabel: {
		fontSize: 20
	}
});

export default PeopleDetailLine;