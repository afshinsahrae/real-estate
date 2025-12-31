"use client";

import Card from "@/module/Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import styles from "@/module/DashboardCard.module.css";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/module/Loader";
import { useState } from "react";

function DashboardCard({ data }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          {" "}
          ویرایش
          <FiEdit />
        </button>
        {loading ? (
          <div className={styles.loader}>

            <Loader />
          </div>
        ) : (
          <button onClick={deleteHandler}>
            {" "}
            حذف
            <AiOutlineDelete />
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
