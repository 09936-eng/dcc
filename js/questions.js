// questions.js
// เก็บข้อมูลคำถามแยกออกมาต่างหาก เพื่อให้แก้ไข/เพิ่มคำถามได้ง่าย
// โดยไม่ต้องไปยุ่งกับโค้ด logic หลักใน script.js

const QUESTIONS = [
  {
    question: "เมืองหลวงของประเทศไทยคือเมืองใด?",
    answers: ["เชียงใหม่", "กรุงเทพมหานคร", "ภูเก็ต", "ขอนแก่น"],
    correctIndex: 1
  },
  {
    question: "HTML ย่อมาจากอะไร?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Marking Language"
    ],
    correctIndex: 0
  },
  {
    question: "ไฟล์ CSS ใช้ทำหน้าที่อะไรในเว็บไซต์?",
    answers: [
      "จัดการฐานข้อมูล",
      "กำหนดตรรกะการทำงาน",
      "จัดรูปแบบและดีไซน์หน้าเว็บ",
      "เชื่อมต่ออินเทอร์เน็ต"
    ],
    correctIndex: 2
  },
  {
    question: "ภาษาโปรแกรมใดที่ใช้ทำให้เว็บไซต์โต้ตอบกับผู้ใช้ได้ (Interactive)?",
    answers: ["HTML", "CSS", "JavaScript", "SQL"],
    correctIndex: 2
  },
  {
    question: "ดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์มากที่สุด?",
    answers: ["โลก", "ดาวศุกร์", "ดาวอังคาร", "ดาวพุธ"],
    correctIndex: 3
  }
];
