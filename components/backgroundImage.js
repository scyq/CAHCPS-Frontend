import Image from "next/image";
import style from "../styles/background.module.css";

const Background = () => (
  <div>
    <div className={style.bgWrap}>
      <Image
        alt="background"
        src={`/background.jpg`}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
);

export default Background;
