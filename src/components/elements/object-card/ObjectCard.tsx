import Image from "next/image";

interface IObjectCardProps {
  image: any;
  title: string;
  description: string;
}

export default function ObjectCard({
  title,
  description,
  image,
}: IObjectCardProps) {
  return (
    <div className={"bg-[#EDEDED] w-[340px] h-[390px]"}>
      <div className={"px-3"}>
        <Image
          className={"mx-auto pt-5 max-h-[205px] min-h-[205px]"}
          width={"300"}
          height={205}
          src={image}
          alt={"Услуга"}
        />
        <h4 className={"font-semibold text-center pt-3 hover:text-green-800"}>
          {title}
        </h4>

        <h3 className={"text-center pt-6 pb-12"}>{description}</h3>
      </div>
    </div>
  );
}
