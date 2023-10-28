import { useForm } from "react-hook-form";

import { type userInfoType } from "@/services/storage";

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
    const res = await fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataRes = await res.json();
    console.log(dataRes);
  }

  return { control, handleSubmit, submit };
}
