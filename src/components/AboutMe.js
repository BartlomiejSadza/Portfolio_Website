import React from "react";

export default function AboutMe() {
	return (
		<section className="about-me" id="about">
			<h2 className="section__title section__title--about">Who I am</h2>
			<p className="section__subtitle section__subtitle--about">
				Student of "CS and Econometrics" at AGH University of Science and
				Technology
			</p>

			<div className="about-me__body">
				<p>
					First-year Master's student at AGH, combining strong programming
					skills (C#, Python) with web development experience (.NET, HTML, CSS,
					JS) and expertise in database management (SQL). Seeking a position to
					apply skills in software development while continuing professional
					growth. Open to new challenges, with a future focus on backend
					development or full-stack programming.
				</p>
				<p>
					When I’m not deep into coding, you’ll (sometimes 😆) find me at the
					gym, exploring the world of investing, or reading a good book. I love
					staying curious, constantly learning, and pushing myself to grow. I’m
					never shy away from a great party! 💃
				</p>
				<p>
					With a knack for leadership, teamwork, and managing risk, I thrive in
					challenging environments.
				</p>
			</div>

			<img
				src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/242124824_1827384257446364_1394214099075847432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kkskktaT2JEQ7kNvwHVuIeC&_nc_oc=AdlPsuu0EiRMaYXOGDrW-JbEt2nUxQtL0ipi-My-OE7pyY1BkCf1R3Fy3qiSsfYMnTuFicx3OoKo4Exp-zCs48ol&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=FuUzGv9JzuyYImdEW-k0hA&oh=00_AfH51t4xQvULlEI3DR12w_sZ5Kh1s96AKFqZXkFuv0LLDg&oe=680FF9DD"
				alt="Me and my 7yo sister"
				className="about-me__img"
			/>
		</section>
	);
}
