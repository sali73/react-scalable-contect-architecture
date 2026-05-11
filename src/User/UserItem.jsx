import React from 'react';

const UserItem = React.memo(({ name, id, onClick }) => {
    console.log(`Rendering UserItem: ${name}`); 
    return (
        <li 
            style={{ listStyle: 'none', cursor: 'pointer', padding: '5px' }} 
            onClick={() => onClick(id)}
        >
            {name}
        </li>
    );
});

export default UserItem;