import { sanityClient } from "@/utils/configSanity"
import Client from "@/components/Client"
import { TAbout, THome, TSkill, TSkillCategory, TVideo } from "@/typings";

const getData = async (query: string) => {
  const data = await sanityClient.fetch(`*[_type == '${query}']`);
  return data;
}

export default async function Index() {
  const home = (await getData('home') as THome[])
  const about = (await getData('about') as TAbout[])
  const skills = (await getData('skill') as TSkill[])
  const skillCategories = (await getData('skillCategory') as TSkillCategory[])
  const video = (await getData('video') as TVideo[])

  return (
    <Client 
      home={home}
      about={about}
      skills={skills} 
      skillCategories={skillCategories}
      video={video}
    />
  )
}
