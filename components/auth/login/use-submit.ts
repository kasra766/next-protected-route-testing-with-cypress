import { postFetch } from "@/services/api";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { login } from "@/services/storage";

interface userLogin {
  userName: string;
  password: string;
}

export function useSubmit() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  async function submit(data: userLogin) {
    const res = await postFetch("/api/sign-up", data);
    const dataResponse = await res.json();
    login.set(JSON.parse(dataResponse.data));
    redirect("/home");
  }

  return { control, handleSubmit, submit };
}
