import React, { useCallback, useEffect, useState } from 'react'
import { SCHEDULE_API } from './constants';

export function useFetchSchedules(scheduleIds = []) {
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

const fetchSchedule = useCallback(() => {
    setLoading(true);
    return fetch(SCHEDULE_API)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSchedules(data.products);
            setLoading(false)
        })
        .catch(err => {
            setLoading(false);
            setError(err);
        })
}, [scheduleIds]);

useEffect(() => {
    fetchSchedule();
}, [])

  return ({
    schedules,
    error,
    loading,
    fetchSchedule,
  })
}
