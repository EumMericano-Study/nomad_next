import { useRouter } from "next/router";

export default function Blar() {
  const router = useRouter();
  console.log(router);
  return "poop and blar";
}
