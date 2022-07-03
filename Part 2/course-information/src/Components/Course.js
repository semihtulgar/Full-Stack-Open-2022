import React from 'react'
import Header from "./CoursePartials/Header";
import Content from "./CoursePartials/Content";

function Course({ course }) {
    console.log(course)
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course