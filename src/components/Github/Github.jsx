import React, { use, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/MehediHasanRapiIIT')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })

    // }, [])
  return (
    <div
    className='bg-gray-700 text-white text-3xl p-4'
    >Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export const gitHubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/MehediHasanRapiIIT');
    return res.json();
}

