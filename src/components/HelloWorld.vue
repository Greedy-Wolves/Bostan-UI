<template>
    <v-container fluid fill-height class="ds-calendar-container">

        <div class="ds-week-view">
            <div class="ds-week-view-container">

                <ds-week-header></ds-week-header>

                <div class="ds-week-view-bottom">
                    <div class="ds-week-view-scrollable">
                        <div class="ds-week-view-pane">
                            <div class="ds-week ds-expand">
                                <div class="ds-hour-list">
                                    <div v-for="hour in hours" :key="hour" class="ds-hour">
                                        <div class="ds-hour-text">{{ hour }}</div>
                                    </div>
                                </div>
                                <template v-for="day in 7">
                                    <ds-day-times
                                            :key="day"
                                            :day_num="day-1"
                                    ></ds-day-times>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </v-container>
</template>

<script>
    import DS_WeekHeader from './DS_WeekHeader'
    import DS_DayTimes from './DS_DayTimes'

    export default {
        name: 'HelloWorld',
        components: {
            'ds-week-header': DS_WeekHeader,
            'ds-day-times': DS_DayTimes
        },
        data: function() {
            return {
                hours: [
                    '    ', '8am', '9am', '10am', '11am',
                    '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    nav.toolbar .toolbar__content {
        border-bottom: 1px solid rgb(224, 224, 224);
    }

    .ds-expand {
        width: 100%;
        height: 100%;
    }

    .ds-month {
        display: flex;
        flex-direction: column;
        background-color: white;
    }

    .ds-week-header {
        display: flex;
    }

    .ds-week-header-day {
        flex: 1 0 20px;
        border-right: #e0e0e0 1px solid;
    }

    .ds-week {
        display: flex;
        flex: 1;
    }

    .ds-day {
        flex: 1;
        width: 0;
        border-right: #e0e0e0 1px solid;
        border-bottom: #e0e0e0 1px solid;
    }

    .ds-day .ds-today-dom {
        margin: -7px;
        padding: 10px;
        border-radius: 20px;
        background-color: #4285f4;
        color: white;
        width: 36px;
        height: 36px;
        display: block;
        text-align: center;
        line-height: 16px;
        position: relative;
        z-index: 1;
        top: -4px;
    }

    .ds-event {
        margin: 1px;
        color: white;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 0.5em;
        font-size: 12px;
        cursor: pointer;
        border-radius: 2px;
        text-align: center;
    }

    .ds-day-picker .ds-week-header {
        display: flex;
    }

    .ds-day-picker .ds-week-header > div {
        flex: 1;
    }

    .ds-day-picker .ds-week-header .subtitle {
        flex: 5;
    }

    .ds-day-picker .ds-week-subheader {
        display: flex;
        text-align: center
    }

    .ds-day-picker .ds-week {
        display: flex;
        text-align: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .ds-day-picker .ds-weekday {
        flex: 1;
    }

    .ds-day-picker .ds-day-pick {
        flex: 1 0 14%;
    }

    .ds-color-option {
        width: 100%;
        color: white;
        padding: 4px;
    }

    .ds-gray-textfield .input-group__input input,
    .ds-gray-select .input-group__input {
        background-color: #f5f5f5;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        height: 40px;
        padding: 10px;
    }

    .ds-gray-textfield > label {
        margin-top: -8px;
        margin-left: 8px;
    }

    .ds-gray-textfield .input-group__details::before,
    .ds-gray-select .input-group__details::before {
        background-color: #f5f5f5 !important;
    }

    .ds-font-18,
    .ds-font-18 input {
        font-size: 18px;
    }

    .ds-gray-button {
        background-color: #f5f5f5 !important;
        height: 40px;
    }

    .ds-gray-day-dropdown {
        width: 260px;
        background-color: white;
        padding: 10px;
    }

    .ds-inline-textfield {
        width: auto;
        display: inline-block !important;
        margin-left: 6px;
        margin-right: 6px;
        top: 14px;
        padding-top: 0px;
        margin-top: -14px;
    }

    .ds-inline-textfield.small {
        width: 60px;
    }

    .ds-calendar-container {
        padding: 0px;
        position: relative;
    }

    .ds-month-view .ds-today {
        background-color: rgba(0, 0, 0, 0.04);
    }

    .ds-week-view {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        outline: none;
        background-color: white;
    }

    .ds-week-view-container {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    }

    .ds-week-view-top {
        flex: none;
        display: flex;
    }

    .ds-week-view-bottom {
        flex: 1 1 60%;
        overflow: hidden;
        display: flex;
        position: relative;
        flex-direction: column;
    }

    .ds-week-view-scrollable {
        /*overflow-y: scroll;*/
        flex: 1 1 auto;
        display: flex;
        align-items: flex-start;
    }

    .ds-week-view-pane {
        height: 440px;
        width: 100%;
        overflow-y: hidden;
        flex: none;
        display: flex;
        align-items: flex-start;
    }

    .ds-hour {
        height: 40px;
        border-bottom: #e0e0e0 1px solid;
    }

    .ds-hour-text {
        display: block;
        position: relative;
        top: -6px;
        font-size: 10px;
        color: #212121;
    }

    .ds-hour-list {
        flex: none;
        width: 44px;
        border-right: #e0e0e0 1px solid;
    }

    .ds-hour-list .ds-hour {
        text-align: center;
        border-bottom: none;
    }

    .ds-week-weekday {
        color: black;
        padding-left: 8px;
    }

    .ds-week-date {
        font-size: 40px;
        line-height: 44px;
        color: black;
        padding-left: 8px;
    }

    .ds-week-view .ds-today {
        background-color: rgba(0, 0, 0, 0.04);
    }

    .ds-today .ds-week-weekday,
    .ds-today .ds-week-date {
        color: #4285f4;
    }

    .ds-week-view-pane .ds-day {
        position: relative;
    }

    .ds-year-view .ds-first-day {
        font-weight: bold;
    }

    .ds-year-view .ds-first-day-day {
        background-color: rgba(0, 0, 0, 0.08);
    }
</style>
