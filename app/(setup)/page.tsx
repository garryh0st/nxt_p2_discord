import React from "react";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <div className="bg-[#1e1e1e] h-full">Create Server </div>;
};

export default SetupPage;
