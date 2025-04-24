import React from "react";

export default function Footer() {
	return (
		<footer className="footer">
			<a href="mailto:jakubsornat2001@gmail.com" className="footer__link">
				jakubsornat2001@gmail.com
			</a>
			<ul className="social-list">
				<li className="social-list__item">
					<a
						className="social-list__link"
						href="https://www.linkedin.com/in/jakub-sornat/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin" />
					</a>
				</li>
				<li className="social-list__item">
					<a
						className="social-list__link"
						href="https://github.com/Sornat11"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-github" />
					</a>
				</li>
				<li className="social-list__item">
					<a
						className="social-list__link"
						href="https://www.facebook.com/kuba.sornat"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-facebook" />
					</a>
				</li>
			</ul>
		</footer>
	);
}
