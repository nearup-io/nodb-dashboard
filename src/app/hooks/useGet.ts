import { useAuth } from "@clerk/clerk-react";
import { BASE_URL } from "@/utils/consts.ts";
import { useNavigate } from "react-router-dom";

const useGet = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();

  return async <T>({ url }: { url: string }): Promise<T> => {
    const result = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
      method: "GET",
    });

    if (result.status === 401) {
      navigate("/sign-in");
    }

    return (await result.json()) as T;
  };
};

export default useGet;
