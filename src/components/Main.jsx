import { useState } from "react"
import Resume from "../../public/pdfs/resume.pdf"
import {experiences, projects} from "../data/profile"

const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-white group-hover:text-teal-300 group-hover:translate-x-[2px] group-hover:translate-y-[-5px]" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
        </svg>
    )
}

const StraightArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-white group-hover:translate-x-[8px]" aria-hidden="true">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
        </svg>
    )
}

const Experience = ({ date, title, company, url, description, stack, index, hoverIndex, setHoverIndex }) => {
    const handleClick = () => {
        window.open(url, "_blank", "noreferrer");
    }

    let className = '';
    if (index === hoverIndex || hoverIndex === -1) {
        className = '';
    } else {
        className = 'opacity-50';
    }

    return (
        <div 
            className={`group flex gap-4 relative ${className}`} 
            onClick={handleClick}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <div className="cursor-pointer absolute -inset-y-6 -inset-x-6 group-hover:bg-hover-slate rounded-md"></div>
            <div className="basis-1/5 text-slate text-xs font-semibold pt-1">{date}</div>
            <div className="basis-4/5 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                    <h3 className="text-white text-base font-medium group-hover:text-teal-300">{title} · {company}</h3>
                    <Arrow />
                </div>
                <p className="text-slate">{description}</p>
                <div className="flex gap-3 mt-3">
                    {stack.map((stack, idx) => {
                        return (
                            <div key={idx} className="flex items-center text-teal-300 bg-stack-teal text-xs font-medium rounded-full px-3 py-2">{stack}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const Project = ({ imgUrl, title, description, stack, index, hoverIndex, setHoverIndex }) => {
    let className = '';
    if (index === hoverIndex || hoverIndex === -1) {
        className = '';
    } else {
        className = 'opacity-50';
    }

    return (
        <div 
            className={`group flex gap-4 relative items-center ${className}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <div className="cursor-pointer absolute -inset-y-6 -inset-x-6 group-hover:bg-hover-slate rounded-md"></div>
            <img src={imgUrl} className="w-[100px] h-[48px] self-start" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                    <h3 className="text-white text-base font-medium group-hover:text-teal-300">{title}</h3>
                    <Arrow />
                </div>
                <p className="text-slate">{description}</p>
                <div className="flex gap-3 mt-3">
                    {stack.map((stack, idx) => {
                        return (
                            <div key={idx} className="flex items-center text-teal-300 bg-stack-teal text-xs font-medium rounded-full px-3 py-2">{stack}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const Main = ({ aboutRef, experienceRef, projectRef }) => {
    const [experienceHoverIndex, setExperienceHoverIndex] = useState(-1);
    const [projectHoverIndex, setProjectHoverIndex] = useState(-1);

    return (
        <div className="flex-1">
            <div ref={aboutRef} className="text-slate">
                <p>
                    Etiam scelerisque mattis sapien eu hendrerit. Etiam ut viverra dui. Morbi ac ex lorem.
                </p>
                <p className="mt-6">
                    Ut elit massa, consectetur ac egestas ut, <span className="text-white">tincidunt vitae turpis.</span> Aliquam erat volutpat.
                </p>
                <p className="mt-6">
                    Nullam ac tellus lectus. Suspendisse quis purus est. Praesent venenatis ante velit, eget <span className="text-white">fermentum</span> tortor pharetra nec. Donec id ultricies erat. In vel erat sed ligula eleifend luctus ut et massa. Nam eget placerat urna.
                </p>
            </div>
            <div ref={experienceRef} className="flex flex-col gap-16 mt-28" onMouseLeave={() => setExperienceHoverIndex(-1)}>
                {
                    experiences.map((experience, idx) => (
                        <Experience 
                            key={idx} 
                            {...experience}
                            index={idx}
                            hoverIndex={experienceHoverIndex}
                            setHoverIndex={setExperienceHoverIndex}
                        />
                    ))
                }
            </div>
            <div className="group flex items-center gap-2 mt-10 cursor-pointer">
                <a href={Resume} target="_blank" rel="noreferrer">
                    <h3 className="text-white font-medium hover:underline decoration-teal-300 underline-offset-8">View Full Resume</h3>
                </a>
                <StraightArrow />
            </div>
            <div ref={projectRef} className="flex flex-col gap-16 mt-28" onMouseLeave={() => setProjectHoverIndex(-1)}>
                {
                    projects.map((project, idx) => {
                        return (
                            <Project 
                                key={idx}
                                {...project}
                                index={idx}
                                hoverIndex={projectHoverIndex}
                                setHoverIndex={setProjectHoverIndex}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main;