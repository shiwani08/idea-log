import { Card, Avatar, Tag, Typography } from "antd";

const { Title, Text } = Typography;

const crewMembers = [
  {
    name: "Monkey D. Luffy",
    age: 19,
    role: "Captain",
    roleColor: "red",
    jobTitle: "Captain of the Straw Hat Pirates",
    access: "Everything",
    image: "/images/luffy.jpg",
    description:
      "Luffy founded the Straw Hat Crew, leads with his dream to become Pirate King, inspires his crew, and brings energy to every adventure. Outside combat, he loves eating meat and making friends."
  },
  {
    name: "Roronoa Zoro",
    age: 21,
    role: "Swordsman",
    roleColor: "green",
    jobTitle: "First Mate & Swordsman",
    access: "Combat & Strategy",
    image: "/images/zoro.jpg",
    description:
      "Zoro is the right-hand man of Luffy, skilled in three-sword style, and pursues becoming the world’s greatest swordsman. He values loyalty and spends his free time training or napping."
  },
  {
    name: "Nami",
    age: 20,
    role: "Navigator",
    roleColor: "orange",
    jobTitle: "Navigator",
    access: "Navigation & Finance",
    image: "/images/nami.jpg",
    description:
      "Nami charts courses for the crew, manages their finances, and finds treasure. She’s clever and resourceful, enjoying shopping, reading maps, and relaxing at sea."
  },
  {
    name: "Usopp",
    age: 19,
    role: "Sniper",
    roleColor: "blue",
    jobTitle: "Sniper and Inventor",
    access: "Long-Range Combat & Engineering",
    image: "/images/usopp.jpg",
    description:
      "Usopp is the crew’s sharpshooter and inventor, known for his marksmanship and storytelling skills. He supports the crew with unique gadgets and creative tactics."
  },
  {
    name: "Sanji",
    age: 21,
    role: "Cook",
    roleColor: "gold",
    jobTitle: "Cook of the Straw Hat Pirates",
    access: "Food Preparation & Combat (Martial Arts)",
    image: "/images/sanji.jpg",
    description:
      "Sanji is the crew’s culinary expert and a fierce fighter who uses powerful kicks. He cares deeply for his crewmates and enjoys showing off his cooking skills."
  },
  {
    name: "Tony Tony Chopper",
    age: 17,
    role: "Doctor",
    roleColor: "cyan",
    jobTitle: "Doctor and Medical Expert",
    access: "Medical Treatment & Animal Communication",
    image: "/images/chopper.jpg",
    description:
      "Chopper is a reindeer with human traits and the crew’s doctor, skilled in medicine and healing. He’s curious, kind-hearted, and always ready to help."
  },
  {
    name: "Nico Robin",
    age: 30,
    role: "Archaeologist",
    roleColor: "purple",
    jobTitle: "Archaeologist",
    access: "History & Intelligence",
    image: "/images/robin.jpg",
    description:
      "Robin is the crew’s historian and archaeologist, possessing vast knowledge about the world’s history and ancient texts. She’s calm, intelligent, and resourceful."
  },
  {
    name: "Franky",
    age: 36,
    role: "Shipwright",
    roleColor: "red",
    jobTitle: "Shipwright and Engineer",
    access: "Ship Maintenance & Repairs",
    image: "/images/franky.jpg",
    description:
      "Franky is the shipwright responsible for building and maintaining the crew’s ship, the Thousand Sunny. He’s bold, creative, and passionate about mechanics."
  },
  {
    name: "Brook",
    age: 90,
    role: "Musician",
    roleColor: "black",
    jobTitle: "Musician",
    access: "Music & Combat",
    image: "/images/brook.jpg",
    description:
      "Brook is the crew’s musician, a lively skeleton who plays music and fights with a unique sword style. He brings humor and spirit to the crew."
  },
  {
    name: "Jinbe",
    age: 46,
    role: "Helmsman",
    roleColor: "blue",
    jobTitle: "Helmsman and Fish-Man Karate Master",
    access: "Navigation & Combat",
    image: "/images/jinbe.jpg",
    description:
      "Jinbe is the helmsman with exceptional skills in Fish-Man Karate. He provides strong leadership and calm guidance on the tumultuous seas."
  },
  {
    name: "Vivi",
    age: 19,
    role: "Princess",
    roleColor: "pink",
    jobTitle: "Princess of Alabasta",
    access: "Diplomacy & Intelligence",
    image: "/images/vivi.jpg",
    description:
      "Vivi is the princess of Alabasta and an ally to the Straw Hat Crew. She is courageous and compassionate, working to protect her kingdom from internal threats."
  }
];

export default function StrawHatCrew() {
  return (
    <div style={{padding: "30px" }}>

      {crewMembers.map((member) => (
        <Card
          key={member.name}
          style={{
            marginBottom: 24,
            padding: 16,
            borderRadius: 16,
            boxShadow: "0 4px 16px #0001",
            background: member.roleColor
          }}
          bodyStyle={{
            display: "flex",
            alignItems: "center",
            background: "#fff0"
          }}
        >
          <Avatar
            src={member.image}
            size={96}
            style={{ marginRight: 32, border: "3px solid #e0e0e0", background: "#fff" }}
          />

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <Title level={4} style={{ margin: 0 }}>
                {member.name}
              </Title>
              <Text type="secondary" style={{ fontSize: 18 }}>
                | {member.age}
              </Text>
            </div>
            <div style={{ marginTop: 6, marginBottom: 16, display: "flex", gap: 14 }}>
              <Tag color={member.roleColor}>{member.role}</Tag>
              <Text>
                Job Title: <strong>{member.jobTitle}</strong>
              </Text>
              <Text>
                Access: <strong>{member.access}</strong>
              </Text>
            </div>
            <Text>{member.description}</Text>
          </div>
        </Card>
      ))}
    </div>
  );
}
