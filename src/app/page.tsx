import { sanityClient } from "@/utils/configSanity"
import Client from "@/components/Client"
import { TAbout, THome, TSkill, TSkillCategory, TProject, TPageInfo } from "@/typings";

const getData = async (query: string) => {
  const data = await sanityClient.fetch(`*[_type == '${query}']`);
  return data;
}

export default async function Index() {
  const pageInfo = await getData('pageInfo') as TPageInfo[]
  const home = await getData('home') as THome[]
  const about = await getData('about') as TAbout[]
  const skills = await getData('skill') as TSkill[]
  const skillCategories = await getData('skillCategory') as TSkillCategory[]
  const projects = await getData('project') as TProject[]

  return (
    <Client
      pageInfo={pageInfo}
      home={home}
      about={about}
      skills={skills} 
      skillCategories={skillCategories}
      projects={projects}
    />
  )
}
