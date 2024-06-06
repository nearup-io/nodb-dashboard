import { createApi } from "@reduxjs/toolkit/query/react";
import { UserTelegramSettings } from "../reducors/user.slice";
import { getAxiosInstance } from "@/app/axios";
import { AxiosError, AxiosHeaders, Method } from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({
    url,
    method,
    data,
    params,
    headers,
  }: {
    url: string;
    method: Method;
    data?: unknown;
    params?: unknown;
    headers?: AxiosHeaders;
  }) => {
    try {
      const axios = getAxiosInstance();
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    syncUser: builder.mutation<void, void>({
      query: () => ({
        url: "users/auth",
        method: "POST",
      }),
    }),
    updateUserSettings: builder.mutation<
      UserTelegramSettings,
      UserTelegramSettings
    >({
      query: (data: UserTelegramSettings) => ({
        url: "users/settings/telegram",
        method: "PATCH",
        data,
      }),
    }),
  }),
});

export const { useUpdateUserSettingsMutation } = userApi;
