<template>
    <v-list-tile
            avatar
            ripple
            @click="$store.commit('addCourse', $props)"
            @mouseover="$store.commit('preview', $props)"
            @mouseout="$store.commit('clearPreview')"
    >
        <v-list-tile-content>
            <v-list-tile-title style="text-align: right;">{{ course_name }}</v-list-tile-title>
            <!--<v-list-tile-sub-title class="text&#45;&#45;primary">{{ full_id }}</v-list-tile-sub-title>-->
            <v-list-tile-sub-title style="text-align: right;">{{ instructor }}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-list-tile-action-text v-for="(time, index) in normalizedTimes" :key="index">
                {{ time.day_of_week }}
            </v-list-tile-action-text>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
    export default {
        name: "Course_Tile",
        props: ['full_id', 'course_name', 'instructor', 'times'],
        computed: {
            normalizedTimes: function () {
                let days = [
                    '',
                    'یک',
                    'دو',
                    'سه ',
                    'چهار',
                    'پنج',
                ];
                return this.times.map( function (time) {
                    return Object.assign({}, time, {
                        day_of_week: days[time.day_of_week] + 'شنبه'
                    });
                })
            }
        }
    }
</script>

<style scoped>

</style>