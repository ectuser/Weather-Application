import React from 'react';
import {Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import Content from "./Content";

const App = () => {
	return(
		<div>
			<Drawer
				variant="permanent"
				anchor="left"
			>
				<List style={{width: "200px"}}>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem button key={text}>
						<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			Hello
			<Content />

		</div>
	)
}

export default App;
