import { db } from "@/utils/firebaseAdmin";
const getKampus = async (req, res) => {
  const snap = await db.collection("kampus").get();
  if (snap.empty) {
    res.status(404).json({ message: "Data not found" });
  }
  const listKampus = [];
  snap.forEach((doc) => listKampus.push(doc.data()));
  console.log(listKampus);
  return res.json(listKampus);
};

export default getKampus;
