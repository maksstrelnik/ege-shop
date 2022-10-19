import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { humburgerNav, categoryContent } from "../constants"
import styles from '../style'
import { useState } from "react"
import BuildCateg from './BuildCateg';
import ToolsCateg from './ToolsCateg';

const CatalogTabs = () => {
  const [active, setActive] = useState("");
  return (
    <div className={`flex left-0`}>
      <Tabs className={` flex`}>
        <TabList className='flex flex-col'>
            {humburgerNav.map((nav,index)=>(
              <>
                <Tab key={nav.id}

                  className={`${styles.paddingX} font-poppins md:items-center font-bold coursor-pointer text-[16px]  flex flex-row text-black ${active === index.title ? "text-white" : "text-dimWhite"} ${index === humburgerNav.length - 1 ? "mr-0" : "mr-6"}`}
                  onClick={() => setActive(nav.title)}>

                  <a href={`#${nav.id}`} className="text-black flex flex-row items-center  ">
                    <img src={nav.img} alt="img" className="w-[24px] h-[24px] mx-3 my-5" />
                    {nav.title}
                  </a>
                </Tab>
              </>
              ))}
        </TabList>

        <TabPanel className="border-l-2">
          <BuildCateg />
        </TabPanel>

        <TabPanel>
              <ToolsCateg/>
        </TabPanel>

        <TabPanel>
          <BuildCateg />
        </TabPanel>

        <TabPanel>
          <BuildCateg />
        </TabPanel>

      </Tabs>
    </div>
  )
}

export default CatalogTabs


