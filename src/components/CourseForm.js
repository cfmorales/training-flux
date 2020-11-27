import React from 'react';
import TextInput from "./common/TextInput";
import PropTypes from 'prop-types';

const CourseForm = (props) => {
    console.log(props.course);
    return (
        <form onSubmit={props.handleSubmit}>

            <TextInput
                id="title"
                name="title"
                label="Title"
                onChange={props.handleChange}
                value={props.course.title}
                error={props.errors.title}
            />


            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.handleChange}

                        value={props.course.authorId || ''}
                        className="form-control">
                        <option value=""/>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.errors.authorId && (<div className={'alert alert-danger'}>{props.errors.authorId}</div>)}
            </div>

            <TextInput
                type="text"
                id="category"
                name="category"
                label="Category"
                onChange={props.handleChange}
                value={props.course.category}
                error={props.errors.category}
            />


            <input type="submit" value="Save" className="btn btn-primary"/>
        </form>


    );
};

CourseForm.prototype = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

export default CourseForm;