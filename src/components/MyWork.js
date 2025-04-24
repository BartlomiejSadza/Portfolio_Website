import React from "react";

export default function MyWork() {
	const projects = [
		{
			title: "Expense Tracker Django App",
			year: "2025",
			description: [
				"Created a personal finance tracking app in Django with SQLite backend.",
				"Added features for category management, filtering, sorting, and financial summaries.",
				"Designed a responsive UI using Bootstrap.",
			],
		},
		{
			title: "Flights Management API",
			year: "2024",
			description: [
				"Built RESTful API using ASP.NET Core and .NET 8.",
				"Implemented CRUD operations, JWT authentication, and input validation.",
				"Handled database logic with Entity Framework and SQL Server.",
			],
		},
		{
			title: "SuperFarmer",
			year: "2024",
			description: [
				"Developed game logic based on a popular board game using .NET Core.",
				"Implemented dice rolling, animal trading, and predator attack mechanics.",
			],
		},
	];

	return (
		<>
			<section className="my-work" id="work">
				<h2 className="section__title section__title--work">My Projects</h2>
				<p className="section__subtitle section__subtitle--work">
					Selected portfolio of my work
				</p>

				<div className="projects-list">
					{projects.map((project, index) => (
						<div className="project-item" key={project.title}>
							<div className="project-header">
								<h3 className="project-title">{project.title}</h3>
								<span className="project-year">{project.year}</span>
							</div>
							<ul className="project-description">
								{project.description.map((item, i) => (
									<li className="project-description-item" key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
