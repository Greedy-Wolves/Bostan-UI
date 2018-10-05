<template>
    <div class="ds-day">
        <div class="ds-hour" v-for="h in 11" :key="h"></div>
        <template v-for="event in events">
            <ds-event-time
                    :key="`${event.full_id}-${event.time.day_of_week}-${event.time.start}-${event.preview}`"
                    :event="event"
            ></ds-event-time>
        </template>
    </div>
</template>

<script>
    import DS_EventTime from './DS_EventTime'
    export default {
        name: "DS_DayTimes",
        props: ['day_num'],
        components: {
            'ds-event-time': DS_EventTime
        },
        computed: {
            events: function () {
                return this.$store.state.selectedCourses.filter(
                    course => course.time.day_of_week === this.day_num
                )
            }
        }
    }
</script>

<style scoped>

</style>
