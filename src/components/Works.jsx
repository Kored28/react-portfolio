import { Tilt } from "react-tilt"

import { styles } from "../styles"
import { github, eye } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"



const ProjectCard = ({ name, description, tags, image, source_code_link, netlify_code_link}) => {
  return (
    <div
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        style={{border: '1px solid #22c55e'}}
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div 
          className="absolute inset-0 flex justify-end
          m-3 card-img_hover"
          >
            <div
              onClick={() => window.open(netlify_code_link, "_blank")}
              className="orange-text-gradient w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer"
            >
              <img src={eye} alt="view"
                className="w-14 h-14 "
              />
            </div>
          </div>

          <div 
          className="absolute top-0 flex justify-start
          m-3 card-img_hover"
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div
      >
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>      
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-secondary text-[17px] 
          max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")