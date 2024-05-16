import { useAuth } from "@clerk/clerk-react";
import { BASE_URL } from "@/utils/consts.ts";

const useGet = () => {
  const { getToken } = useAuth();

  return async <T>({ url }: { url: string }): Promise<T> => {
    const result = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${await getToken()}`,
      },
      method: "GET",
    });

    return (await result.json()) as T;
  };
};

export default useGet;
