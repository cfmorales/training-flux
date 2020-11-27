import React, {useState, useEffect} from 'react';
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import {toast} from 'react-toastify';
import * as courseActions from '../actions/courseActions';
// import {Prompt} from 'react-router-dom'

const ManageCoursePage = props => {

    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });
    const [errors, setError] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        if (courses.length === 0) {
            courseActions.loadCourses();
        } else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);

    }, [courses.length, props.match.params.slug]);

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    function handleChange({target}) {
        const updateCourse = {...course, [target.name]: target.value};
        setCourse(updateCourse);
    }

    function formIsValid() {
        const _errors = {};
        if (!course.title) _errors.title = 'Title is required';
        if (!course.authorId) _errors.authorId = 'Author is required';
        if (!course.category) _errors.category = 'Category is required';

        setError(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formIsValid()) return;

        courseActions.saveCourse(course).then(() => {
            props.history.push('/courses');
            toast.success('Course Saved');
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/*<Prompt when={true} message='Are you sure you want to leave'/>*/}
            <CourseForm course={course} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/>
        </>
    );
};

export default ManageCoursePage;