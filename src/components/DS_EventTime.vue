<template>
    <div class="ds-event" :style="newStyle" @click.stop="edit">
        <a class="del-button"
           v-show="btnShow"
           @mouseenter="$emit('deletePreview', event.full_id)"
           @mouseleave="$emit('clearDeletePreview', event.full_id)"
           @click="$store.commit('deleteCourse', event)"
        ></a>
        <p class="course-id">{{event.full_id}}</p>
        <p class="course-title">{{event.course_name}}</p>
        <p class="instructor">{{event.instructor}}</p>
    </div>
</template>

<script>
    function getTimeBounds(time, dayHeight = 1, dayWidth = 1, columnOffset = 0.1, clip = true, offsetX = 0, offsetY = 0) {
        let startRaw = (time.start - 7) / 24.0;
        let endRaw = (time.end - 7) /24.0;

        let start = clip ? Math.max(0, startRaw) : startRaw;
        let end = clip ? Math.min(1, endRaw) : endRaw;

        let left = columnOffset;
        let right = dayWidth - left;

        let top = start * dayHeight;
        let bottom = end * dayHeight;

        return {
            top: top + offsetY,
            bottom: bottom + offsetY,
            height: bottom - top,
            left: left + offsetX,
            right: right + offsetX,
            width: right
        };
    }
    export default {
        name: "DS_EventTime",
        props: ['event'],
        data() {
            return{
                btnShow: true
            }
        },
        computed: {
            newStyle: function() {` `
                const HEIGHT = 960;
                const COLUMN_OFFSET = 14;
                let bounds = getTimeBounds(this.event.time, HEIGHT, 1, 0 *COLUMN_OFFSET);
                let color = this.event.color;
                return {
                    position: 'absolute',
                    top: bounds.top + 'px',
                    height: bounds.height + 'px',
                    left: bounds.left + 'px',
                    right: '0px',
                    backgroundColor: color,
                    marginLeft:  0,
                    marginRight: 0,
                    // textDecoration: cancelled ? 'line-through' : 'inherit',
                    // textDecorationColor: cancelled ? originalColor : 'inherit'
                };
            },
        },
        methods: {
            edit: function() {
                this.$emit('edit', this.calendarEvent);
            }
        }
    }
</script>

<style scoped>
    a.del-button {
        cursor:pointer;
        display:block;
        position:absolute;
        float:left;
        left:3px;
        top:3px;
        width:16px;
        height:16px;
        /*display:none;*/
        background: url("/images/delete.png") no-repeat;
    }

    a.del-button:hover {
        background-position:0 -16px;
    }

    .course-id {
        font-size:11px;
        font-weight:bold;
        margin-bottom:5px;
    }

    .course-title {
        padding-left:5px;
        padding-right:5px;
        font-weight:bold;
    }

    .instructor {
        font-size:11px;
    }
</style>
