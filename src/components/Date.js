import React from 'react';

const ShowDate = ({ value }) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const convertDate = new Date(value);
    const displayDay = convertDate.getUTCDate();
    const displayMonth = convertDate.getUTCMonth();
    const displayYear = convertDate.getUTCFullYear();

    return (
        <p>
            {`${months[displayMonth]} ${displayDay}, ${displayYear}`}
        </p>
    )
};

export default ShowDate;
