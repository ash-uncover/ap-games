
export const STOPWATCH_START = 'STOPWATCH_START'
export const stopwatchStart = () => {
    return {
        type: STOPWATCH_START
    }
}

export const STOPWATCH_PAUSE = 'STOPWATCH_PAUSE'
export const stopwatchPause = () => {
    return {
        type: STOPWATCH_PAUSE
    }
}

export const STOPWATCH_RESUME = 'STOPWATCH_RESUME'
export const stopwatchResume = () => {
    return {
        type: STOPWATCH_RESUME
    }
}

export const STOPWATCH_STOP = 'STOPWATCH_STOP'
export const stopwatchStop = () => {
    return {
        type: STOPWATCH_STOP
    }
}