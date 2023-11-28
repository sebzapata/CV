import { education, interests, jobs, myInfo, skills, statement } from "./data";

export default function Home() {
  return (
    <main>
      <div className="page">
        <div className="personalInfo">
          <h1 className="name">Sebastian Zapata</h1>
          <div className="details">
            {myInfo.map((info, idx) => (
              <span key={`personalInfo-${idx}`}>
                {info.icon} <p>{info.text}</p>
              </span>
            ))}
          </div>
          <p className="statement">{statement}</p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="details">
            {education.map((info, idx) => (
              <span key={`personalInfo-${idx}`}>
                {info.icon} <p>{info.text}</p>
              </span>
            ))}
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills--details">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </div>
        </div>
        <div>
          <h2>Experience</h2>
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
        <div className="personalInterests">
          <h2>Personal Interests</h2>
          <ul>
            {interests.map((interest, idx) => (
              <li key={`interestLine-${idx}`}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
