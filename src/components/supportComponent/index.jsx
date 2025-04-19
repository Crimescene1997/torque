import { useState } from "react";
import styles from "./styles.module.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.active : ""}`}>
      <div className={styles.accordionHeader} onClick={onClick}>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        <span>{title}</span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "How experinced do i need to be to join a TorqAdventure tour?",
      content:
        "The specific tours are normally graded and advised with the trip details. Each ride will indicate the suggested level of the rider, what type of terrain, roads that will be experienced on the trip",
    },
    {
      title: "What types of motorcycles are provided for the tour?",
      content:
        "We do not provide motorcycles for the trip. We can arrange should this be necessary for our international clients.",
    },
    {
      title: "Are helmets and safety gear provided, or should I bring my own?",
      content:
        "Every rider needs to provide their own safety gear, boots, jacket, gloves, and helmet. No gear no ride.",
    },
    {
      title: "Can I join a tour as a solo rider, or do I need to come with a group?",
      content:
        "Absolutely! Solo riders are always welcome on these rides, normally with a small surcharge.",
    },
    {
      title: "How physically demanding are the tours?",
      content: "We will provide details of the physicality of the rides.",
    },
    {
      title: "What is included in the tour packages?",
      content:
        "Included in the tours, we normally cover dinner, bed and breakfast. Guided tours are included, a Sweep is included and normally a Support Vehicle is provided and is included.  Each tour will have its own guidelines in this regard.",
    },
    {
      title: "Can I bring a passenger on the tour, and is there an additional cost?",
      content:
        "Yes, Pillions are encouraged to join in all rides, this is always dependent on the nature of the terrain and the difficulty that will be experienced. This remains the discretion of the rider.",
    },
    {
      title: "What happens in case of unforeseen circumstances or emergencies during a tour?",
      content:
        "We always prioritize safety on our trips. We are specifically trained to handle most situations and safety protocols are always briefed before rides.",
    },
    {
      title: "How far in advance should I book a tour?",
      content:
        "It’s recommended to book in advance due to limited availability. Tours book up quickly.",
    },
    {
      title: "Are there age restrictions for participating in TorqAdventure tours?",
      content:
        "No age restrictions are applicable so long as the rider is fully licensed and that pillions etc are old enough to participate actively.",
    },
    {
      title: "Any Other Questions?",
      content:
        "Contact Peter Dixon on Whatsapp 083 265 7241 or send an e-mail to torqadventures@peterdixon.co.za",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h2>Frequently Asked Questions</h2>
        <p>How can we help you?</p>
      </div>

      <div className={styles.accordion}>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
