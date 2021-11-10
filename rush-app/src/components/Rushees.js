import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// This function will instead be used to retrieve all the rushees from the database
// and then populate them into the List
function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function Rushees() {

  return (
    <List>
        {generate(
            <ListItem disablePadding
                secondaryAction={
                    <Stack spacing={1}>
                        <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                }
                >
                <ListItemButton component="a" href="/rushee">
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 56, height: 56 }}
                            />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItemButton>
            </ListItem>,
        )}
    </List>
  );
}
