<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# Wood Shop Frontend

<em>Empowering creativity through sustainable wooden toys.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/HoDoHoangKhang/woodshop_fe?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/HoDoHoangKhang/woodshop_fe?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/HoDoHoangKhang/woodshop_fe?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/HoDoHoangKhang/woodshop_fe?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=Yarn&logoColor=white" alt="Yarn">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat&logo=CSS&logoColor=white" alt="CSS">

</div>
<br>

---

## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#-installation)
    - [Usage](#-usage)
    - [Testing](#-testing)
- [Features](#-features)
- [Project Structure](#-project-structure)
    - [Project Index](#-project-index)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Overview

**woodshop_fe** is a dynamic web application designed to enhance the e-commerce experience for wooden toys, combining robust architecture with user-friendly features.

This project aims to streamline the development of engaging e-commerce platforms. The core features include:

- 🎨 **Dynamic Content Management:** Effortlessly manage product listings and user interactions for a seamless shopping experience.
- 🔗 **Seamless Integration with Strapi:** Simplifies backend interactions, allowing for efficient data retrieval and manipulation.
- 📱 **Responsive Design with Tailwind CSS:** Ensures a visually appealing and consistent user interface across all devices.
- ⚙️ **Robust State Management:** Utilizes React context and hooks for efficient state handling, enhancing performance and maintainability.
- 📦 **Custom Hooks for Data Fetching:** Streamlines API interactions, making asynchronous data management a breeze.
- 🔒 **User Authentication and Cart Management:** Provides a secure and user-friendly experience for managing user sessions and shopping carts.

---

## 📌 Features
- 🛍️ **Product Browsing**: View products by category, popularity, or search.
- 🔍 **Advanced Search & Filter**: Quickly find products by name, price range, rating, etc.
- 📄 **Product Details**: See full product info, images, price, and availability.
- 🛒 **Shopping Cart**: Add, remove, and update items with live total price calculation.
- 🧾 **Checkout Process**: Clean and guided UI for reviewing orders before purchase.
- 🔐 **User Authentication**: Sign up, login, and manage secure user sessions.
- 📦 **Order History**: View past purchases and track order status.
- 🌐 **Responsive Design**: Seamless experience across desktop, tablet, and mobile.
- ⚡ **Fast & Optimized**: Built with React and Tailwind for performance and UI flexibility.

---

## 📁 Project Structure

```sh
└── woodshop_fe/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── note.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── images
    │   └── logo.png
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   ├── config
    │   ├── context
    │   ├── hooks
    │   ├── index.css
    │   ├── layouts
    │   ├── libs
    │   ├── main.jsx
    │   ├── pages
    │   ├── providers
    │   ├── routes
    │   ├── services
    │   ├── stores
    │   └── styles
    ├── tailwind.config.js
    ├── vite.config.js
    └── yarn.lock
```

---

### 📑 Project Index

<details open>
	<summary><b><code>WOODSHOP_FE/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/index.html'>index.html</a></b></td>
					<td style='padding: 8px;'>- Serves as the foundational entry point for the Good For Stem web application, establishing the essential HTML structure and linking necessary resources<br>- It sets up the document's metadata, integrates a custom font for styling, and designates a root element for dynamic content rendering<br>- Additionally, it incorporates a JavaScript module to manage application logic, ensuring a cohesive user experience within the overall codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the configuration and dependencies for the movie-app project, facilitating the development and build processes<br>- It establishes essential scripts for development, linting, and previewing the application, while integrating key libraries for React, state management, and styling<br>- This setup ensures a streamlined workflow and a robust foundation for building a dynamic movie application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures Tailwind CSS for the project by specifying the content sources and extending the default theme<br>- It integrates the Roboto Slab font into the design, enhancing typography options<br>- This setup ensures that the styling framework is tailored to the specific needs of the application, promoting a cohesive and visually appealing user interface across all components.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/vite.config.js'>vite.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures the Vite development environment for a React application, integrating Tailwind CSS for styling<br>- It establishes essential plugins to enhance the development experience and sets the server to run on port 3000<br>- This setup streamlines the build process and optimizes the workflow, ensuring a cohesive architecture that supports rapid development and efficient styling within the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- Movie App## OverviewThe <code>package-lock.json</code> file is a crucial component of the Movie App project, which serves as a comprehensive tool for managing movie-related data and user interactions<br>- This file ensures that the application maintains consistent and reliable dependencies across different environments by locking the versions of all installed packages.## PurposeThe primary purpose of the <code>package-lock.json</code> file is to provide a detailed snapshot of the project's dependency tree, including the specific versions of libraries and packages used<br>- This guarantees that every developer working on the project, as well as the production environment, will use the exact same versions of dependencies, thereby minimizing the risk of compatibility issues and bugs.## Project Architecture ContextIn the context of the overall architecture of the Movie App, the <code>package-lock.json</code> file plays a vital role in supporting the front-end framework built with React, along with various libraries such as React Router for navigation, React Query for data fetching, and Tailwind CSS for styling<br>- By ensuring that all dependencies are correctly resolved and locked, this file contributes to the stability and maintainability of the application, allowing developers to focus on building features and enhancing user experience without worrying about dependency conflicts<br>- In summary, the <code>package-lock.json</code> file is essential for the integrity and reliability of the Movie App, facilitating a smooth development process and a robust application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures ESLint for a JavaScript and React project, ensuring code quality and consistency across the codebase<br>- It establishes rules and settings tailored for modern ECMAScript features and React version 18.3, while integrating plugins for enhanced linting capabilities<br>- By ignoring specific directories and applying recommended practices, it streamlines the development process and promotes best practices in coding standards.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/App.jsx'>App.jsx</a></b></td>
					<td style='padding: 8px;'>- App serves as the central component of the application, orchestrating various providers to manage state and context across the user interface<br>- It integrates routing functionality, enabling navigation through public routes while ensuring that essential services like authentication, cart management, and toast notifications are readily available<br>- This structure enhances user experience by providing a cohesive and responsive environment for interacting with the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/index.css'>index.css</a></b></td>
					<td style='padding: 8px;'>- Stylesheet establishes a cohesive visual identity for the project by integrating Tailwind CSS and defining essential design elements such as typography, colors, and layout<br>- It enhances user experience through responsive button styles, product and category card designs, and custom scrollbar aesthetics<br>- Additionally, it incorporates animations and hover effects to create an engaging interface, ensuring a polished and modern look throughout the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/main.jsx'>main.jsx</a></b></td>
					<td style='padding: 8px;'>- Initializes the React application by rendering the main App component within a strict mode environment, ensuring adherence to best practices<br>- Integrates the HelmetProvider for managing document head elements, enhancing SEO and accessibility<br>- This setup serves as the entry point for the application, establishing a structured foundation for the overall codebase architecture and user experience.</td>
				</tr>
			</table>
			<!-- libs Submodule -->
			<details>
				<summary><b>libs</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.libs</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/libs/query-client.js'>query-client.js</a></b></td>
							<td style='padding: 8px;'>- Establishes a centralized query client for managing data fetching and caching within the application<br>- By configuring default options for query behavior and dehydration, it enhances performance and user experience<br>- This component plays a crucial role in the overall architecture by ensuring efficient data handling and synchronization across the application, particularly in a browser environment.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/libs/strapi-sdk.js'>strapi-sdk.js</a></b></td>
							<td style='padding: 8px;'>- Establishes a connection to the Strapi backend by configuring the Strapi SDK with the appropriate API URL and authentication settings<br>- It facilitates seamless interaction with the backend services, ensuring that JWT tokens are managed effectively for user sessions<br>- This integration plays a crucial role in the overall architecture by enabling data retrieval and manipulation within the application.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- routes Submodule -->
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.routes</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/routes/index.jsx'>index.jsx</a></b></td>
							<td style='padding: 8px;'>- Defines the routing structure for the application, mapping various paths to their corresponding components<br>- It facilitates navigation between key pages such as Home, About, Products, and user authentication routes, enhancing user experience<br>- By organizing public and private routes, it establishes a clear framework for managing access to different sections of the application, ensuring a seamless flow throughout the user interface.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- styles Submodule -->
			<details>
				<summary><b>styles</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.styles</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/styles/slick-custom.css'>slick-custom.css</a></b></td>
							<td style='padding: 8px;'>- Customizes the appearance and behavior of navigation buttons for the slick carousel within the thumbnail slider component<br>- Enhancements include specific dimensions, background colors, hover effects, and visibility controls, ensuring a visually appealing and user-friendly interface<br>- This styling contributes to the overall aesthetic coherence of the project, improving user interaction with the carousel feature.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- components Submodule -->
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.components</b></code>
					<!-- home Submodule -->
					<details>
						<summary><b>home</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.home</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/Categories.jsx'>Categories.jsx</a></b></td>
									<td style='padding: 8px;'>- Categories component serves as a dynamic display of product categories within the application, enhancing user navigation and engagement<br>- By showcasing various categories such as toys, household items, office accessories, and promotions, it provides a visually appealing interface that encourages users to explore different sections of the site<br>- This component plays a crucial role in organizing content and improving the overall user experience in the codebase architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/Services.jsx'>Services.jsx</a></b></td>
									<td style='padding: 8px;'>- Services component showcases key offerings of the application, presenting essential information such as return policies, nationwide delivery, and 24/7 customer support<br>- By utilizing ServiceCard components, it effectively organizes and displays these services in a visually appealing grid layout, enhancing user engagement and providing clarity on the value propositions available to customers<br>- This contributes to the overall user experience within the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/ProductSection.jsx'>ProductSection.jsx</a></b></td>
									<td style='padding: 8px;'>- ProductSection serves as a dynamic component within the codebase, designed to showcase a curated selection of products<br>- It efficiently displays product cards based on provided data, allowing users to add items to their cart and view discounts<br>- Additionally, it offers a link for users to explore more products, enhancing the overall shopping experience and contributing to the projects goal of creating an engaging e-commerce platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/Promotion.jsx'>Promotion.jsx</a></b></td>
									<td style='padding: 8px;'>- Promotion component enhances the user experience by showcasing special offers through an engaging slider interface<br>- It features a countdown timer that dynamically updates, creating urgency for promotions<br>- The layout is designed to highlight discounted products, encouraging user interaction with a clear call-to-action link for more details<br>- This component plays a crucial role in driving sales and user engagement within the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/Hero.jsx'>Hero.jsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a visually engaging hero section for the homepage, designed to capture user attention and convey the brands message<br>- Featuring a prominent image and a compelling call-to-action button, it encourages visitors to explore the product offerings<br>- This component plays a crucial role in enhancing user experience and driving engagement within the overall project architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/Testimonial.jsx'>Testimonial.jsx</a></b></td>
									<td style='padding: 8px;'>- Showcasing customer satisfaction, the Testimonial component enhances the user experience by presenting a heartfelt endorsement from the CEO of Chàng Trai Gỗ<br>- It emphasizes the brands commitment to natural wooden toys, fostering creativity and joy in children<br>- Positioned within the home section of the application, this component contributes to building trust and connection with potential customers, reinforcing the brands values and mission.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/home/Activities.jsx'>Activities.jsx</a></b></td>
									<td style='padding: 8px;'>- Showcases a collection of engaging activities aimed at children, emphasizing the benefits of wooden toys for cognitive and creative development<br>- By presenting a visually appealing grid of activity cards, it enhances user interaction and promotes sustainable practices within the wooden toy industry<br>- This component plays a crucial role in the overall architecture by enriching the home page with informative content that aligns with the projects mission.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- common Submodule -->
					<details>
						<summary><b>common</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.common</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/common/Pagination.jsx'>Pagination.jsx</a></b></td>
									<td style='padding: 8px;'>- Pagination component facilitates user navigation through multiple pages of content within the application<br>- By providing buttons for previous, next, and individual page numbers, it enhances the user experience by allowing seamless transitions between pages<br>- This component plays a crucial role in managing content display, ensuring that users can easily access and interact with large datasets in an organized manner.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- layout Submodule -->
					<details>
						<summary><b>layout</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.layout</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/layout/Footer.jsx'>Footer.jsx</a></b></td>
									<td style='padding: 8px;'>- Footer component enhances the user experience by providing essential information and navigation options at the bottom of the application<br>- It features company details, customer service links, product collections, and social media connections, fostering engagement and accessibility<br>- Additionally, it includes a subscription form for promotional updates, reinforcing the brands commitment to customer interaction and support within the overall project architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/layout/Header.jsx'>Header.jsx</a></b></td>
									<td style='padding: 8px;'>The component utilizes <code>react-router-dom</code> to facilitate smooth navigation between different parts of the application, enhancing user experience.-<strong>Authentication StatusIt checks the user's authentication status, allowing for dynamic rendering of navigation options based on whether the user is logged in or not.-</strong>Cart IntegrationThe component displays the total number of items in the user's cart, keeping users informed about their shopping activity.-**Responsive DesignIt includes a scroll detection feature that modifies the header's appearance based on the user's scroll position, contributing to a more engaging and interactive interface.### PurposeOverall, the <code>Header</code> component plays a vital role in maintaining a cohesive and user-friendly navigation experience within the application, aligning with the projects goal of providing an intuitive and accessible platform for users.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- ui Submodule -->
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.components.ui</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/ui/Button.jsx'>Button.jsx</a></b></td>
									<td style='padding: 8px;'>- Button component serves as a versatile UI element within the project, enabling users to trigger actions through various styles and sizes<br>- It supports customization through props for different visual variants, sizes, and states, ensuring a consistent and accessible user experience<br>- By integrating seamlessly into the overall architecture, it enhances the applications interactivity and aesthetic appeal, aligning with the projects design principles.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/ui/ActivityCard.jsx'>ActivityCard.jsx</a></b></td>
									<td style='padding: 8px;'>- ActivityCard serves as a reusable UI component that showcases individual activities within the application<br>- It presents an image, title, and description, along with a link for users to explore further details<br>- By integrating seamlessly into the overall project architecture, this component enhances user engagement and navigation, contributing to a cohesive and visually appealing interface.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/ui/ProductCard.jsx'>ProductCard.jsx</a></b></td>
									<td style='padding: 8px;'>- ProductCard serves as a dynamic component within the user interface, showcasing individual product details in an engaging manner<br>- It enhances the shopping experience by displaying product images, prices, and discounts, while providing interactive features such as hover effects and action buttons for adding items to the cart or viewing details<br>- This component seamlessly integrates into the overall architecture, facilitating user navigation and interaction within the e-commerce platform.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/ui/SectionTitle.jsx'>SectionTitle.jsx</a></b></td>
									<td style='padding: 8px;'>- Defines a reusable SectionTitle component that enhances the user interface by presenting section headings in a visually appealing manner<br>- It emphasizes the title with bold typography and a decorative underline, contributing to the overall aesthetic and structure of the application<br>- This component plays a crucial role in maintaining consistency and clarity across different sections of the user interface within the project.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/ui/CategoryCard.jsx'>CategoryCard.jsx</a></b></td>
									<td style='padding: 8px;'>- CategoryCard serves as a reusable UI component that displays a category with an image and title, enhancing user engagement through a visually appealing layout<br>- It allows for flexible positioning of the image and text, accommodating different design preferences<br>- By integrating navigation links, it facilitates seamless transitions to related content, contributing to a cohesive user experience within the broader application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/components/ui/ServiceCard.jsx'>ServiceCard.jsx</a></b></td>
									<td style='padding: 8px;'>- ServiceCard serves as a reusable UI component designed to display service offerings within the application<br>- By encapsulating the presentation of an icon, title, and description, it enhances the visual consistency and user experience across the platform<br>- This component plays a crucial role in the overall architecture by promoting modularity and maintainability, allowing for easy integration and updates within the broader codebase.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- services Submodule -->
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.services</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/services/api.js'>api.js</a></b></td>
							<td style='padding: 8px;'>- API service module facilitates interaction with a mock e-commerce API, enabling the retrieval of product listings, individual product details, category-specific products, and user authentication functionalities<br>- It streamlines data fetching processes, ensuring error handling for various operations such as product fetching, user login, and registration, thereby enhancing the overall user experience within the application architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- config Submodule -->
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.config</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/config/env.js'>env.js</a></b></td>
							<td style='padding: 8px;'>- Defines the configuration settings for the application, specifically the backend URL<br>- By utilizing environment variables, it ensures flexibility in connecting to different backend services, whether in development or production environments<br>- This approach enhances the overall architecture by promoting adaptability and ease of deployment across various stages of the development lifecycle.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- hooks Submodule -->
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.hooks</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/useToast.js'>useToast.js</a></b></td>
							<td style='padding: 8px;'>- Provides a custom hook for managing toast notifications within the application<br>- It facilitates the display of success, error, and informational messages in a user-friendly manner, enhancing user experience by delivering timely feedback<br>- Positioned at the bottom-right of the screen, these notifications are designed to be easily dismissible and configurable, contributing to a cohesive and interactive interface across the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/useFetch.js'>useFetch.js</a></b></td>
							<td style='padding: 8px;'>- Facilitates data fetching in a React application by providing a custom hook that manages the loading state, error handling, and response data<br>- This hook streamlines the process of making API calls, ensuring that components can easily access and display data while handling potential errors gracefully<br>- It enhances the overall architecture by promoting reusable and maintainable code for asynchronous data operations.</td>
						</tr>
					</table>
					<!-- posts Submodule -->
					<details>
						<summary><b>posts</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.hooks.posts</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/posts/use-get-posts.js'>use-get-posts.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates the retrieval of posts from a Strapi backend using React Query<br>- It allows for customizable queries by accepting parameters such as fields, filters, pagination, and sorting options<br>- This hook enhances the overall architecture by providing a streamlined way to manage data fetching and state management for posts, ensuring efficient and flexible integration within the application.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- auth Submodule -->
					<details>
						<summary><b>auth</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.hooks.auth</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/auth/use-me.js'>use-me.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates user data retrieval by leveraging React Query to fetch user information from the Strapi backend<br>- This hook enhances the overall architecture by providing a streamlined way to access and manage user state within the application, ensuring that components can efficiently react to changes in user data while maintaining a clean separation of concerns.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/auth/use-register.js'>use-register.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by providing a custom hook that leverages React Query for managing asynchronous requests<br>- It interacts with the Strapi backend to create new user accounts, ensuring a streamlined process for user onboarding within the application<br>- This functionality integrates seamlessly into the broader architecture, enhancing user management capabilities across the codebase.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/auth/use-login.js'>use-login.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates user authentication by providing a reusable hook for login functionality within the application<br>- It leverages the Strapi SDK to handle login requests, integrating seamlessly with the broader codebase architecture<br>- This hook enhances the user experience by managing authentication state and error handling, allowing developers to implement login features efficiently across various components.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- tags Submodule -->
					<details>
						<summary><b>tags</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.hooks.tags</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/tags/use-get-tags.js'>use-get-tags.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates the retrieval of tags from a Strapi backend using React Query<br>- It allows for customizable queries through parameters such as fields, filters, pagination, and sorting, ensuring flexibility in data fetching<br>- This hook integrates seamlessly into the broader codebase, enhancing the applications ability to manage and display tags efficiently while maintaining optimal performance and user experience.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- categories Submodule -->
					<details>
						<summary><b>categories</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.hooks.categories</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/categories/use-get-categories.js'>use-get-categories.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates the retrieval of category data from a Strapi backend using React Query<br>- By providing customizable parameters such as fields, filters, and pagination, it enhances the flexibility of data fetching within the application<br>- This hook integrates seamlessly into the broader codebase architecture, enabling efficient management and display of category information throughout the user interface.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- products Submodule -->
					<details>
						<summary><b>products</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.hooks.products</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/hooks/products/use-get-products.js'>use-get-products.js</a></b></td>
									<td style='padding: 8px;'>- Facilitates the retrieval of product data from a Strapi backend using React Query<br>- By allowing customizable parameters such as fields, filters, and pagination, it enhances the flexibility of data fetching within the application<br>- This hook integrates seamlessly into the broader codebase architecture, promoting efficient data management and state handling for product-related features.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- layouts Submodule -->
			<details>
				<summary><b>layouts</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.layouts</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/layouts/MainLayout.jsx'>MainLayout.jsx</a></b></td>
							<td style='padding: 8px;'>- MainLayout serves as a foundational component for the application, providing a consistent structure that includes a header, a dynamic main content area, and a footer<br>- It ensures that the main content is appropriately padded based on the headers height, enhancing the user experience across different screen sizes<br>- This layout facilitates the seamless integration of various child components, promoting a cohesive design throughout the project.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- stores Submodule -->
			<details>
				<summary><b>stores</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.stores</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/stores/use-authentication.js'>use-authentication.js</a></b></td>
							<td style='padding: 8px;'>- Provides a state management solution for user authentication within the application<br>- It enables tracking of authentication status and user information, facilitating user login, logout, and state updates<br>- This functionality is essential for maintaining secure access and personalized experiences across the codebase, ensuring that user sessions are effectively managed throughout the application.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- providers Submodule -->
			<details>
				<summary><b>providers</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.providers</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/providers/toast.provider.jsx'>toast.provider.jsx</a></b></td>
							<td style='padding: 8px;'>- Facilitates the integration of toast notifications within the application by providing a dedicated ToastProvider component<br>- This component wraps around child elements, ensuring that toast notifications are displayed consistently throughout the app<br>- By leveraging the React Toastify library, it enhances user experience through timely feedback and alerts, contributing to the overall architectures responsiveness and interactivity.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/providers/auth-provider.jsx'>auth-provider.jsx</a></b></td>
							<td style='padding: 8px;'>- AuthProvider serves as a crucial component in the projects architecture, managing user authentication by leveraging hooks to retrieve user data and handle authentication state<br>- It ensures that once user data is available, the authentication process is triggered, thereby maintaining a seamless user experience<br>- This component acts as a wrapper for child components, enabling them to access authenticated user context effectively.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- pages Submodule -->
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.pages</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/Blog.jsx'>Blog.jsx</a></b></td>
							<td style='padding: 8px;'>Utilizes custom hooks to fetch blog posts and tags, ensuring that the content is always up-to-date and relevant.-<strong>User NavigationIncorporates routing capabilities through <code>react-router-dom</code>, enabling seamless navigation between different blog entries.-</strong>Structured LayoutLeverages a main layout component to maintain a consistent design across the application, enhancing usability and aesthetic appeal.-**Pagination SupportImplements pagination to manage the display of blog posts, allowing users to easily navigate through multiple pages of content.Overall, the <code>Blog.jsx</code> component is essential for delivering a rich blogging experience, contributing to the overall functionality and user engagement of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/Products.jsx'>Products.jsx</a></b></td>
							<td style='padding: 8px;'>- Displays a comprehensive product listing page that allows users to search and filter products by category<br>- Integrating with backend services, it fetches product and category data, enabling dynamic updates based on user input<br>- The layout includes pagination for easy navigation and a responsive design, enhancing user experience while showcasing a collection of high-quality wooden toys.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/Cart.jsx'>Cart.jsx</a></b></td>
							<td style='padding: 8px;'>- Cart component facilitates the management of a shopping cart within the application, allowing users to view, update, and remove items<br>- It displays a summary of selected products, including total items and amounts, while providing options to clear the cart or proceed to checkout<br>- The component enhances user experience by integrating seamlessly with the overall layout and navigation of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/BlogDetail.jsx'>BlogDetail.jsx</a></b></td>
							<td style='padding: 8px;'>- BlogDetail component serves as a detailed view for individual blog posts within the application<br>- It retrieves and displays the selected posts content, including its title, image, and associated tags, while also suggesting related posts based on shared tags<br>- The component enhances user engagement by providing navigation options and social sharing features, all within a structured layout that maintains consistency across the platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/ProductDetail.jsx'>ProductDetail.jsx</a></b></td>
							<td style='padding: 8px;'>- ProductDetail component serves as a detailed view for individual products within the application<br>- It fetches product information, displays images and descriptions, and allows users to adjust quantities and add items to their cart<br>- Additionally, it showcases related products, enhancing user engagement and facilitating navigation<br>- The component integrates seamlessly with the overall architecture, providing a rich user experience in the e-commerce platform.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/Contact.jsx'>Contact.jsx</a></b></td>
							<td style='padding: 8px;'>- Contact component facilitates user interaction by providing a structured contact form and essential company information<br>- It allows users to submit their inquiries, ensuring a seamless communication channel with the organization<br>- Additionally, it enhances the user experience by integrating a layout that presents contact details, including location and hotline numbers, all within a visually appealing interface<br>- This component plays a crucial role in connecting users with the company effectively.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/SocialResponsibility.jsx'>SocialResponsibility.jsx</a></b></td>
							<td style='padding: 8px;'>- Showcases the Social Responsibility initiative of STEM4GOOD, emphasizing the commitment to education and community support<br>- It highlights the campaign Gỗ đến biên cương, detailing contributions from product sales to fund scholarships and STEM learning spaces for underprivileged children<br>- The page encourages community involvement and illustrates the broader mission of creating educational opportunities through engaging content and visuals.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/Home.jsx'>Home.jsx</a></b></td>
							<td style='padding: 8px;'>- Facilitates the rendering of the home page within the application, showcasing key components such as promotional sections, product categories, and user testimonials<br>- It manages data fetching for products and categories, handles loading states and errors, and integrates user authentication and cart functionalities<br>- This structure enhances user engagement by presenting a dynamic and visually appealing interface that promotes featured products and services.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/About.jsx'>About.jsx</a></b></td>
							<td style='padding: 8px;'>- About Page Component## SummaryThe <code>About.jsx</code> file serves as a dedicated component within the project, designed to present the About Us section of the application<br>- This component plays a crucial role in enhancing user engagement by providing visitors with insights into the mission and objectives of Chàng Trai Gỗ<br>- It utilizes the <code>MainLayout</code> to ensure a consistent look and feel across the application, while the <code>Helmet</code> component is employed to manage the document head, optimizing the page for search engines with relevant metadata.The inclusion of a breadcrumb navigation enhances user experience by allowing easy navigation back to the homepage, thereby improving the overall usability of the site<br>- This component is integral to the projects architecture, as it not only informs users but also reinforces the brand's identity and values, contributing to a cohesive user journey throughout the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/Checkout.jsx'>Checkout.jsx</a></b></td>
							<td style='padding: 8px;'>Collects and manages user information through a form.-<strong>Discount Code ValidationSimulates the application of discount codes to provide users with potential savings.-</strong>Order SubmissionPrepares the order data for submission, which can be integrated with backend services for processing.By encapsulating these functionalities, the <code>Checkout</code> component plays a vital role in converting potential sales into completed transactions, thereby contributing to the overall success of the e-commerce platform.</td>
						</tr>
					</table>
					<!-- auth Submodule -->
					<details>
						<summary><b>auth</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.pages.auth</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/auth/RegisterPage.jsx'>RegisterPage.jsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates user registration by providing a form that captures essential user details such as full name, email, and password<br>- Integrates validation to ensure data integrity and utilizes hooks for managing registration logic and navigation<br>- Upon successful registration, users are redirected to the login page, enhancing the overall user experience within the authentication flow of the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/pages/auth/LoginPage.jsx'>LoginPage.jsx</a></b></td>
									<td style='padding: 8px;'>- LoginPage component facilitates user authentication by providing a user-friendly interface for logging in<br>- It incorporates form validation and error handling, ensuring a smooth experience for users<br>- Upon successful login, it navigates to the home page and displays success messages, while also managing authentication state<br>- This component plays a crucial role in the overall architecture by enabling secure access to the application’s features.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- context Submodule -->
			<details>
				<summary><b>context</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.context</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/HoDoHoangKhang/woodshop_fe/blob/master/src/context/CartContext.jsx'>CartContext.jsx</a></b></td>
							<td style='padding: 8px;'>- CartContext provides a centralized state management solution for handling shopping cart functionality within the application<br>- It enables the addition, removal, and updating of cart items while maintaining a synchronized state with local storage<br>- By utilizing Reacts context and reducer hooks, it facilitates easy access to cart data and actions throughout the component tree, enhancing the overall user experience in managing their shopping cart.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm, Yarn

### ⚙️ Installation

Build woodshop_fe from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/HoDoHoangKhang/woodshop_fe
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd woodshop_fe
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```
**Using [yarn](https://yarnpkg.com/):**

```sh
❯ yarn install
```

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```
**Using [yarn](https://yarnpkg.com/):**

```sh
yarn start
```

### 🧪 Testing

Woodshop_fe uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```
**Using [yarn](https://yarnpkg.com/):**

```sh
yarn test
```

---

## 🤝 Contributing

- **💬 [Join the Discussions](https://github.com/HoDoHoangKhang/woodshop_fe/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/HoDoHoangKhang/woodshop_fe/issues)**: Submit bugs found or log feature requests for the `woodshop_fe` project.
- **💡 [Submit Pull Requests](https://github.com/HoDoHoangKhang/woodshop_fe/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/HoDoHoangKhang/woodshop_fe
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/HoDoHoangKhang/woodshop_fe/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=HoDoHoangKhang/woodshop_fe">
   </a>
</p>
</details>

---

## 📜 License

Woodshop_fe is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.
