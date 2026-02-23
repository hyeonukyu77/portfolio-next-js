import { redirect } from "next/navigation";
import { about } from "@/resources";

export default function Home() {
  redirect(about.path);
}
