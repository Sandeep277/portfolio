import fitness from "./projectAssets/fitnessapp.png";
import youtube from "./projectAssets/youtubeclone.png";
import movieapp from "./projectAssets/movieapp.png";
import summarizeArticles from "./projectAssets/summarizeArticles.png";

const projectsData = [
  {
    img: fitness, 
    title: "Fetness App",
    about: "About Project 1",
    techStack: ['HTML', 'CSS', 'JavaScript','React', 'Fitness-API'],
    live: "https://fitnesss-app.netlify.app/",
    github: "https://github.com/Sandeep277/fitness-app",
  },
  {
    img: youtube, 
    title: "YouTube Clone",
    about: "About Project 2",
    techStack: ['HTML', 'tailwindcss', 'JavaScript', 'React', 'YouTube-API',],
    live: "https://youtube-clone-project-using-react.netlify.app/",
    github: "https://github.com/Sandeep277/youtube-clone",
  },
  {
    img: movieapp, 
    title: "Movies App",
    about: "About Project 3",
    techStack: ['HTML', 'CSS', 'JavaScript', 'React',],
    live: "https://go-for-movie-app-using-api.netlify.app/",
    github: "https://github.com/Sandeep277/movie-app",
  },
  {
    img: summarizeArticles, 
    title: "Summarize Articles",
    about: "About Project 4",
    techStack: ['JavaScript', 'React', 'API',],
    live: "https://summarize-articles-with-openai.netlify.app/",
    github: "https://github.com/Sandeep277/summarizer-your-article",
  },
];

export default projectsData;
