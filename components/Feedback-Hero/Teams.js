import React from "react";
import Link from "next/link";
import User from "./data/users.json";

function Teams({ title, members, index }) {
	return (
		<>
			<div className=" col-span-4 pt-6 pb-0 mb-0">
				<h2 className="mb-10 text-white text-2xl font-semibold md:mb-20 md:text-4xl">{title}</h2>
			</div>
			{members.map((data, index) => {
				const user = User.find((user) => user._id.$oid === data.$oid);
				return (
					<div
						key={index}
						className="member-card bg-blue rounded-md p-4"
						title={`${user.name} - ${user.position}`}
						data-aos={"fade-left"}
					>
						<Link href={user.linkedin}>
							<a target="_blank">
								<div className="avatar-div overflow-hidden rounded-md mb-4 mt-0 flex justify-center items-center bg-light-gray max-w-3xl w-60 m-0 h-60">
									<img src={user.image_url} alt={user.name} />
								</div>
								<div>
									<h2 className="text-white text-md font-semibold mb-1">{user.name}</h2>
									<h3 className="text-light-gray text-sm font-normal">{user.position}</h3>
								</div>
							</a>
						</Link>
					</div>
				);
			})}
		</>
	);
}

export default Teams;
