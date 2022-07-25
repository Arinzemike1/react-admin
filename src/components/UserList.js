import React from 'react'
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const UserList = (props) => {
    return (
        <div>
            <List {...props}>
                <Datagrid>
                    <TextField source='id' />
                    <TextField source='name' />
                    <EmailField source='email' />
                    <EditButton basePath='/users' />
                    <DeleteButton basePath='/users' />
                </Datagrid>
            </List>
        </div>
    )
}

export default UserList
