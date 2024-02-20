import { InViewOpacity } from "@/app/components/in-view-opacity";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

export const Page1 = ({ styles, offset = 1, src = "/gallery/3.jpeg" }) => {
  return (
    <ParallaxLayer
      factor={1}
      offset={offset}
      speed={0.5}
      className={styles.parallaxLayer}
    >
      <InViewOpacity rootMargin="-10%" triggerOnce={false} opacitySpeed="400ms">
        <div className={styles.card}>
          <p className={styles.cardText}>
            Our service technicians are highly trained and pay close attention
            to details. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci labore aliquid facere eos ab voluptatem quasi illum unde
            maiores harum voluptas similique quidem sed iure, dolor voluptatibus
            corrupti aperiam deleniti!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            officiis quae cupiditate esse aliquid. Aperiam, perspiciatis
            blanditiis. Magnam nemo totam eius asperiores vel consequuntur
            recusandae aspernatur reiciendis architecto hic voluptates odio
            voluptatem minus nisi error necessitatibus beatae sed, earum
            accusamus, expedita illo laborum assumenda saepe. Sequi fugiat cum
            cupiditate laborum consequuntur porro tempora nulla hic sunt, at nam
            ut assumenda eligendi a in beatae magnam commodi dolore! Illum
            deserunt commodi minus inventore alias eaque libero, blanditiis
            dolorem, eveniet dignissimos quae, itaque sed ut quam. Vitae ut,
            magni ipsam, dolor ex suscipit totam at hic a porro minus
            consequatur, tempore sint. Quasi veritatis dolore incidunt, quos
            tenetur iusto reprehenderit doloremque quis, temporibus deleniti
            culpa. Quod corrupti autem odio sint iure ex. Sint provident commodi
            necessitatibus illo, rerum, ullam repellat qui doloribus veritatis
            ab eaque corrupti eligendi repellendus dicta veniam sunt beatae
            aliquam? Molestias quaerat consectetur nobis aspernatur architecto
            doloribus, ratione explicabo numquam nesciunt praesentium ipsam
            mollitia repudiandae accusamus recusandae, laboriosam ducimus modi
            neque laudantium. Consequatur ea pariatur voluptates, et ipsam quasi
            iusto alias obcaecati veritatis blanditiis quos itaque ex reiciendis
            praesentium earum error nam, odit deleniti minus natus suscipit,
            numquam perspiciatis laudantium! Incidunt ex quam dignissimos
            aliquam magni accusamus maiores nulla modi et earum, excepturi
            quaerat a quis aspernatur tempora possimus ducimus consequatur
            quibusdam rem mollitia. Corporis deserunt recusandae eaque
            perspiciatis. Eveniet possimus cupiditate velit. Debitis, tenetur
            quibusdam repellat deleniti facere, quo sint reprehenderit soluta
            sequi nulla veritatis laboriosam minima quae, nesciunt similique
            exercitationem voluptatum deserunt neque perspiciatis quos eos
            aliquid ipsum maiores? Adipisci necessitatibus debitis provident
            dolore assumenda unde quod vero sapiente numquam sunt! Quaerat
            quidem, veniam amet dicta neque repudiandae odit hic, adipisci
            facilis ab provident officia nisi eligendi commodi sed alias
            explicabo accusamus ex possimus molestiae fugiat beatae recusandae
            quis! Ducimus quod sit, iste nihil possimus perspiciatis dolor.
          </p>
          <Image
            priority
            className={styles.cardImg}
            src={src}
            alt="?"
            width={640}
            height={480}
          />
        </div>
      </InViewOpacity>
    </ParallaxLayer>
  );
};
