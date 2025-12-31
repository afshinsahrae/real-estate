"use client";

import styles from "@/module/AdminCard.module.css";
import usePublishActions from "@/utils/profileMethods";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import  { Toaster } from "react-hot-toast";
import { BiLeftArrowAlt } from "react-icons/bi";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const { publishHandler, deleteHandler } = usePublishActions();

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)} تومان</span>
      </div>
      <button onClick={() => publishHandler(_id)}>انتشار</button>
      <button onClick={() => deleteHandler(_id)} className={styles.delete}>
        حذف
      </button>
      <Link href={`/admin/${_id}`}>
        مشاهدی آگهی
        <BiLeftArrowAlt />
      </Link>
      <Toaster />
    </div>
  );
}

export default AdminCard;
