import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let colors = [
    {value: '#F44336' },
    {value: '#E91E63' },
    {value: '#9C27B0' },
    {value: '#673AB7' },
    {value: '#3F51B5' },
    {value: '#2196F3' },
    {value: '#1976d2' },
    {value: '#03A9F4' },
    {value: '#00BCD4' },
    {value: '#009688' },
    {value: '#4CAF50' },
    {value: '#8BC34A' },
    {value: '#CDDC39' },
    {value: '#FFEB3B' },
    {value: '#FFC107' },
    {value: '#FF9800' },
    {value: '#FF5722' },
    {value: '#795548' },
    {value: '#607D8B' },
    {value: '#9E9E9E' },
    {value: '#000000' }
];

export default new Vuex.Store({
    state: {
        selectedCourses: []
    },
    mutations: {
        addCourse: function (state, course) {
            let color = colors[Math.floor(Math.random() * colors.length)].value;
            course.times.forEach(function (time) {
                let item = {};
                item['full_id'] = course['full_id'];
                item['course_name'] = course['course_name'];
                item['instructor'] = course['instructor'];
                item['time'] = time;
                item['preview'] = false;
                item['deleting'] = false;
                item['color'] = color;

                state.selectedCourses.push(item)
            });
        },
        deleteCourse: function(state, course) {
            state.selectedCourses = state.selectedCourses.filter(function (object) {
                return object.full_id !== course.full_id
            })
        },
        preview: function (state, course) {
            course.times.forEach(function (time) {
                let item = {};
                item['full_id'] = course['full_id'];
                item['course_name'] = course['course_name'];
                item['instructor'] = course['instructor'];
                item['time'] = time;
                item['preview'] = true;
                item['deleting'] = false;
                item['color'] = '#9E9E9E';

                state.selectedCourses.push(item)
            });
        },
        clearPreview: function (state) {
            state.selectedCourses = state.selectedCourses.filter(function (obj) {
                return obj.preview !== true;
            });
        }
    },
    actions: {}
})
