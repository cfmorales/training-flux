import React, {useState, useEffect} from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import {Link} from "react-router-dom";
import {loadCourses, deleteCourse} from "../actions/courseActions";


function CoursesPage() {
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);

        if (courses.length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange);

    }, [courses.length]);

    function onChange() {
        setCourses(courseStore.getCourses());
    }


    return (
        <>
            <h2>Courses</h2>
            <Link to='create-course' className='btn btn-primary mb-2'>Add new</Link>
            <CourseList courses={courses} deleteCourse={deleteCourse}/>
        </>
    );
}

export default CoursesPage;
