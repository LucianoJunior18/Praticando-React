/* eslint-disable react/prop-types */
import LinkButton from "../LinkButton";
import ProfileSection from "./ProfileSection";
import style from "./styles.module.css";
import Title from "./Title";
export default function Profile(props) {
  return (
    <div className={style.container}>
      <img className={style.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection className={style.links}>
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.likedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.instagramUrl}>Instagram</LinkButton>
        <LinkButton href={props.portifolioUrl}>Portifolio</LinkButton>

      </ProfileSection>
    </div>
  );
}
