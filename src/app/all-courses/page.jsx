import React from 'react';

const AllCoursesPage =async () => {
    const res = await fetch ('http://localhost:3000/data.json')
    const  courses =await res.json()
    console.log(courses,"courses")
    return (
        <div>
            All courses page
        </div>
    );
};

export default AllCoursesPage;