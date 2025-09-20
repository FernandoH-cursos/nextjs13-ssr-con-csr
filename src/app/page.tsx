import { redirect } from "next/navigation";

//* redirect permite redirigir a otra ruta desde el servidor directamente 
export default function HomePage() {
  redirect("/dashboard/main");
}
