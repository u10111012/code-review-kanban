import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from '@/lib/auth/next-auth'


const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      This is admin dashboard
      {JSON.stringify(session)}
    </div>
  );
};

export default AdminPage;