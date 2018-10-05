<template>
    <div class="ds-event" :style="style" @click.stop="edit">
        <span v-if="showName">
          <span v-if="hasPrefix">
            {{ getPrefix }}
          </span>
          <strong>
            {{ calendarEvent.event.data.name }}
          </strong>
        </span>
        <div v-else>
            &nbsp;
        </div>
    </div>
</template>

<script>
    function brighten(color)
    {
        var match = /#(\w\w)(\w\w)(\w\w)/.exec(color);
        var pr = parseInt( match[1], 16 );
        var pg = parseInt( match[2], 16 );
        var pb = parseInt( match[3], 16 );
        var opacity = 0.5;
        var ar = 255;
        var ag = 255;
        var ab = 255;
        var r = ar + (pr - ar) * opacity;
        var g = ag + (pg - ag) * opacity;
        var b = ab + (pb - ab) * opacity;
        var hr = Math.min( 255, Math.floor(r) ).toString(16);
        var hg = Math.min( 255, Math.floor(g) ).toString(16);
        var hb = Math.min( 255, Math.floor(b) ).toString(16);
        return '#' +
            (hr.length === 1 ? '0' + hr : hr) +
            (hg.length === 1 ? '0' + hg : hg) +
            (hb.length === 1 ? '0' + hb : hb);
    }
    export default {
        name: "DS_Event",
        props: ['calendarEvent', 'index', 'calendar'],
        computed: {
            style: function() {
                var calendarEvent = this.calendarEvent;
                var now = this.$root.today;
                var past = calendarEvent.time.start.isBefore(now);
                var cancelled = calendarEvent.cancelled;
                var originalColor = calendarEvent.event.data.color;
                var color = originalColor;
                if (past || cancelled) {
                    color = brighten(color);
                }
                return {
                    position: 'relative',
                    top: ((calendarEvent.row - (this.index || 0)) * 19) + 'px',
                    backgroundColor: color,
                    marginLeft: calendarEvent.starting ? 0 : '-5px',
                    marginRight: calendarEvent.ending ? 0 : '-5px',
                    textDecoration: cancelled ? 'line-through' : 'inherit',
                    textDecorationColor: cancelled ? originalColor : 'inherit'
                };
            },
            sameDayEvents: function() {
                return this.calendarEvent.event.schedule.iterateSpans(this.calendarEvent.day, true).list();
            },
            hasPrefix: function() {
                return !this.calendarEvent.event.schedule.isFullDay() && this.sameDayEvents.length > 0;
            },
            getPrefix: function() {
                var same = this.sameDayEvents;
                return same.length === 1 ?
                    same[0].start.format('ha') :
                    '(' + same.length + ')';
            },
            showName: function() {
                return this.calendarEvent.starting || (this.calendar && !this.calendar.filled.contains( this.calendarEvent.time.start ));
            }
        },
        methods: {
            edit: function() {
                this.$emit('edit', this.calendarEvent);
            }
        }
    }
</script>

<style scoped>

</style>
