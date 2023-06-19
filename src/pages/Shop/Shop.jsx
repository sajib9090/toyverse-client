import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "../Toys/Toys";
import Aos from "aos";
import 'aos/dist/aos.css'

const Shop = () => {
  const [category, setCategory] = useState([]);
  const [tab, setTab] = useState("baby_dolls");

  useEffect(()=> {
    Aos.init(2000)
  },[])

  useEffect(() => {
    if (tab !== "") {
      fetch(`https://toyverse-server-folisonjayson-gmailcom.vercel.app/category/${tab}`)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
        })
        .catch((error) => {
          console.error(error);
          // Handle error, e.g., set appropriate error state
        });
    }
  }, [tab]);

  const handleTab = (subCategory) => {
    setTab(subCategory);
  };

  // console.log(category);
  return (
    <div className="my-28" data-aos = "fade-right">
      <h1 className="text-center text-4xl font-bold py-6">Toys By Category</h1>
      <Tabs>
        <div className="text-center">
        <TabList>
          <Tab onClick={() => handleTab("baby_dolls")}>Baby Dolls</Tab>
          <Tab onClick={() => handleTab("barbie")}>Barbie</Tab>
          <Tab onClick={() => handleTab("american_girl")}>American Girl</Tab>
        </TabList>
        </div>

        <TabPanel>
          {/* <div>
            {category?.map((cate) => (
              <p key={cate._id}>{cate.name}</p>
            ))}
          </div> */}
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-6 mt-10" data-aos = "fade-right">
        {category?.map((c) => (
          <Toys key={c._id} c={c} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
