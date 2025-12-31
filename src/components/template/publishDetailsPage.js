"use client";

import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "@/module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";

import styles from "@/template/PublishDetailsPage.module.css";
import { Toaster } from "react-hot-toast";
import usePublishActions from "@/utils/profileMethods";

function PublishDetailsPage({
  data: {
    _id,
    title,
    description,
    location,
    amenities,
    rules,
    constructionDate,
    realState,
    phone,
    price,
    category,
  },
}) {
  const { publishHandler, deleteHandler } = usePublishActions();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>{title}</h1>
          <span>
            <HiOutlineLocationMarker />
            {location}
          </span>
          <Title>توضیحات</Title>
          <p>{description}</p>
          <Title>امکانات رفاهی</Title>
          <ItemList data={amenities} />
          <Title>قوانین</Title>
          <ItemList data={rules} />
        </div>
        <div className={styles.sidebar}>
          <div className={styles.realState}>
            <SiHomebridge />
            <p>{realState}</p>
            <span>
              <AiOutlinePhone />
              {e2p(phone)}
            </span>
          </div>
          <ShareButton />
          <div className={styles.price}>
            <p>
              {icons[category]} {categories[category]}
            </p>
            <p>{sp(price)} تومان</p>
            <p>
              <BiCalendarCheck />
              {new Date(constructionDate).toLocaleDateString("fa-IR")}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => publishHandler(_id)}>انتشار</button>
        <button onClick={() => deleteHandler(_id)} className={styles.delete}>
          حذف
        </button>
        <Toaster />
      </div>
    </>
  );
}

export default PublishDetailsPage;
