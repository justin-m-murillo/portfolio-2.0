import { sanityClient } from "@/utils/configSanity"
import Client from "@/components/Client"
import { TSkill, TSkillCategory } from "@/typings";

const getData = async (query: string) => {
  const data = await sanityClient.fetch(`*[_type == '${query}']`);
  return data;
}

export default async function Index() {
  const skills = (await getData('skill') as TSkill[])
  const skillCategories = (await getData('skillCategory') as TSkillCategory[])
  console.log(skills)
  return (
    <Client 
      skills={skills} 
      skillCategories={skillCategories} 
    />
  )
}
