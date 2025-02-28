import { Helmet } from "react-helmet-async";
import aboutImage from "../assets/images/AnonnoAbout.jpg";

const About = () => {
  return (
    <div className="flex gap-20 mt-16 relative">
      <Helmet>
        <title>Anonno | About</title>
      </Helmet>
      <div className="items-center">
        <img
          className="aspect-auto rounded-lg sticky top-40"
          src={aboutImage}
          alt="AboutImage"
        />
      </div>
      <div className="space-y-12">
        <div className="opacity: 1; transform: none;">
          <h3 className="text-4xl font-bold font-mono text-fuchsia-700 mb-2">
            Hi!
          </h3>
          <p className=" mb-2">
            I'm <span className="font-bold">Anonno Das</span> from Dhaka,
            Bangladesh. Specialized in cutting-edge web and mobile technologies
            as well as pixel-perfect designs.
          </p>
          <p className=" text-justify">
            <span className="font-bold">Self-driven</span>,{" "}
            <span className="font-bold">focused</span>, and{" "}
            <span className="font-bold">dedicated</span> Software Developer with{" "}
            <span className="font-bold">1+</span> years of experience, including{" "}
            <span className="font-bold">6+</span> months of industrial
            experience. I am passionate about programming, developing new
            products, and exploring new technologies. Well-versed in modern web
            technologies and version control systems. Slow-paced learner, a good
            team player, and committed to achieving the goal. Determined to
            deliver quality with an emphasis on excellence.
          </p>
        </div>
        <div className="opacity: 1; transform: none;">
          <h3 className="flex items-center text-3xl text-zinc-700 font-bold uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-4 h-8 w-8"
            >
              <path
                fill-rule="evenodd"
                d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Learning
            <span className="ml-2 inline-flex items-center rounded bg-zinc-800 px-2 h-4 text-xs font-medium text-zinc-300">
              Development
            </span>
          </h3>
          <p className="text-justify text-zinc-700 ">
            On January 1, 2024, I started to learn Web Development. The course
            was offered by Programming Hero. It was a beginner-level course that
            started from zero to a junior-level standard. Within sixth months, I
            completed the course successfully and learned the basics of MERN
            Stack. I finished a few projects with this tech stack. Besides this,
            to the extent of this course, I completed a long-term (7 weeks) team
            project, where I learned and familiarized the office culture and
            working process. That's how my web development learning started.
            Still, I'm learning and exploring web development.
          </p>
        </div>
        <div className="opacity: 1; transform: none;">
          <h3 className="flex items-center text-3xl text-zinc-700 font-bold uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-4 h-8 w-8"
            >
              <path
                fill-rule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Skills
          </h3>
          <p className="text-justify text-zinc-700 ">
            I'm skilled in HTML5, CSS3, Bootstrap, JavaScript, ES6, React JS,
            React Router, Node JS, Express JS, MongoDB, and Firebase
            Authentication.
          </p>
          <p className="text-justify text-zinc-700 ">
            I'm also familiar with JWT, React Native, Redux, Stripe, Tailwind
            CSS, Daisy UI, AntDesign, Shadcn UI and Material UI.
          </p>
          <p className="text-justify text-zinc-700 ">
            Besides these, I'm used to a few tools, like - Git, VS Code, Figma,
            Postman, Vercel, Netlify, and Chrome Dev Tool.
          </p>
          <p className="text-justify text-zinc-700 ">
            Currently, I'm working on Next JS, React Native and necessary
            packages.
          </p>
        </div>
        <div className="opacity: 1; transform: none;">
          <h3 className="flex items-center text-3xl text-zinc-700  font-bold uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-4 h-8 w-8"
            >
              <path
                fill-rule="evenodd"
                d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Education
          </h3>
          <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
              <li className="relative">
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500 group-hover:bg-fuchsia-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-lg font-semibold text-fuchsia-700">
                      European University of Bangladesh
                    </span>
                    <span className="text-xl font-bold text-zinc-700 ">
                      Bachelor of Science, Electrical and Electronic Engineering
                    </span>
                    <span className="text-zinc-600 ">
                      September 2021 - September 2024
                    </span>
                    <span className="text-zinc-600 ">Dhaka, Bangladesh</span>
                    {/* <span className="my-3">
                      <p className="text-zinc-700  font-semibold">Activity</p>
                    </span>
                    <span className="py-3 pl-4 pr-2 bg-stone-100 border-l-4 border-stone-200 rounded">
                      <p className="font-semibold text-zinc-600 ">
                        Research on Human-Computer Interaction (HCI)
                      </p>
                      <p className="text-zinc-600 ">
                        Analyzing Smartphone Users' Application Adoption
                        Behavior - An Approach for Achieving Wider Acceptance
                      </p>
                    </span> */}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="opacity: 1; transform: none;">
          <h3 className="flex items-center text-3xl text-zinc-700  font-bold uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-4 h-8 w-8"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                clip-rule="evenodd"
              ></path>
              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path>
            </svg>
            Experience
          </h3>
          <nav aria-label="Progress">
            <ol role="list" className="overflow-hidden">
              <li className="pb-10 relative">
                {/* <div
                  className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-fuchsia-500"
                  aria-hidden="true"
                ></div> */}
                <p
                  className="group relative flex items-start"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-3 border-fuchsia-500 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 animate-pulse group-hover:animate-ping"></span>
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-lg font-semibold text-fuchsia-700">
                      Mobile App Developer
                    </span>
                    <span className="text-xl font-bold text-zinc-700 ">
                      TS4U Ltd. - Intern
                    </span>
                    <span className="text-zinc-600 ">
                      October 2024 - Present
                    </span>
                    <span className="text-zinc-600 ">Dhaka, Bangladesh</span>
                  </span>
                </p>
              </li>
              {/* <li className="relative">
                <p className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-lg font-semibold text-fuchsia-700">
                      Analyst
                    </span>
                    <span className="text-xl font-bold text-zinc-700 ">
                      Quantanite - Full-time
                    </span>
                    <span className="text-zinc-600 ">
                      April 2020 - July 2020
                    </span>
                    <span className="text-zinc-600 ">Dhaka, Bangladesh</span>
                  </span>
                </p>
              </li> */}
            </ol>
          </nav>
        </div>
        <div className="opacity: 1; transform: none;">
          <h3 className="flex items-center text-3xl text-zinc-700  font-bold uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-4 h-8 w-8"
            >
              <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
              <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
              <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
            </svg>
            Current Stack
          </h3>
          <div className="flow-root">
            <ol role="list" className="ml-12">
              <li>
                <div className="relative pb-4">
                  <div className="relative flex justify-center items-center space-x-4">
                    <div>
                      <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-start items-center space-x-4">
                      <div>
                        <p className="text-lg font-semibold text-zinc-600">
                          JavaScript (ES6)
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs">
                        <span className="inline-flex items-center rounded text-zinc-600 bg-zinc-100 px-2 py-0.5 text-xs font-medium">
                          Mid-level
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <div className="relative flex justify-center items-center space-x-4">
                    <div>
                      <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-start items-center space-x-4">
                      <div>
                        <p className="text-lg font-semibold text-zinc-600">
                          React JS
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs">
                        <span className="inline-flex items-center rounded text-zinc-600 bg-zinc-100 px-2 py-0.5 text-xs font-medium">
                          Mid-level
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <div className="relative flex justify-center items-center space-x-4">
                    <div>
                      <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-start items-center space-x-4">
                      <div>
                        <p className="text-lg font-semibold text-zinc-600">
                          Next JS
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs">
                        <span className="inline-flex items-center rounded text-zinc-600 bg-zinc-100 px-2 py-0.5 text-xs font-medium">
                          Mid-level
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <div className="relative flex justify-center items-center space-x-4">
                    <div>
                      <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-start items-center space-x-4">
                      <div>
                        <p className="text-lg font-semibold text-zinc-600 ">
                          React Native
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs">
                        <span className="inline-flex items-center rounded text-zinc-600 bg-zinc-100 k:bg-zinc-800 px-2 py-0.5 text-xs font-medium">
                          Junior
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <div className="relative flex justify-center items-center space-x-4">
                    <div>
                      <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-start items-center space-x-4">
                      <div>
                        <p className="text-lg font-semibold text-zinc-600 ">
                          Redux Toolkit
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs">
                        <span className="inline-flex items-center rounded text-zinc-600 bg-zinc-100 px-2 py-0.5 text-xs font-medium">
                          Junior
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <div className="relative flex justify-center items-center space-x-4">
                    <div>
                      <span className="bg-green-500 h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-start items-center space-x-4">
                      <div>
                        <p className="text-lg font-semibold text-zinc-600 ">
                          Tailwind CSS
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-xs">
                        <span className="inline-flex items-center rounded text-zinc-600 bg-zinc-100 px-2 py-0.5 text-xs font-medium">
                          Senior
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="opacity: 1; transform: none;">
          <h3 className="flex items-center text-3xl text-zinc-700  font-bold uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="mr-4 h-8 w-8"
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
            </svg>
            Love To Do
          </h3>
          <p className="text-justify text-zinc-700 ">
            I love programming, developing new products, and exploring new
            technologies. I play video games in my spare time. Sometimes I watch
            movies. Also, love to go somewhere with family or friends on
            vacation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
