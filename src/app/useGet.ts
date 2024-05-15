import { useAuth } from "@clerk/clerk-react";

const baseUrl = "http://localhost:3000";

const useGet = () => {
  const { getToken } = useAuth();

  return async <T>({ url }: { url: string }): Promise<T> => {
    const result = await fetch(`${baseUrl}${url}`, {
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
