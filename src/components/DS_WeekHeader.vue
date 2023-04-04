<template>
    <div class="ds-week-view-top ds-week">
        <div class="ds-hour-list"></div>
        <template v-for="(day,index) in days">
            <div class="ds-day pa-1" :key="index">
                <!--<div class="ds-week-weekday">{{ day }}</div>-->
                <div class="ds-week-date" style="text-align: center">{{ day }}</div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "DS_WeekHeader",
        data: function() {
            return {
                days:[
                    'شنبه',
                    'یکشنبه',
                    'دوشنبه',
                    'سه شنبه',
                    'چهارشنبه',
                    'پنجشنبه',
                    'آدینه'
                ]
            }
        },
        components: {
        },
        methods: {
        },
    }
</script>

<style scoped>

</style>
