import Image from "next/image";

type FaceCardProps = {
  name: string;
//   imageUrl: string;
};

export default function FaceCard({ name }: FaceCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-64">
      {/* <Image
        src={imageUrl}
        alt={`${name}'s profile picture`}
        width={100}
        height={100}
        className="rounded-full object-cover"
      /> */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
    </div>
  );
}
