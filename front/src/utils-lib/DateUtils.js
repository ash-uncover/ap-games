let DateUtils = {
    durationToHumanTime: function(duration) {
        return {
            millis: duration % 1000,
            seconds: Math.floor(duration / 1000) % 60,
            minutes: Math.floor(duration / 60000) % 60,
            hours: Math.floor(duration / 3600000)
        }
    }
}
export default DateUtils