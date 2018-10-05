<template>
    <v-card>
        <v-toolbar color="orange">
            <v-select
                    :items="departments"
                    item-text="name"
                    item-value="id"
                    label="Standard"
                    hide-details
                    solo
                    single-line
                    :loading="loading"
                    v-model="selectedDepartment"
            ></v-select>
        </v-toolbar>
        <div
                id="scrolling-techniques"
                class="scroll-y"
                style="max-height: 800px;"
        >
            <v-list>
                <template v-for="(course, index) in courseList">
                    <course-tile :key="index" v-bind="course"></course-tile>
                    <v-divider v-if="index + 1 < courseList.length" :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </div>

    </v-card>
</template>

<script>
    import axios from 'axios'
    import Course_Tile from './Course_Tile'
    export default {
        name: "Sidebar",
        components:{
            "course-tile": Course_Tile
        },
        data: function () {
            return {
                loading: false,
                departments: [],
                selectedDepartment: null,
                courseList: [],
            }
        },
        created: function () {
            var vm = this;
            axios.get('http://127.0.0.1:8000/departments/')
                .then(function (response) {
                    vm.departments = response.data
                })
        },
        watch: {
            selectedDepartment: function (newDepartment) {
                if (newDepartment === -2) return;
                if (newDepartment === -1) {
                    return
                }
                else {
                    var vm = this;
                    axios.get('http://127.0.0.1:8000/courses/list/' + newDepartment + '/')
                        .then(function (response) {
                            vm.courseList = response.data
                        })
                        .catch(function () {
                            window.alert("Cant Connect To Server")
                        })
                }
            }
        },
    }
</script>

<style scoped>

</style>
