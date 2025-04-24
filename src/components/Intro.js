import React from "react";

export default function Intro() {
	return (
		<section className="intro" id="home">
			<h1 className="section__title section__title--intro">
				Hi, I am <strong>Jakub Sornat</strong>
			</h1>
			<p className="section__subtitle section__subtitle--intro">
				Aspiring Software Developer
			</p>
			<img
				src="https://media.licdn.com/dms/image/v2/D4D03AQED-IGUl09-rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681250370389?e=1750896000&v=beta&t=69V0QYJXtSQYZ832ty7ZQZPtPZ5gvj6IW83nzQjZsYc"
				alt="Me"
				className="intro__img"
			/>
		</section>
	);
}
