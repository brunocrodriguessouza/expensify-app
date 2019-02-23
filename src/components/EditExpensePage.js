import React from 'react';

const EditExpensePage = (props) => (
    <div>
        Edit the expense with id of {props.match.params.id}
    </div>
);

export default EditExpensePage;