import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function GitHub() {
    const [data, setData] = useState({}); 

    useEffect(() => {
        fetch("https://api.github.com/users/DevHanzala")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <>
            <div className="text-center p-5 text-white m-2 font-mono">
                <h1 className="text-2xl font-bold">
                    {data.name} (@{data.login})
                </h1>
                <img
                    src={data.avatar_url}
                    alt={`${data.login}'s avatar`}
                    className="mx-auto my-4 rounded-full w-32 h-32"
                />
                <p className="text-lg">{data.bio}</p>
                <p className="mt-2">
                    <strong>Location:</strong> Karachi,Pakistan
                </p>
                <p className="mt-2">
                    <strong>Public Repositories:</strong> {data.public_repos}
                </p>
                <p className="mt-2">
                    <strong>Followers:</strong> {data.followers}
                </p>
                <p className="mt-2">
                    <strong>Following:</strong> {data.following}
                </p>
                   <Link
                            to={data.html_url}
                            className="inline-block mt-4 px-4 py-2 bg-orange-700 text-white rounded"
                        >
                            View Github Profile
                        </Link>
            </div>
        </>
    );
}

export default GitHub;
