import { getChats } from "@/server/actions/chat";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useChats = (id) => {
  const query = useQuery({
    queryKey: ["chats", id],
    queryFn: async () => {
      const res = await getChats(id);
      return res;
    },
  });
  return query;
};

export default useChats;
