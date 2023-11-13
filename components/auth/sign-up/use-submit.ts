import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

import { login, type userInfoType } from "@/services/storage";
import { postFetch } from "@/services/api";

export function useSubmit() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      lname: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  async function submit(data: userInfoType) {
    try {
      const res = await postFetch("/api/sign-up", data);
      const dataResponse = await res.json();
      login.set(JSON.parse(dataResponse.data));
      redirect("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return { control, handleSubmit, submit };
}
