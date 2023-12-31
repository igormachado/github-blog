import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileFooter,
  ProfileHeader,
} from "./styles";
import avatarProfile from "../assets/avatar.svg";
import github from "../assets/github.svg";
import { Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { useState } from "react";

const profileInformations = [
  {
    id: 1,
    name: "Cameron Williamson",
    avatar_profile: avatarProfile,
    descriptionProfile:
      " Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.",
    github_link: "https://github.com/igormachado/feed-chat-react",
    job: "https://blog.rocketseat.com.br/",
    followers: "32 Seguidores",
  },
];

export function Profile() {
  const [profileInfo, setProfileInfo] = useState(profileInformations);
  return (
    <>
      {profileInfo.map((item) => (
        <ProfileContainer key={item.id}>
          <ProfileAvatar>
            <img src={item.avatar_profile} alt="foto perfil" />
          </ProfileAvatar>
          <ProfileContent>
            <div>
              <ProfileHeader>
                <h1>{item.name}</h1>
                <a href={item.github_link} target="_blank">
                  <img src={github} />
                </a>
              </ProfileHeader>
              <ProfileDescription>{item.descriptionProfile}</ProfileDescription>
              <ProfileFooter>
                <a href={item.github_link} target="_blank">
                  <GithubLogo size={20} /> cameronwll
                </a>
                <a href={item.job} target="_blank">
                  {" "}
                  <Buildings size={20} /> RocketSeat
                </a>
                <a href="#">
                  <Users size={20} /> {item.followers}
                </a>
              </ProfileFooter>
            </div>
          </ProfileContent>
        </ProfileContainer>
      ))}
    </>
  );
}
