import Profile from "./components/Profile";
import img from "./assets/eu.png";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={img}
        name="Luciano Junior"
        bio="Front-End Developer"
        email="Junioristylo@gmail.com"
        phone="71987416836"
        githubUrl="https://github.com/LucianoJunior18"
        likedinUrl="https://www.linkedin.com/in/luciano-oliveira-93389a228/"
        instagramUrl="https://www.instagram.com/jr_oliveiiraa/"
        portifolioUrl="https://lucianojunior18.github.io/MeuPortifolio/"
      />
    </div>
  );
}
