import { sanityClient } from "@/utils/configSanity"
import Client from "@/components/Client"
import { TAbout, TContactInfoList, THome, TPageInfo, TProjectList, TSkillSet } from "@/typings";

export const revalidate = 60;

const getData = async (query: string) => {
  const data = await sanityClient.fetch(`*[_type == '${query}']`);
  return data;
}

export default async function Index() {
  const pageInfo         = await getData('pageInfo') as TPageInfo[]
  const home             = await getData('home') as THome[]
  const about            = await getData('about') as TAbout[]
  const skillSets        = await getData('skillSet') as TSkillSet[]
  const projectLists     = await getData('projectList') as TProjectList[]
  const contactInfoLists = await getData('contactInfoList') as TContactInfoList[]

  return (
    <Client
      pageInfo={pageInfo}
      home={home}
      about={about}
      skillSets={skillSets}
      projectLists={projectLists}
      contactInfoLists={contactInfoLists}
    />
  )
}
