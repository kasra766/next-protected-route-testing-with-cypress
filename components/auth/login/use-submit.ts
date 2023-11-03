import { useForm } from "react-hook-form";

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
    const res = await fetch("/api/login", {
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
