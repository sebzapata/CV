import { education, interests, jobs, myInfo, skills } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="page">
        <div className="leftHandColumn p-5">
          <div className="personalInfo">
            <h1 className="name">Sebastian Zapata</h1>
            <span className="details">
              {myInfo.map((info, idx) => (
                <span className="flex" key={`personalInfo-${idx}`}>
                  {info.icon} <p>{info.text}</p>
                </span>
              ))}
            </span>
            <p>
              I am a professional, fullstack software developer, focusing on
              frontend development.
              <br />I have over 6 years&apos; experience using React and
              thoroughly enjoy having an idea and making it a reality on screen.
            </p>
          </div>
          <div className="education">
            <h2>Education</h2>
            {education.map((info, idx) => (
              <span className="flex" key={`personalInfo-${idx}`}>
                {info.icon} <p>{info.text}</p>
              </span>
            ))}
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </div>
          </div>
          <div className="personalInterests">
            <h2>Personal Interests</h2>
            <ul>
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightHandColumn">
          <h1>Experience</h1>
          {jobs.map((job) => (
            <div key={job.date} className="jobWrapper">
              <span className="jobHeader">
                <p className="jobHeader--date">{job.date}</p>
                <p className="jobHeader--company">{job.company}</p>
              </span>
              <div className="jobDescription">
                <ul>
                  {job.description.map((descriptionLine, idx) => (
                    <li key={`descriptionLine-${idx}`}>{descriptionLine}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
