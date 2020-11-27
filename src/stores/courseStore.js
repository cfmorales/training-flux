import {EventEmitter} from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from "../actions/actionTypes";

const CHANGE = 'change';
let _courses = [];

class CourseStore extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

    emitChange() {
        this.emit(CHANGE);
    }

    getCourses() {
        return _courses;
    }

    getCourseBySlug(slug) {
        return _courses.find(course => course.slug === slug);
    }
}

const courseStore = new CourseStore();

Dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            courseStore.emitChange();//important
            break;
        case actionTypes.UPDATE_COURSE:
            _courses = _courses.map(course => course.id === action.course.id ? action.course : course);
            courseStore.emitChange();
            break;
        case actionTypes.LOAD_COURSES:
            _courses = action.courses;
            courseStore.emitChange();//important
            break;
        case actionTypes.DELETE_COURSE:
            _courses = _courses.filter(course => course.id !== parseInt(action.id, 10));
            courseStore.emitChange();
            break;
        default:
    }
});
export default courseStore;