const DateUtils = {}

DateUtils.MIL_PER_SEC = 1000

DateUtils.SEC_PER_MIN = 60
DateUtils.MIL_PER_MIN = DateUtils.MIL_PER_SEC * DateUtils.SEC_PER_MIN

DateUtils.MIN_PER_HOU = 60
DateUtils.SEC_PER_HOU = DateUtils.SEC_PER_MIN * DateUtils.MIN_PER_HOU
DateUtils.MIL_PER_HOU = DateUtils.MIL_PER_MIN * DateUtils.MIN_PER_HOU

DateUtils.HOU_PER_DAY = 24
DateUtils.MIN_PER_DAY = DateUtils.MIN_PER_HOU * DateUtils.HOU_PER_DAY
DateUtils.SEC_PER_DAY = DateUtils.SEC_PER_HOU * DateUtils.HOU_PER_DAY
DateUtils.MIL_PER_DAY = DateUtils.MIL_PER_HOU * DateUtils.HOU_PER_DAY

DateUtils.durationToHumanTime = function (duration) {
  return {
    millis: duration % DateUtils.MIL_PER_SEC,
    seconds: Math.floor(duration / DateUtils.MIL_PER_SEC) % DateUtils.SEC_PER_MIN,
    minutes: Math.floor(duration / DateUtils.MIL_PER_MIN) % DateUtils.MIN_PER_HOU,
    hours: Math.floor(duration / DateUtils.MIL_PER_HOU)
  }
}

DateUtils.logTime = function (value) {
  return `${value < 10 ? '0' : ''}${value}`
}

export default DateUtils
