import { useForm } from "react-hook-form";

import { login, type userInfoType } from "@/services/storage";
import { redirect } from "next/navigation";

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
      const res = await fetch("/api/sign-up", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataResponse = await res.json();
      console.log(JSON.parse(dataResponse.data));

      login.set(JSON.parse(dataResponse.data));
      redirect("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return { control, handleSubmit, submit };
}
